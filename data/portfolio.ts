export const heroData = {
  name: "Akshat Gupta",
  role: "Software Development Engineer (SDE)",
  location: "Ghaziabad, India",
  description: "I build robust backend systems, scalable full-stack applications, and data-driven ML pipelines. Currently pursuing a B.Tech at IIT Mandi, focused on translating complex algorithms into production-ready software.",
  links: {
    github: "https://github.com/GuptaAkshat23",
    linkedin: "https://linkedin.com/in/your-linkedin-id",
    email: "mailto:guptaakshat2309@gmail.com",
    leetcode: "https://leetcode.com/your-id", // Add your link here
    resume: "/resume_Akshat.pdf" // Make sure to place your PDF in the public folder
  }
};

export const experience = [
  {
    company: "EFKON India Pvt. Ltd. (STRABAG)",
    role: "Research and Development Intern",
    date: "Dec 2025 - Jan 2026",
    location: "Gurgaon, India",
    points: [
      "Engineered a comprehensive LiDAR data handling pipeline featuring statistical outlier filtering, voxel downsampling, and RANSAC-based ground plane segmentation.",
      "Transformed unstructured 360-degree LiDAR sweeps into structured 2D range images and 3D BEV maps, enabling real-time edge device inference.",
      "Delivered a validated, modular pipeline that accelerated downstream ML development for Intelligent Transportation Systems."
    ],
    tech: ["C++", "Python", "Open3D", "ROS", "Point Cloud Processing"]
  }
];

export const projects = [
  {
    title: "ChronoCapsule",
    description: "Architected a scalable web platform for scheduling secure future deliveries of digital time capsules containing media and text.",
    date: "July 2025",
    tech: ["React.js", "Tailwind CSS", "Firebase", "Cloudinary", "Vercel"],
    link: "https://chrono-capsule.vercel.app/",
    github: "https://github.com/GuptaAkshat23/ChronoCapsule",
  },
  {
    title: "Movie Recommender System",
    description: "Engineered a content-based recommendation engine leveraging vectorization and cosine similarity on TMDB API datasets.",
    date: "July 2024",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    github: "https://github.com/GuptaAkshat23/Movie-Recommendation-System-Project",
  }
];

export const education = {
  school: "Indian Institute of Technology, Mandi",
  degree: "Bachelor of Technology in Civil Engineering",
  date: "Aug 2023 - Present",
  description: "Bridging rigorous engineering with high-impact software development.",
  coursework: ["Data Structures & Algorithms", "Machine Learning", "Probability & Statistics", "Python for Data Science", "Calculus", "Linear Algebra"]
};

export const skills = {
  languages: ["C++", "Python", "Rust", "JavaScript", "HTML/CSS"],
  frameworks: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PyTorch", "Pandas", "OpenCV", "ROS", "Open3D"],
  tools: ["Git/GitHub", "Vercel", "Firebase", "Jupyter"],
  domains: ["Machine Learning", "LiDAR Perception", "System Design", "Data Analytics"]
};