/**
 * Kinematic chain of the AgileX Piper arm, copied from
 * agx_arm_urdf/piper/urdf/piper_description.urdf (MIT, AgileX Robotics).
 * Units: metres and radians, URDF convention (z up, rpy fixed-axis).
 *
 * Phase 2 keeps this chain and swaps the placeholder link shapes in
 * robot-arm.tsx for the real Piper meshes (one GLB node per link).
 */
export interface UrdfJoint {
  name: string;
  /** Joint origin in the parent link frame. */
  xyz: [number, number, number];
  /** Fixed-axis roll, pitch, yaw of the joint frame. */
  rpy: [number, number, number];
  /** All Piper joints rotate about their local z axis. */
  limits: [number, number];
}

export const PIPER_JOINTS: UrdfJoint[] = [
  { name: "joint1", xyz: [0, 0, 0.123], rpy: [0, 0, 0], limits: [-2.618, 2.618] },
  {
    name: "joint2",
    xyz: [0, 0, 0],
    rpy: [1.5707963, -0.1357866, -3.1415926],
    limits: [0, 3.1415926],
  },
  {
    name: "joint3",
    xyz: [0.28503, 0, 0],
    rpy: [0, 0, -1.7938494],
    limits: [-2.9670597, 0],
  },
  {
    name: "joint4",
    xyz: [-0.02198, -0.25075, 0],
    rpy: [1.5707963, 0, 0],
    limits: [-1.7453292, 1.7453292],
  },
  {
    name: "joint5",
    xyz: [0, 0, 0],
    rpy: [-1.5707963, 0, 0],
    limits: [-1.2217304, 1.2217304],
  },
  {
    name: "joint6",
    xyz: [8.8259e-5, -0.091, 0],
    rpy: [1.5707963, 0, 0],
    limits: [-2.0943951, 2.0943951],
  },
];

/** Zero configuration: the arm folded on its base. */
export const PIPER_FOLDED = [0, 0, 0, 0, 0, 0];

/**
 * Joint-space keyframes for the idle animation, all inside the limits.
 * The loop starts from the folded pose once, then cycles from index 1.
 */
export const ARM_KEYFRAMES: number[][] = [
  PIPER_FOLDED,
  [0, 1.2, -1.0, 0, 0.6, 0],
  [0.45, 1.6, -0.9, 0, 0.4, 0.6],
  [0.1, 1.0, -1.4, 0.3, 1.0, 0],
  [-0.4, 0.8, -1.6, 0, 0.9, -0.5],
  [-0.5, 1.5, -0.95, -0.2, 0.5, 0],
];

export const ARM_MOTION = {
  /** Seconds to move between two keyframes. */
  move: 2.6,
  /** Seconds to hold each pose. */
  hold: 0.7,
  /** How far the base turns toward the pointer, in radians. */
  pointerYaw: 0.35,
  /** Gripper opening in metres (each finger). */
  gripperOpen: 0.018,
} as const;
