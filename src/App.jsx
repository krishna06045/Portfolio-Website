import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import ThemeToggle from "@/components/layout/ThemeToggle";
import AIBot from "@/components/layout/AIBot";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/layout/BackgroundEffects";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Roles from "@/components/sections/Roles";
import {
  projectsData,
  educationData,
  skillsData,
  rolesData,
} from "@/data/portfolioData";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = theme;
    document.body.className = theme;
  }, [theme]);

  const handleBotQuery = (query) => {
    const now = new Date();
    const date = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    let response = "";

    if (query.toLowerCase().includes("time")) {
      response = `🕐 Current time: ${time}`;
    } else if (query.toLowerCase().includes("date")) {
      response = `📅 Today's date: ${date}`;
    } else {
      response = `🤖 Hi! I can tell you the current date, time. Just ask!`;
    }

    toast({
      title: "AI Assistant",
      description: <div className="whitespace-pre-wrap">{response}</div>,
      duration: 5000,
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500`}>
      <Helmet>
        <title>Krishna Agrawal | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Krishna Agrawal, Student from VIT Vellore. Showcasing innovative projects and skills in technology."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Helmet>

      <div className={`main-bg ${theme}`} />
      <BackgroundEffects theme={theme} />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <AIBot handleBotQuery={handleBotQuery} />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
        className="container mx-auto px-4 py-8 relative z-10"
      >
        <Hero />
        <Projects projects={projectsData} />
        <Education educationItems={educationData} />
        <Skills skills={skillsData} />
        <Roles roles={rolesData} />
      </motion.main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
