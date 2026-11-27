"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type FC,
  type ReactNode,
} from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import {
  CapsuleGeometry,
  Euler,
  MeshStandardMaterial,
  Quaternion,
  Vector3,
  type Group,
} from "three";
import {
  ARM_KEYFRAMES,
  ARM_MOTION,
  PIPER_JOINTS,
} from "@/constants/robot-constants";
import { type RobotArmProps } from "@/types/portfolio-types";

/**
 * Interactive robot arm for the hero.
 *
 * The kinematic chain is the real AgileX Piper (constants/robot-constants.ts),
 * so joint angles here mean the same as on the robot. The link shapes are
 * placeholders (capsules, housings, a simple gripper). Phase 2 replaces
 * <LinkShape> with the decimated Piper meshes and keeps everything else.
 */

const Y_AXIS = new Vector3(0, 1, 0);
const URDF_TO_THREE: [number, number, number] = [-Math.PI / 2, 0, 0];

const ease = (alpha: number) => 0.5 - 0.5 * Math.cos(Math.PI * alpha);

const clamp = (value: number, [low, high]: [number, number]) =>
  Math.min(high, Math.max(low, value));

/** Joint angles at time t: unfold once, then loop through the keyframes. */
const sampleJoints = (t: number, out: number[]) => {
  const { move, hold } = ARM_MOTION;
  const loop = ARM_KEYFRAMES.length - 1;
  let from: number[];
  let to: number[];
  let alpha: number;

  if (t < move) {
    from = ARM_KEYFRAMES[0];
    to = ARM_KEYFRAMES[1];
    alpha = t / move;
  } else {
    const cycle = move + hold;
    const u = t - move;
    const segment = Math.floor(u / cycle) % loop;
    const local = u % cycle;
    from = ARM_KEYFRAMES[1 + segment];
    to = ARM_KEYFRAMES[1 + ((segment + 1) % loop)];
    alpha = local < hold ? 0 : (local - hold) / move;
  }

  const k = ease(Math.min(1, alpha));
  for (let i = 0; i < out.length; i++) {
    out[i] = from[i] + (to[i] - from[i]) * k;
  }
};

interface Materials {
  body: MeshStandardMaterial;
  housing: MeshStandardMaterial;
  accent: MeshStandardMaterial;
}

const useMaterials = (): Materials => {
  const materials = useMemo(
    () => ({
      // Low metalness: there is no environment map, so a metallic surface
      // has nothing to reflect and renders almost black.
      body: new MeshStandardMaterial({
        color: "#56688f",
        metalness: 0.2,
        roughness: 0.42,
      }),
      housing: new MeshStandardMaterial({
        color: "#7385ad",
        metalness: 0.25,
        roughness: 0.35,
      }),
      accent: new MeshStandardMaterial({
        color: "#22d3ee",
        emissive: "#22d3ee",
        emissiveIntensity: 1.6,
        metalness: 0.1,
        roughness: 0.4,
      }),
    }),
    []
  );

  useEffect(
    () => () => Object.values(materials).forEach((m) => m.dispose()),
    [materials]
  );

  return materials;
};

/** A cylinder whose axis is the local z axis (the joint axis). */
const Housing: FC<{
  radius: number;
  length: number;
  z?: number;
  materials: Materials;
}> = ({ radius, length, z = 0, materials }) => (
  <group position={[0, 0, z]} rotation={[Math.PI / 2, 0, 0]}>
    <mesh material={materials.housing}>
      <cylinderGeometry args={[radius, radius, length, 32]} />
    </mesh>
    <mesh material={materials.accent}>
      <cylinderGeometry args={[radius * 1.04, radius * 1.04, length * 0.12, 32]} />
    </mesh>
  </group>
);

/** A capsule from the frame origin to `to`. */
const Segment: FC<{
  to: [number, number, number];
  radius: number;
  materials: Materials;
}> = ({ to, radius, materials }) => {
  const { geometry, position, quaternion } = useMemo(() => {
    const target = new Vector3(...to);
    const length = target.length();
    return {
      geometry: new CapsuleGeometry(radius, length, 8, 24),
      position: target.clone().multiplyScalar(0.5),
      quaternion: new Quaternion().setFromUnitVectors(
        Y_AXIS,
        target.clone().normalize()
      ),
    };
  }, [to, radius]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <mesh
      geometry={geometry}
      material={materials.body}
      position={position}
      quaternion={quaternion}
    />
  );
};

