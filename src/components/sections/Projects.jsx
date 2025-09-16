import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Code2 } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Projects = ({ projects }) => {
  return (
    <motion.section
      className="mb-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        🚀 Featured Projects
      </h2>

      {/* ✅ GRID WITH STRETCHING ROW HEIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((project, index) => {
          const handleClick = () => {
            if (project.link) {
              window.open(project.link, "_blank", "noopener,noreferrer");
            }
          };

          return (
            <motion.div
              key={index}
              className={`project-card glass-effect cracked-glass p-6 flex flex-col h-full transition cursor-pointer ${
                project.link ? "hover:shadow-lg" : "cursor-default"
              }`}
              variants={cardVariants}
              custom={index}
              whileHover={
                project.link
                  ? {
                      y: -10,
                      scale: 1.03,
                      boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.3)",
                    }
                  : {}
              }
              onClick={handleClick}
            >
              <div className="drip-effect h-full flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Code2 className="h-4 w-4" />
                    <span className="italic">{project.techStack}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
