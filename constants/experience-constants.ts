import { type Experience } from "@/types/portfolio-types";

export const EXPERIENCES: Experience[] = [
  {
    title: "Research Intern · Bimanual Robot Learning and Active Perception",
    job: "MIRMI, Technical University of Munich · Munich, Germany",
    date: "May - Sep 2026",
    contents: [
      "Built a dual-arm safety filter (control barrier functions) for two AgileX Piper arms and ran it on the real robots at 100 Hz.",
      "Built an Isaac Lab task where a camera arm searches for a hidden target and the other arm reaches it, using separate PPO search and reach policies.",
      "Trained a vision module that locates the target to 1.67 mm median 3-D error in simulation.",
      "Integrated the full pipeline in simulation: 50% more targets reached under occlusion by remembering previous camera views.",
    ],
  },
  {
    title: "Intern · Industrial Robotic Arm Modeling and Control",
    job: "SZ METAL · Monastir, Tunisia",
    date: "July 2025",
    contents: [
      "Modeled and simulated a robotic arm (URDF, kinematics).",
      "Built a robot-agnostic MATLAB control framework.",
    ],
  },
  {
    title: "Production Intern",
    job: "Watts Electronics · Monastir, Tunisia",
    date: "July 2024",
    contents: [
      "Electronics production workflows, quality constraints and shop-floor practices.",
    ],
  },
];

export const EDUCATION: Experience[] = [
  {
    title: "Engineering Master's Degree in Mechanical Engineering",
    job: "SIGMA Clermont, Clermont Auvergne INP · Clermont-Ferrand, France",
    date: "2025 - 2027 (expected)",
    contents: [
      "Specialisation: Innovative Mechanisms and Robots (English-taught), double degree with ENISO.",
      "Relevant courses: ROS 2, Robot Kinematics, Computer Vision, Machine Learning, Reinforcement Learning.",
    ],
  },
  {
    title: "Engineering Master's Degree in Mechatronics Engineering",
    job: "National Engineering School of Sousse (ENISO) · Sousse, Tunisia",
    date: "2023 - 2027 (expected)",
    contents: [
      "Rank: 5/51.",
      "Relevant courses: Control Systems, Mechanical Design, Sensor Calibration, Microcontrollers, Assembly language.",
    ],
  },
];
