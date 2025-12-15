import { motion } from "framer-motion";
import { useState } from "react";

interface FlowersScreenProps {
  onNext: () => void;
}

const flowers = [
  "Becoming a doctor",
  "Handling pressure quietly",
  "Growing without losing kindness",
];

const FlowersScreen = ({ onNext }: FlowersScreenProps) => {
  const [bloomedFlowers, setBloomedFlowers] = useState<Set<number>>(new Set());

  const handleFlowerTap = (index: number) => {
    setBloomedFlowers((prev) => new Set([...prev, index]));
  };

  const allBloomed = bloomedFlowers.size === flowers.length;

  return (
    <motion.div
      className="screen bg-night-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Title */}
      <motion.p
        className="font-serif text-xl text-flower mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          textShadow: "0 0 20px hsl(330 60% 70% / 0.5)",
        }}
      >
        🌸 Proud moment for me
      </motion.p>
      <motion.p
        className="text-muted-foreground text-sm mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Tap to bloom
      </motion.p>

      {/* Flowers */}
      <div className="flex flex-col gap-4 w-full max-w-xs mb-8">
        {flowers.map((flower, index) => (
          <motion.button
            key={index}
            onClick={() => handleFlowerTap(index)}
            className={`relative p-5 rounded-2xl border text-left transition-all overflow-hidden ${
              bloomedFlowers.has(index)
                ? "bg-flower/10 border-flower/50 glow-flower"
                : "bg-secondary/30 border-border hover:border-flower/30"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * index }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <motion.span
                className="text-3xl"
                animate={
                  bloomedFlowers.has(index)
                    ? { scale: [1, 1.3, 1], rotate: [0, 10, 0] }
                    : { scale: 1 }
                }
                transition={{ duration: 0.5 }}
              >
                🌸
              </motion.span>
              <span
                className={`font-serif text-lg transition-colors ${
                  bloomedFlowers.has(index) ? "text-flower" : "text-foreground/70"
                }`}
              >
                {flower}
              </span>
            </div>

            {/* Bloom particles */}
            {bloomedFlowers.has(index) && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-lg"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: "50%",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0.5],
                      opacity: [0, 1, 0],
                      y: [0, -30 - Math.random() * 20],
                      x: [0, (Math.random() - 0.5) * 30],
                    }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  >
                    🌸
                  </motion.span>
                ))}
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Message after all bloomed */}
      {allBloomed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="font-serif text-xl text-foreground/90 mb-6 leading-relaxed">
            Watching you grow and happy
            <br />
            has been best thing for me.
          </p>
          <motion.button
            onClick={onNext}
            className="flex items-center gap-3 px-8 py-4 bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium pulse-gentle hover:bg-secondary/70 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">🍎</span>
            <span>See the fruits</span>
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FlowersScreen;