/** Placeholder shape of link `index` (1-6), drawn in that link's frame. */
const LinkShape: FC<{ index: number; materials: Materials }> = ({
  index,
  materials,
}) => {
  const next = PIPER_JOINTS[index]?.xyz;
  const hasSegment = next && Math.hypot(...next) > 1e-3;

  const housing: Record<number, [number, number]> = {
    1: [0.05, 0.07],
    2: [0.046, 0.1],
    3: [0.04, 0.09],
    4: [0.033, 0.05],
    5: [0.031, 0.07],
    6: [0.03, 0.014],
  };
  const [radius, length] = housing[index];

  return (
    <>
      <Housing
        radius={radius}
        length={length}
        z={index === 1 ? -0.03 : index === 6 ? 0.007 : 0}
        materials={materials}
      />
      {hasSegment && (
        <Segment
          to={next}
          radius={index === 5 ? 0.025 : 0.031}
          materials={materials}
        />
      )}
    </>
  );
};

type Register = (index: number, node: Group | null) => void;

const Gripper: FC<{
  materials: Materials;
  registerFinger: Register;
}> = ({ materials, registerFinger }) => (
  <group>
    <mesh position={[0, 0, 0.035]} material={materials.housing}>
      <boxGeometry args={[0.085, 0.032, 0.04]} />
    </mesh>
    {[-1, 1].map((side, i) => (
      <group
        key={side}
        ref={(node) => registerFinger(i, node)}
        position={[side * 0.02, 0, 0.08]}
      >
        <mesh material={materials.body}>
          <boxGeometry args={[0.01, 0.022, 0.055]} />
        </mesh>
        <mesh position={[0, 0, 0.026]} material={materials.accent}>
          <boxGeometry args={[0.011, 0.023, 0.004]} />
        </mesh>
      </group>
    ))}
  </group>
);

/** Nest one joint frame, its rotating group and the rest of the chain. */
const Chain: FC<{
  index: number;
  materials: Materials;
  registerJoint: Register;
  tip: ReactNode;
}> = ({ index, materials, registerJoint, tip }) => {
  const joint = PIPER_JOINTS[index];
  const frame = useMemo(() => new Euler(...joint.rpy, "ZYX"), [joint]);
  const last = index === PIPER_JOINTS.length - 1;

  return (
    <group position={joint.xyz} rotation={frame}>
      <group
        ref={(node) => registerJoint(index, node)}
      >
        <LinkShape index={index + 1} materials={materials} />
        {last ? (
          tip
        ) : (
          <Chain
            index={index + 1}
            materials={materials}
            registerJoint={registerJoint}
            tip={tip}
          />
        )}
      </group>
    </group>
  );
};

export const RobotArm: FC<RobotArmProps> = ({
  scale = 3.7,
  position = [2.0, -0.95, 0],
}) => {
  const materials = useMaterials();
  const jointRefs = useRef<(Group | null)[]>([]);
  const fingerRefs = useRef<(Group | null)[]>([]);
  const time = useRef(0);
  const yaw = useRef({ value: 0 });
  const joints = useRef<number[]>(new Array(PIPER_JOINTS.length).fill(0));

  const registerJoint = useCallback<Register>((index, node) => {
    jointRefs.current[index] = node;
  }, []);
  const registerFinger = useCallback<Register>((index, node) => {
    fingerRefs.current[index] = node;
  }, []);

  useFrame((state, delta) => {
    time.current += Math.min(delta, 0.1);
    sampleJoints(time.current, joints.current);
    easing.damp(
      yaw.current,
      "value",
      state.pointer.x * ARM_MOTION.pointerYaw,
      0.6,
      delta
    );

    PIPER_JOINTS.forEach((joint, i) => {
      const node = jointRefs.current[i];
      if (!node) return;
      const offset = i === 0 ? yaw.current.value : 0;
      node.rotation.z = clamp(joints.current[i] + offset, joint.limits);
    });

    const open =
      0.004 + ARM_MOTION.gripperOpen * (0.5 + 0.5 * Math.sin(time.current * 1.1));
    fingerRefs.current.forEach((finger, i) => {
      if (finger) finger.position.x = (i === 0 ? -1 : 1) * (0.006 + open);
    });
  });

  return (
    <group position={position} scale={scale} rotation={[0, -2.2, 0]}>
      <group rotation={URDF_TO_THREE}>
        {/* base_link */}
        <mesh position={[0, 0, 0.004]} rotation={[Math.PI / 2, 0, 0]} material={materials.housing}>
          <cylinderGeometry args={[0.085, 0.09, 0.008, 48]} />
        </mesh>
        <mesh position={[0, 0, 0.065]} rotation={[Math.PI / 2, 0, 0]} material={materials.body}>
          <cylinderGeometry args={[0.052, 0.06, 0.115, 40]} />
        </mesh>
        <mesh position={[0, 0, 0.009]} material={materials.accent}>
          <ringGeometry args={[0.1, 0.104, 64]} />
        </mesh>

        <Chain
          index={0}
          materials={materials}
          registerJoint={registerJoint}
          tip={<Gripper materials={materials} registerFinger={registerFinger} />}
        />
      </group>
    </group>
  );
};
