import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Clock, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIBot = ({ handleBotQuery }) => {
  const [showBot, setShowBot] = useState(false);

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setShowBot(!showBot)}
          className="pulse-glow rounded-full w-16 h-16 bg-purple-600 hover:bg-purple-700 shadow-lg"
        >
          {showBot ? <X className="h-7 w-7" /> : <Bot className="h-7 w-7" />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {showBot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-28 right-6 w-80 bot-chat rounded-2xl p-4 z-50 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">AI Assistant</h3>
            </div>
            <div className="space-y-3 mb-4">
              <Button
                variant="outline"
                className="w-full justify-start text-left bg-transparent text-white hover:bg-white/10"
                onClick={() => handleBotQuery("time")}
              >
                <Clock className="h-4 w-4 mr-2" />
                What's the current time?
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left bg-transparent text-white hover:bg-white/10"
                onClick={() => handleBotQuery("date")}
              >
                <Calendar className="h-4 w-4 mr-2" />
                What's today's date?
              </Button>
            </div>
            <div className="text-sm text-gray-400">
              💡 Click any button above to get information!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIBot;
