import { Award, BadgeCheck, Trophy } from "lucide-react";

export const navItems = [
  ["About", "about"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Wins", "wins"],
  ["Contact", "contact"],
];

export const skills = {
  Languages: ["C++", "JavaScript", "Python", "SQL"],
  Frontend: ["React.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js"],
  Databases: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Firebase", "Docker", "Cloudinary"],
};

export const projects = [
  {
    number: "01",
    title: "SmartVault",
    subtitle: "Full-stack productivity & security platform",
    description:
      "A full-stack platform combining secure password management, note-taking and cloud file storage, with Firebase authentication and Gemini-powered productivity features.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Gemini API"],
    live: "https://smartvault-omega.vercel.app/",
    github: "https://github.com/zaidxGithub/SmartVault",
    screenshots: ["/project/smartvault-dashboard.png", "/project/smartvault-login.png"],
  },
  {
    number: "02",
    title: "EasyPage",
    subtitle: "University assignment & lab report generator",
    description:
      "A responsive React application that automates university-standard assignment and laboratory report cover pages with one-click PDF generation.",
    stack: ["React.js", "JavaScript", "Tailwind CSS", "html2canvas", "jsPDF"],
    live: "https://easy-page-blue.vercel.app/",
    github: "https://github.com/zaidxGithub/EasyPage",
    screenshots: ["/project/easypage.png"],
  },
];

export const wins = [

  // {
  //   icon: Award,
  //   label: "1st Position",
  //   title: "Quiz Competition",
  //   meta: "Integral University · March 2024",
  //   text: "Secured first position in a university quiz competition.",
  // },
  {
    icon: BadgeCheck,
    label: "Contributor",
    title: "GSSoC 2025",
    meta: "Open Source Contributor · Aug–Oct 2025",
    text: "Contributed to 10+ real-world repositories with 12 merged pull requests.",
    image: "/public/certificates/gssoc_certificate.png",
    link: "https://drive.google.com/file/d/1gJ3u_qPKG16TRVsyrRG-yyOx_5ogQEHu/view?usp=sharing ",
  },
    {
    icon: Trophy,
    label: "Top 20",
    title: "BuildX Hackathon",
    meta: "Team Lead · 4-member team",
    text: "Led a four-member team to a Top 20 position in the BuildX India Hackathon.",
    image: "/certificates/buildx-top20.png",
     link: "https://drive.google.com/file/d/1VveSqFgIJcjHVAf3pyLNitc9urhuVHc-/view?usp=sharing",
  },
];

export const certifications = [
  // {
  //   issuer: "GirlScript Foundation",
  //   title: "GSSoC 2025 — Tech Contributor",
  //   result: "Contributor program · Appreciation badge",
  //   image: "/certificates/gssoc-badge.jpg",
  //   alt: "GirlScript Summer of Code 2025 Tech Contributors badge",
  // },
  {
    issuer: "NPTEL · IIT Madras",
    title: "The Joy of Computing Using Python",
    result: "NPTEL certification · 88%",
    image: "/certificates/nptel-python.png",
    alt: "NPTEL The Joy of Computing Using Python certificate",
  },
  // {
  //   issuer: "BuildX India",
  //   title: "Top 20 Hackathon Team",
  //   result: "Top 20 · Team Lead · 4-member team",
  //   image: "/certificates/buildx-top20.png",
  //   alt: "BuildX India Top 20 Hackathon certificate",
  // },
  {
    issuer: "Udemy",
    title: "The Complete Full-Stack Web Development Bootcamp",
    result: "Full-stack web development",
    image: "/certificates/udemy-fullstack.png",
    alt: "Udemy Complete Full-Stack Web Development Bootcamp certificate",
  },
];

export const contributions = [
  {
    title: "GirlScript Summer of Code",
    role: "Open Source Contributor · Aug–Oct 2025",
    metric: "10+ repos · 12 merged PRs",
    description:
      "Contributed frontend enhancements and backend improvements while collaborating through issues, reviews and GitHub workflows.",
  },
  {
    title: "Open-source engineering",
    role: "Collaborative development",
    metric: "10+ repositories · 12 merged PRs",
    description:
      "Worked across diverse technology stacks and strengthened debugging, clean-code and collaborative development practices.",
  },
];

export const helpCards = [
  ["01", "Full-stack web apps", "React interfaces, Node/Express APIs, MongoDB data flows and responsive product experiences."],
  ["02", "Frontend engineering", "Reusable React components, responsive layouts, form validation and polished UI systems."],
  ["03", "Problem solving", "C++ and DSA practice with 150+ problems solved across core algorithmic patterns."],
  ["04", "Developer collaboration", "Git/GitHub workflows, pull requests, code reviews and open-source contribution."],
];

export const processCards = [
  ["01", "Research", "Understand the problem, users, requirements and technical constraints before writing code."],
  ["02", "Design", "Shape clean architecture, intuitive interfaces and reusable components around the real user flow."],
  ["03", "Develop", "Build responsive React interfaces, reliable APIs, database flows and integrations with clean code."],
  ["04", "Deploy", "Test, refine and ship the application with production-minded deployment and maintainability."],
];

export const platformProfiles = [
  ["LeetCode", "ZaidxLeet20", "https://leetcode.com/u/ZaidxLeet20/"],
  ["CodeChef", "zaidxchef20", "#"],
  ["HackerRank", "ZaidxRank20", "#"],
];

export const quickAnswers = [
  ["What are you looking for?", "Both internships and full-time opportunities."],
  ["What is your main stack?", "MERN: React, Node.js, Express.js and MongoDB."],
  ["Do you contribute to open source?", "Yes. GSSoC 2025: 10+ repositories and 12 merged PRs."],
  ["What do you use for DSA?", "Primarily C++, with 150+ problems solved on LeetCode."],
  ["Where are you based?", "Lucknow, India."],
  ["When do you graduate?", "2027, B.Tech CSE at Integral University."],
];

export const marqueeItems = ["React", "Node.js", "Express", "MongoDB", "JavaScript", "C++", "Python", "SQL", "Git", "Docker"];
