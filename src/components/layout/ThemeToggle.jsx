import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <motion.div 
      className="fixed top-6 right-6 z-50 flex gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Button
        variant={theme === 'light' ? 'default' : 'outline'}
        size="icon"
        onClick={() => setTheme('light')}
        className="glass-effect"
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === 'dark' ? 'default' : 'outline'}
        size="icon"
        onClick={() => setTheme('dark')}
        className="glass-effect"
      >
        <Moon className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === 'windows' ? 'default' : 'outline'}
        size="icon"
        onClick={() => setTheme('windows')}
        className="glass-effect"
      >
        <Monitor className="h-4 w-4" />
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;