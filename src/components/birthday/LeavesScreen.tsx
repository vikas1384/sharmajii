import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface LeavesScreenProps {
  onNext: () => void;
}

const leaves = [
  "random reactions 😄",
  "late replies but real care",
  "comfort without words",
  "being there without showing off",
];

const LeavesScreen = ({ onNext }: LeavesScreenProps) => {
  const [revealedLeaves, setRevealedLeaves] = useState<Set<number>>(new Set());

  const handleLeafTap = (index: number) => {
    setRevealedLeaves((prev) => new Set([...prev, index]));
  };

  const allRevealed = revealedLeaves.size === leaves.length;

  return (
    <motion.div
      className="screen bg-night-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Floating leaf particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            🍃
          </motion.div>
        ))}
      </div>

      {/* Title */}
      <motion.p
        className="font-serif text-xl text-muted-foreground mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Tap the leaves to reveal
      </motion.p>

      {/* Leaves grid */}
      <div className="flex flex-wrap justify-center gap-4 max-w-sm mb-8">
        {leaves.map((leaf, index) => (
          <motion.button
            key={index}
            onClick={() => handleLeafTap(index)}
            className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all ${
              revealedLeaves.has(index)
                ? "bg-leaf/20 border-2 border-leaf glow-leaf"
                : "bg-secondary/50 border border-border hover:border-leaf/50"
            }`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, type: "spring" }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="text-4xl"
              animate={
                revealedLeaves.has(index)
                  ? { rotate: [0, 10, -10, 0] }
                  : { rotate: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              🍃
            </motion.span>
          </motion.button>
        ))}
      </div>

      {/* Revealed messages */}
      <div className="min-h-[100px] flex flex-col items-center justify-center gap-2 px-6">
        <AnimatePresence>
          {[...revealedLeaves].map((index) => (
            <motion.p
              key={index}
              className="text-foreground/80 text-center font-serif text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {leaves[index]}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>

      {/* Message after all revealed */}
      {allRevealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-4"
        >
          <p className="font-serif text-xl text-primary text-glow mb-6">
            Small things.
            <br />
            But they matter.
          </p>
          <motion.button
            onClick={onNext}
            className="flex items-center gap-3 px-8 py-4 bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium pulse-gentle hover:bg-secondary/70 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">🌸</span>
            <span>Watch it bloom</span>
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LeavesScreen;
