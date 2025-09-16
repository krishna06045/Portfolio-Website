import React from "react";
import { motion } from "framer-motion";
import { Code, BrainCircuit, Users, Server } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const skillTagVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

// Updated icons mapping
const icons = {
  "Languages & Tools": <Code className="h-8 w-8 text-purple-400" />,
  "CRM & ERP Platforms": <Server className="h-8 w-8 text-indigo-400" />,
  Domains: <BrainCircuit className="h-8 w-8 text-blue-400" />,
  "Soft Skills": <Users className="h-8 w-8 text-green-400" />,
};

const Skills = ({ skills }) => {
  return (
    <motion.section
      className="mb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h2 className="text-4xl font-bold text-center mb-12">🛠️ Skills</h2>

      <div className="glass-effect cracked-glass rounded-2xl p-8 max-w-4xl mx-auto">
        <div className="relative border-l-2 border-purple-500/30 ml-4">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-10"
              variants={itemVariants}
              custom={index}
            >
              {/* Left-side Icon */}
              <span className="absolute flex items-center justify-center w-10 h-10 glass-effect rounded-full -left-5 border-2 border-purple-500/50">
                {icons[skillCategory.title] || (
                  <Code className="h-8 w-8 text-purple-400" />
                )}
              </span>

              {/* Card */}
              <div className="p-4 rounded-lg glass-effect border border-white/10">
                <h3 className="text-xl font-bold mb-4">
                  {skillCategory.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm font-medium text-white/90 bg-white/10 border border-white/20"
                      variants={skillTagVariants}
                      custom={idx}
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
