import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface RootsScreenProps {
  onNext: () => void;
}

const texts = [
  "This didn't start in one day.",
  "It grew through school chaos,\nsilly talks,\nshared laughter.",
  "Things we never planned —\nbut never forgot.",
];

const RootsScreen = ({ onNext }: RootsScreenProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [rootsGrown, setRootsGrown] = useState(1);

  const handleTap = () => {
    if (textIndex < texts.length - 1) {
      setTextIndex(textIndex + 1);
      setRootsGrown((prev) => Math.min(prev + 1, 4));
    }
  };

  const showButton = textIndex === texts.length - 1;

  return (
    <motion.div
      className="screen bg-soil-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={!showButton ? handleTap : undefined}
    >
      {/* Subtitle */}
      <motion.p
        className="absolute top-8 text-muted-foreground text-xs text-center italic px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Yes, Sharma ji… this is where it all began 😄
      </motion.p>

      {/* Roots visualization */}
      <div className="relative w-full h-48 mb-8">
        <svg
          viewBox="0 0 200 100"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 0 10px hsl(25 35% 25% / 0.5))" }}
        >
          {/* Main root */}
          <motion.path
            d="M100 0 L100 30 Q100 50 80 70 L60 90"
            fill="none"
            stroke="hsl(25, 35%, 25%)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: rootsGrown >= 1 ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* Branch right */}
          <motion.path
            d="M100 30 Q120 45 140 60 L160 75"
            fill="none"
            stroke="hsl(25, 35%, 25%)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: rootsGrown >= 2 ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
          {/* Branch left small */}
          <motion.path
            d="M80 50 Q60 60 40 80"
            fill="none"
            stroke="hsl(25, 35%, 25%)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: rootsGrown >= 3 ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          />
          {/* Tiny roots */}
          <motion.path
            d="M140 60 Q150 70 145 85"
            fill="none"
            stroke="hsl(25, 35%, 25%)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: rootsGrown >= 3 ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          />
        </svg>
      </div>

      {/* Text */}
      <div className="text-center min-h-[120px] flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={textIndex}
            className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {texts[textIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Tap hint or button */}
      <AnimatePresence>
        {!showButton ? (
          <motion.p
            className="text-muted-foreground text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            tap anywhere
          </motion.p>
        ) : (
          <motion.button
            onClick={onNext}
            className="flex items-center gap-3 px-8 py-4 mt-8 bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium pulse-gentle hover:bg-secondary/70 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">⬆️</span>
            <span>Let it grow</span>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RootsScreen;
