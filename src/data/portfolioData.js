import React from "react";
// export const certificationTitle = "Oracle Certified Generative AI Professional";

export const projectsData = [
  {
    title: "💬 MERN Chat App",
    description:
      "Real-time chat application built with the MERN stack, featuring authentication and instant messaging.",
    features: [
      "Real-time messaging using Socket.IO",
      "JWT-based authentication",
      "Responsive UI with React",
    ],
    techStack: "MongoDB, Express.js, React, Node.js, Socket.IO",
    link: "https://chatapp-using-mern-1.onrender.com/login",
  },
  {
    title: "🚖 AWS Serverless Ride-Hailing App",
    description:
      "Scalable ride-hailing app with a completely serverless backend architecture on AWS.",
    features: [
      "AWS Lambda for backend logic",
      "DynamoDB for data persistence",
      "API Gateway for REST endpoints",
    ],
    techStack: "AWS Lambda, DynamoDB, API Gateway, S3, Cognito",
    link: "https://github.com/krishna06045/AWS-Ride-Hailing",
  },
  {
    title: "🗺️ MapShare Travel App",
    description:
      "Interactive platform where users can share travel locations and discover places from others.",
    features: [
      "Map-based UI with markers",
      "Image upload for locations",
      "User profiles and favorites",
    ],
    techStack: "React, Node.js, Express, MongoDB, Leaflet.js",
  },
  {
    title: "🔐 Encrypted Federated Search System",
    description:
      "Secure federated search system for law enforcement and intelligence agencies, enabling encrypted searches across multiple city databases without revealing sensitive data or queries.",
    features: [
      "Homomorphic encryption for privacy-preserving search",
      "Federated data across Mumbai, Delhi, and Chennai",
      "Role-based access control (Admin, Officer, Analyst)",
      "Blockchain logging for tamper-proof search records",
      "Streamlit-based interactive UI",
    ],
    techStack:
      "Python, Streamlit, MongoDB, Blockchain, PyCryptodome, Homomorphic Encryption Libraries",
    link: "https://github.com/krishna06045/Encrypted-Federated-Search-for-Law-Enforcement-Intelligence-Agencies-Using-Homomorphic-Encryption",
  },
];

export const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Vellore Institute of Technology, Vellore (Final Year)",
    borderColor: "border-purple-500",
  },
  {
    degree: "Class 12",
    institution: "Padmavati Academy, Bareilly – 91.6%",
    borderColor: "border-blue-500",
  },
  {
    degree: "Class 10",
    institution: "BBL Public School, Bareilly – 92.2%",
    borderColor: "border-green-500",
  },
];

export const skillsData = [
  {
    title: "Languages & Tools",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    skills: [
      "C",
      "C++",
      "JavaScript",
      "Java",
      "Python",
      "SQL",
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "Oracle",
      "AWS (Lambda, Amplify, API Gateway, Cognito, IAM)",
      "Visual Studio Code",
      "Excel",
      "Power BI",
    ],
  },
  {
    title: "CRM & ERP Platforms",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    skills: ["Salesforce", "Odoo"],
  },
  {
    title: "Domains",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/20",
    skills: ["Full-Stack Development", "Software Engineering", "Data Analysis"],
  },
  {
    title: "Soft Skills",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    skills: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Adaptability",
      "Leadership",
    ],
  },
];

export const rolesData = [
  {
    role: "🖥️ R&D Intern",
    org: "Samsung R&D Institute (Prism Program)",
    period: "July 2025 – Jan 2026",
    description:
      "Collaborated with a team to prototype an AI-driven ChatOps assistant for SRE teams, integrating Slack with machine learning models to automate incident triage, log analysis, and knowledge aggregation. Worked on intent classification, summarization, and API integration with SRE tools to reduce cognitive load, speed up incident resolution, and improve operational efficiency.",
  },
  {
    role: "☁️ Software Developer Intern",
    org: "Quadrafort Technologies",
    period: "June 2024 – July 2024",
    description:
      "Developed a recruitment application in Salesforce CRM by designing custom objects, automating workflows, and building a streamlined hiring process. Built a simple e-commerce website in Odoo, integrated it with Odoo ERP for seamless inventory and order management, and optimized end-to-end business workflows.",
  },
  {
    role: "🚀 Senior Core Member",
    org: "Entrepreneurship Cell VIT",
    period: "2023 – Present",
    description:
      "I contributed to the ideation and execution of Futurepreneurs 8.0, a flagship business simulation competition that saw participation from 50+ teams. I also collaborated with the team to orchestrate Innoventure, an E-Summit event, where we designed engaging challenges that led to a 95% participant satisfaction rate based on post-event surveys.",
  },
  {
    role: "💻 Junior Core Member",
    org: "IEEE Computer Society VIT",
    period: "2023 – 2024",
    description:
      "I actively contributed to organizing HackBattle, a 36-hour flagship hackathon that drew participation from over 500 students. I served as an evaluator during the team review rounds, providing constructive feedback and assessments across three phases. Additionally, I collaborated with the team to invite Chirag Goel, a renowned YouTube influencer (16.2k+ subscribers), as an eminent speaker and panel judge, enriching the event experience for participants.",
  },
];
