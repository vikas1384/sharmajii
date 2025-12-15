import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface TrunkScreenProps {
  onNext: () => void;
}

const texts = [
  "Time passed.",
  "We changed.",
  "But the bond stayed steady.",
  "Quiet.\nStrong.\nReliable.",
];

const TrunkScreen = ({ onNext }: TrunkScreenProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [trunkHeight, setTrunkHeight] = useState(20);

  const handleTap = () => {
    if (textIndex < texts.length - 1) {
      setTextIndex(textIndex + 1);
      setTrunkHeight((prev) => Math.min(prev + 25, 100));
    }
  };

  const showButton = textIndex === texts.length - 1;

  return (
    <motion.div
      className="screen bg-night-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={!showButton ? handleTap : undefined}
    >
      {/* Trunk visualization */}
      <div className="relative w-full flex justify-center mb-8">
        <div className="relative h-64 w-20 flex items-end justify-center">
          {/* Trunk */}
          <motion.div
            className="w-12 bg-gradient-to-t from-bark via-trunk to-root rounded-t-lg"
            style={{
              boxShadow:
                "inset -4px 0 8px rgba(0,0,0,0.3), inset 4px 0 8px rgba(255,255,255,0.05)",
            }}
            initial={{ height: "20%" }}
            animate={{ height: `${trunkHeight}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          {/* Texture lines */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-full overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-background/20"
                style={{ bottom: `${10 + i * 12}%` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: trunkHeight > 10 + i * 12 ? 0.3 : 0 }}
                transition={{ delay: 0.2 * i }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="text-center min-h-[100px] flex items-center justify-center px-6">
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
            tap to continue
          </motion.p>
        ) : (
          <motion.button
            onClick={onNext}
            className="flex items-center gap-3 px-8 py-4 mt-8 bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium pulse-gentle hover:bg-secondary/70 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">🌿</span>
            <span>Watch it branch out</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-soil to-transparent" />
    </motion.div>
  );
};

export default TrunkScreen;
