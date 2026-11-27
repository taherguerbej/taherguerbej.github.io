import { type Transition } from "motion/react";
import { type OtherProject, type Project } from "@/types/portfolio-types";

/**
 * Flagship projects for the pinned showcase.
 * Facts come from pfe_2027/cv_en_2027.tex and the project reports.
 * Label every simulation result as such. Add media under public/media/.
 */
export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Active Perception for Bimanual Manipulation",
    category: "Research internship · MIRMI, TU Munich",
    period: "May - Sep 2026",
    status: "Completed",
    description:
      "Two robot arms work as a team: one moves a wrist camera to find a target hidden behind leaves, the other reaches it, and a safety filter checks every command before it reaches the motors.",
    subDescription: [
      "Built a 12-DOF dual-arm safety filter (control barrier functions) for two AgileX Piper arms, running at 100 Hz between every policy and the motors.",
      "Ran it on the real robots: a replayed RL trajectory ended within 0.002 rad, and a simulated twin matched the hardware within 0.033 rad.",
      "Built an Isaac Lab task where an eye-in-hand camera arm searches for a target hidden by leaves and the other arm reaches it; replaced a fragile single dual-arm policy with separate PPO search and reach policies.",
      "Trained a supervised vision module (keypoint head + measured range): 1.67 mm median 3-D error in simulation, 13.6× better than direct regression.",
      "Integrated the full search-and-reach pipeline in simulation: every target reached without occlusion, and 50% more targets reached under occlusion by remembering previous camera views.",
      "Brought up a ZED X stereo camera on a Jetson Orin with ROS 2 (depth within 1 cm of a tape-measured reference).",
    ],
    tags: [
      "Isaac Lab",
      "PPO",
      "PyTorch",
      "Control barrier functions",
      "ROS 2",
      "Jetson Orin",
      "ZED X",
      "AgileX Piper",
    ],
    accent: "from-aqua/40 to-royal/10",
    media: {
      type: "video",
      src: "/media/mirmi/active-search.mp4",
      poster: "/media/mirmi/active-search.jpg",
      alt: "Simulated dual-arm robot: a wrist camera searches for a red ball among leaves, then the second arm reaches it.",
      caption:
        "Simulation (Isaac Sim): the camera arm searches for the red target, then the other arm reaches it. Left: outside view. Right: wrist camera.",
    },
    gallery: [
      {
        type: "image",
        src: "/media/mirmi/dual-piper-rig.jpg",
        alt: "Two AgileX Piper robot arms on a table inside the MIRMI lab cage.",
        caption: "Real robots: the dual-Piper rig at MIRMI.",
      },
      {
        type: "video",
        src: "/media/mirmi/hidden-target-reach.mp4",
        poster: "/media/mirmi/hidden-target-reach.jpg",
        alt: "Simulated search where the target is hidden behind leaves, found by the camera arm and reached by the other arm.",
        caption:
          "Simulation (Isaac Sim): the target is hidden behind leaves; the camera arm finds it and the other arm reaches it.",
      },
    ],
    subprojects: [
      {
        title: "Dual-arm safety filter (OSCBF)",
        description:
          "A safety layer between every policy and the motors: it changes a command only as much as needed to respect joint limits and avoid collisions.",
        bullets: [
          "12-DOF control-barrier-function filter for two AgileX Piper arms, running at 100 Hz.",
          "Joint-limit, table, self-collision and inter-arm collision constraints.",
          "Run on the real robots, between the learned policy and the motors.",
        ],
        media: {
          type: "video",
          src: "/media/mirmi/safety-filter-off-vs-on.mp4",
          poster: "/media/mirmi/safety-filter-off-vs-on.jpg",
          alt: "Two simulated Piper arms side by side moving toward a red box; with the filter on, the arm stops before the box.",
          caption:
            "Simulation (Genesis): safety filter off (left) and on (right) with a box obstacle.",
        },
        credit:
          "Built on the open-source OSCBF and CBFpy libraries by Daniel Morton and Marco Pavone (Stanford ASL, MIT licence). My part: the Piper and dual-arm models, the constraints and the deployment.",
      },
    ],
    credits: [
      "Safety filter built on OSCBF / CBFpy (D. Morton, M. Pavone, Stanford ASL).",
    ],
  },
  {
    id: 2,
    title: "Vision-Guided Shoe Inspection with a UR3e",
    category: "Group project · REMAIN (Interreg Sudoe)",
    period: "2025 - 2026",
    team: "Group project",
    description:
      "A UR3e robot arm inspects shoes for defects: collision-aware motion planning to several camera viewpoints in simulation, then deployment on the physical robot.",
    subDescription: [
      "Developed a UR3e inspection simulation with ROS 2, Gazebo, URDF/XACRO and MoveIt 2.",
      "Collision-aware motion planning for multiple camera viewpoints.",
      "Contributed to sim-to-real deployment on a physical UR3e.",
      "Integrated RealSense depth-based localization and hand-eye calibration.",
      "ROS 2 pipeline with a U-Net for defect segmentation and a CNN for hole/scratch classification.",
    ],
    tags: [
      "ROS 2",
      "Gazebo",
      "MoveIt 2",
      "URDF/XACRO",
      "RealSense",
      "Hand-eye calibration",
      "U-Net",
      "CNN",
    ],
    accent: "from-royal/40 to-lavender/10",
  },
  {
    id: 3,
    title: "Reinforcement Learning for Obstacle Avoidance",
    category: "Course project · SIGMA Clermont",
    period: "2025",
    team: "With Mohamed Ali Jomaa Ghouil",
    description:
      "Teaching a TurtleBot3 to avoid obstacles from its LiDAR readings, comparing three families of reinforcement-learning algorithms in ROS 2 and Gazebo.",
    subDescription: [
      "Implemented and compared DQN, Policy Gradient and Actor-Critic on a TurtleBot3 in ROS 2 / Gazebo.",
      "The robot observes 24 LiDAR readings and chooses between five motion commands.",
      "Best results with Double DQN and a safety-override mechanism.",
    ],
    tags: [
      "DQN",
      "Double DQN",
      "Policy Gradient",
      "Actor-Critic",
      "ROS 2",
      "Gazebo",
      "Python",
    ],
    accent: "from-lavender/40 to-aqua/10",
  },
  {
    id: 4,
    title: "Boundary Detection and Safety Control for a Mobile Robot",
    category: "PFR project · ROS 2 simulation",
    period: "December 2025",
    team: "With Mohamed Ali Jomaa Ghouil",
    description:
      "A mobile robot patrols a bounded area and must stop before holes and cliff-like edges, using LiDAR and odometry for safety supervision and SLAM for mapping.",
    subDescription: [
      "ROS 2 safety supervision from LiDAR and odometry: the robot freezes when it detects a hole, resumes after a cooldown and stops for good after repeated detections.",
      "SLAM occupancy grid and CSV-based boundary refinement.",
      "Circular patrol strategy, adapted after analysing the first results.",
      "Analysis of Nav2 limitations for this task.",
    ],
    tags: ["ROS 2", "Gazebo", "LiDAR", "SLAM", "Nav2", "Python"],
    accent: "from-aqua/40 to-lavender/10",
    media: {
      type: "image",
      src: "/media/pfr/boundary-map.png",
      alt: "Two plots: a noisy boundary recorded by manual mapping, and the cleaned polygon after post-processing.",
      caption:
        "Simulation: boundary recorded by manual mapping (left) and after post-processing (right).",
    },
  },
];

/** Secondary collection. Descriptions are short until details are added. */
export const OTHER_PROJECTS: OtherProject[] = [
  {
    title: "MiR100 Autonomous Navigation",
    context: "Academic project",
    description:
      "Autonomous navigation of a MiR100 mobile robot in Webots, using LiDAR and computer vision.",
    tags: ["Webots", "Python", "LiDAR", "Computer vision"],
  },
  {
    title: "UR10 Robotic 3D Printing",
    context: "Academic project",
    status: "Ongoing",
    description:
      "Integrating a 3D printing head with an industrial UR10 robot arm.",
    tags: ["UR10", "Industrial robotics", "3D printing"],
  },
  {
    title: "Computer Vision Mini-Projects",
    context: "Course mini-projects",
    description:
      "A live sketch effect on a webcam stream, and counting circles and ellipses in images.",
    tags: ["OpenCV", "Python", "Jupyter"],
  },
];

export const TILT_SPRING: Transition = { stiffness: 200, damping: 18 };

export const TILT_RANGE: { x: [number, number]; y: [number, number] } = {
  x: [10, -10],
  y: [-14, 14],
};

export const TRACK_SPRING: Transition = { stiffness: 60, damping: 20 };

export const PREVIEW_WINDOW = 1;
