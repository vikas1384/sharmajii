import { motion } from "framer-motion";
import { useState } from "react";

interface BranchesScreenProps {
  onNext: () => void;
}

const branches = [
  { emoji: "😄", label: "Laughter", effect: "burst" },
  { emoji: "🤦", label: "Drama", effect: "shake" },
  { emoji: "🤐", label: "Secrets", effect: "lock" },
  { emoji: "😂", label: "Jokes", effect: "giggle" },
  { emoji: "🫂", label: "Support", effect: "glow" },
];

const BranchesScreen = ({ onNext }: BranchesScreenProps) => {
  const [tappedBranches, setTappedBranches] = useState<Set<number>>(new Set());
  const [activeEffect, setActiveEffect] = useState<string | null>(null);
  const [floatingEmojis, setFloatingEmojis] = useState<{ id: number; emoji: string; x: number }[]>([]);

  const handleBranchTap = (index: number, effect: string, emoji: string) => {
    if (tappedBranches.has(index)) return;

    setTappedBranches((prev) => new Set([...prev, index]));
    setActiveEffect(effect);

    // Add floating emojis for burst effect
    if (effect === "burst" || effect === "giggle") {
      const newEmojis = [...Array(5)].map((_, i) => ({
        id: Date.now() + i,
        emoji: emoji,
        x: Math.random() * 100,
      }));
      setFloatingEmojis((prev) => [...prev, ...newEmojis]);
      setTimeout(() => {
        setFloatingEmojis((prev) => prev.filter((e) => !newEmojis.find((n) => n.id === e.id)));
      }, 1500);
    }

    setTimeout(() => setActiveEffect(null), 800);
  };

  const allTapped = tappedBranches.size === branches.length;

  return (
    <motion.div
      className={`screen bg-night-gradient ${activeEffect === "shake" ? "animate-wiggle" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        filter: activeEffect === "glow" ? "brightness(1.2)" : undefined,
      }}
    >
      {/* Floating emojis */}
      {floatingEmojis.map((item) => (
        <motion.span
          key={item.id}
          className="absolute text-3xl pointer-events-none"
          style={{ left: `${item.x}%` }}
          initial={{ bottom: "40%", opacity: 1, scale: 0 }}
          animate={{ bottom: "80%", opacity: 0, scale: 1.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {item.emoji}
        </motion.span>
      ))}

      {/* Lock overlay for secrets */}
      {activeEffect === "lock" && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            className="text-6xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring" }}
          >
            🔓
          </motion.span>
        </motion.div>
      )}

      {/* Title */}
      <motion.p
        className="font-serif text-xl text-primary mb-8 text-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🌿 Tap a branch
      </motion.p>

      {/* Branches */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-xs mb-8">
        {branches.map((branch, index) => (
          <motion.button
            key={branch.label}
            onClick={() => handleBranchTap(index, branch.effect, branch.emoji)}
            className={`relative p-4 rounded-2xl border transition-all ${
              tappedBranches.has(index)
                ? "bg-accent/30 border-accent/50"
                : "bg-secondary/30 border-border hover:border-primary/50"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            whileTap={{ scale: 0.95 }}
            disabled={tappedBranches.has(index)}
          >
            <span className="text-3xl block mb-2">{branch.emoji}</span>
            <span className="text-sm text-foreground/80">{branch.label}</span>
            {tappedBranches.has(index) && (
              <motion.div
                className="absolute -top-1 -right-1 w-6 h-6 bg-leaf rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                <span className="text-xs">🍃</span>
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Leaves count */}
      <motion.p
        className="text-muted-foreground text-sm mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Leaves grown: {tappedBranches.size} / {branches.length}
      </motion.p>

      {/* Next button */}
      {allTapped && (
        <motion.button
          onClick={onNext}
          className="flex items-center gap-3 px-8 py-4 bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium pulse-gentle hover:bg-secondary/70 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">🍃</span>
          <span>See the leaves</span>
        </motion.button>
      )}
    </motion.div>
  );
};

export default BranchesScreen;
