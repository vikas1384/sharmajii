import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FruitsScreenProps {
  onNext: () => void;
}

const fruits = [
  "I don't know what the future looks like\nor where life takes us.",
  "I know this may not be the best thing to say,\nbut there have been some strong feelings\nover the past few months.",
  "I'm aware of that.\nAnd that's okay.",
];

const FruitsScreen = ({ onNext }: FruitsScreenProps) => {
  const [currentFruit, setCurrentFruit] = useState(-1);

  const handleFruitTap = (index: number) => {
    if (index === currentFruit + 1) {
      setCurrentFruit(index);
    }
  };

  const allRevealed = currentFruit === fruits.length - 1;

  return (
    <motion.div
      className="screen bg-night-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Title */}
      <motion.p
        className="font-serif text-xl text-fruit mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          textShadow: "0 0 20px hsl(15 65% 50% / 0.5)",
        }}
      >
        🍎 The Honest Part
      </motion.p>

      {/* Fruits */}
      <div className="flex gap-6 mb-10">
        {fruits.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleFruitTap(index)}
            className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all ${
              index <= currentFruit
                ? "bg-fruit/20 border-2 border-fruit"
                : index === currentFruit + 1
                ? "bg-secondary/50 border-2 border-fruit/50 pulse-gentle"
                : "bg-secondary/30 border border-border opacity-50"
            }`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * index, type: "spring" }}
            whileTap={{ scale: 0.9 }}
            disabled={index !== currentFruit + 1}
            style={{
              boxShadow:
                index <= currentFruit
                  ? "0 0 20px hsl(15 65% 50% / 0.4)"
                  : undefined,
            }}
          >
            <motion.span
              className="text-3xl"
              animate={
                index <= currentFruit
                  ? { scale: [1, 1.2, 1] }
                  : { scale: 1 }
              }
              transition={{ duration: 0.4 }}
            >
              🍎
            </motion.span>
          </motion.button>
        ))}
      </div>

      {/* Message */}
      <div className="min-h-[150px] flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          {currentFruit >= 0 && (
            <motion.p
              key={currentFruit}
              className="font-serif text-lg md:text-xl text-foreground/90 text-center leading-relaxed whitespace-pre-line"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {fruits[currentFruit]}
            </motion.p>
          )}
        </AnimatePresence>

        {currentFruit === -1 && (
          <motion.p
            className="text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Tap the first fruit to begin
          </motion.p>
        )}
      </div>

      {/* Next button */}
      {allRevealed && (
        <motion.button
          onClick={onNext}
          className="flex items-center gap-3 px-8 py-4 mt-4 bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium pulse-gentle hover:bg-secondary/70 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">🫂</span>
          <span>The promise</span>
        </motion.button>
      )}
    </motion.div>
  );
};

export default FruitsScreen;
