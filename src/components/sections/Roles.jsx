import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, X } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const Roles = ({ roles }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <>
      <motion.section
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          🌐 Work Experience
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {roles.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass-effect cracked-glass rounded-2xl p-6 drip-effect overflow-hidden cursor-pointer"
              variants={cardVariants}
              custom={idx}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(139, 92, 246, 0.2)",
              }}
              onClick={() => setSelectedRole(item)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Briefcase className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-purple-300">
                    {item.role}
                  </h3>
                  <p className="text-gray-300 font-semibold">{item.org}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedRole && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRole(null)} // close on background click
          >
            <motion.div
              className="glass-effect p-6 rounded-2xl max-w-lg mx-4 relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedRole(null)}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <h3 className="text-2xl font-bold text-purple-300 mb-2">
                {selectedRole.role}
              </h3>
              <p className="text-gray-300 font-semibold">{selectedRole.org}</p>
              <p className="text-sm text-gray-400 mb-4">
                {selectedRole.period}
              </p>

              {/* Extra Description */}
              <p className="text-gray-200 leading-relaxed">
                {selectedRole.description || "No description provided yet."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Roles;
