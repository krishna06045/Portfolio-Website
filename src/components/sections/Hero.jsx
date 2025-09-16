import React from "react";
import { motion } from "framer-motion";
import { Award, Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";
import ResumeButton from "../ui/ResumeButton"; // ✅ Import your component

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <motion.section
      className="text-center mb-24 relative"
      variants={sectionVariants}
    >
      <div className="ai-background cracked-glass drip-effect rounded-3xl p-8 md:p-12 mb-8 shadow-2xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        >
          <div className="mb-6 mt-4">
            <Award className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight">
              Krishna Agrawal
            </h1>
          </div>
        </motion.div>
      </div>

      <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto -mt-20 relative z-10 shadow-lg">
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-4">
            <InfoItem icon={MapPin} text="Bareilly, Uttar Pradesh, India" />
            <InfoItem
              icon={GraduationCap}
              text="Vellore Institute of Technology (VIT), Vellore"
            />
          </div>
          <div className="space-y-4">
            <InfoItem icon={Mail} text="krishnaag0604@gmail.com" />
            <InfoItem
              icon={Linkedin}
              text="LinkedIn Profile"
              href="https://www.linkedin.com/in/krishna-agrawal-0604/"
            />
          </div>
        </div>

        {/* ✅ Resume Button Section */}
        <div className="mt-6 text-center">
          <ResumeButton /> {/* Using your reusable component */}
        </div>
      </div>
    </motion.section>
  );
};

const InfoItem = ({ icon: Icon, text, href }) => (
  <div className="flex items-center gap-3">
    <Icon className="h-5 w-5 text-purple-400 flex-shrink-0" />
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-purple-300 transition-colors duration-300"
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

export default Hero;
