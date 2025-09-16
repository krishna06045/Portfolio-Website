import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, Star } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const icons = {
  "B.Tech in Information Technology": (
    <GraduationCap className="h-8 w-8 text-purple-400" />
  ),
  "Class 12": <School className="h-8 w-8 text-blue-400" />,
  "Class 10": <Star className="h-8 w-8 text-green-400" />,
};

const Education = ({ educationItems }) => {
  return (
    <motion.section className="mb-24" variants={sectionVariants}>
      <h2 className="text-4xl font-bold text-center mb-12">🎓 Education</h2>
      <div className="glass-effect cracked-glass rounded-2xl p-8 max-w-4xl mx-auto">
        <div className="relative border-l-2 border-purple-500/30 ml-4">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-10"
              variants={itemVariants}
              custom={index}
            >
              <span className="absolute flex items-center justify-center w-10 h-10 glass-effect rounded-full -left-5 border-2 border-purple-500/50">
                {icons[item.degree] || (
                  <GraduationCap className="h-8 w-8 text-purple-400" />
                )}
              </span>
              <div className="p-4 rounded-lg glass-effect border border-white/10">
                <h3 className="text-xl font-bold">{item.degree}</h3>
                <p className="text-purple-400">{item.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
