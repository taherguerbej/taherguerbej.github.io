import { type SkillGroup } from "@/types/portfolio-types";

/** Grouped as on the CV. Webots, OpenCV and YOLO come from course projects. */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Robot learning",
    items: [
      "Reinforcement learning (PPO, DQN)",
      "Deep learning",
      "PyTorch",
      "Isaac Sim",
      "Isaac Lab",
    ],
  },
  {
    title: "Robotics",
    items: [
      "ROS 2",
      "MoveIt 2",
      "Nav2",
      "Gazebo",
      "Webots",
      "PyBullet",
      "Control barrier functions",
      "Kinematics",
    ],
  },
  {
    title: "Perception",
    items: [
      "OpenCV",
      "YOLO",
      "U-Net / CNN",
      "Hand-eye calibration",
      "SLAM",
    ],
  },
  {
    title: "Hardware",
    items: [
      "AgileX Piper",
      "UR3e",
      "Jetson Orin",
      "ZED X",
      "RealSense",
      "CAN bus",
    ],
  },
  {
    title: "Programming",
    items: ["Python", "C++", "C", "MATLAB", "VHDL", "Assembly"],
  },
  {
    title: "Tools",
    items: [
      "Linux (Ubuntu)",
      "Git",
      "LaTeX",
      "CATIA",
      "SolidWorks",
      "Mastercam",
    ],
  },
];

export const LANGUAGES = [
  { name: "English", level: "Fluent (TOEIC 835)" },
  { name: "French", level: "Fluent" },
  { name: "German", level: "A2 (B1 course in progress)" },
  { name: "Arabic", level: "Native" },
] as const;

/** Flat list for the scrolling marquee in About. */
export const SKILL_CHIPS = [
  "ROS 2",
  "Isaac Lab",
  "PPO",
  "PyTorch",
  "MoveIt 2",
  "Nav2",
  "Gazebo",
  "Control barrier functions",
  "OpenCV",
  "Python",
  "C++",
  "MATLAB",
  "Jetson Orin",
  "SolidWorks",
  "Linux",
  "Git",
];
