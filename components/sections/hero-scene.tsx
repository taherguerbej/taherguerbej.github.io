"use client";

import { Suspense, useRef, type FC } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { RobotArm } from "@/components/portfolio/robot-arm";
import { Loader } from "@/components/portfolio/loader";
import { useSceneActive } from "@/hooks/use-scene-active";

const Rig: FC = () => {
  useFrame((state: RootState, delta: number) => {
    easing.damp3(
      state.camera.position,
      [state.pointer.x / 10, 1 + state.pointer.y / 10, 3],
      0.5,
      delta
    );
  });
  return null;
};

export const HeroScene: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const frame = useRef<HTMLElement>(null);
  const active = useSceneActive({ whenVisible: frame });

  return (
    <figure
      ref={frame}
      className="absolute inset-0"
      style={{ width: "100vw", height: "100vh" }}
      aria-label="Animated robot arm with the kinematics of an AgileX Piper"
    >
      <Canvas
        camera={{ position: [0, 1, 3] }}
        dpr={[1, 1.75]}
        frameloop={active ? "always" : "never"}
      >
        <ambientLight intensity={0.7} />
        <hemisphereLight args={["#c7d6ff", "#0b1230", 1.1]} />
        <directionalLight position={[3, 4, 4]} intensity={2.6} />
        <directionalLight position={[-4, 2, -3]} intensity={2.2} color="#3b5bff" />
        <directionalLight position={[-1, -1, 3]} intensity={0.8} color="#22d3ee" />
        <Suspense fallback={<Loader />}>
          <RobotArm
            scale={isMobile ? 2.4 : undefined}
            position={isMobile ? [0, -1.4, 0] : undefined}
          />
          <Rig />
        </Suspense>
      </Canvas>
    </figure>
  );
};
