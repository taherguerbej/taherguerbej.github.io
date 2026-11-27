import { type FocusArea } from "@/types/portfolio-types";

/** Replaces the template's "Services". Every bullet maps to a CV line. */
export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 1,
    title: "Robot learning",
    description:
      "Training robot behaviours with reinforcement learning in simulation, and checking why a policy fails before trusting it.",
    icon: "M3 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M17 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 6.5l10 4.5M7 17.5l10-4.5M5 8v8",
    bullets: [
      "PPO search and reach policies in Isaac Lab",
      "Replaced a fragile single dual-arm policy with separate modules",
      "DQN, Policy Gradient and Actor-Critic compared on a TurtleBot3",
    ],
    appliedIn: ["MIRMI, TU Munich", "TurtleBot3 RL project"],
  },
  {
    id: 2,
    title: "Perception",
    description:
      "Turning camera data into positions a robot can act on, from learned vision modules to calibrated depth sensors.",
    icon: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zM9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0",
    bullets: [
      "Learned keypoint + range module: 1.67 mm median 3-D error (simulation)",
      "Depth-based localization and hand-eye calibration on a UR3e",
      "ZED X stereo camera on a Jetson Orin with ROS 2",
    ],
    appliedIn: ["MIRMI, TU Munich", "REMAIN shoe inspection"],
  },
  {
    id: 3,
    title: "Safe control",
    description:
      "Keeping robots inside safe limits while a policy or an operator drives them, with a filter that changes commands only when needed.",
    icon: "M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3zM9 12l2 2 4-4",
    bullets: [
      "Control-barrier-function safety filter for two Piper arms at 100 Hz",
      "Joint-limit, self- and inter-arm collision constraints, on real robots",
      "LiDAR-based safety supervision for a mobile robot (simulation)",
    ],
    appliedIn: ["MIRMI, TU Munich", "Boundary detection project"],
  },
  {
    id: 4,
    title: "Planning & integration",
    description:
      "Connecting perception, planning and hardware into one working ROS 2 system, in simulation first and then on the robot.",
    icon: "M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M8 18h5a3 3 0 0 0 0-6h-2a3 3 0 0 1 0-6h5",
    bullets: [
      "MoveIt 2 collision-aware planning for multiple camera viewpoints",
      "SLAM mapping and an analysis of Nav2 limitations",
      "Sim-to-real deployment on a physical UR3e",
    ],
    appliedIn: ["REMAIN shoe inspection", "Boundary detection project"],
  },
];

export const FOCUS_ACCENTS = [
  "from-aqua via-royal to-lavender",
  "from-royal via-coral to-aqua",
  "from-lavender via-royal to-aqua",
  "from-coral via-aqua to-royal",
] as const;

export const STACK_SCALE_STEP = 0.04;

export const STACK_OFFSET_REM = 1.25;
