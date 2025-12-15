import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface FinalScreenProps {
  onRestart: () => void;
}

const confettiEmojis = ["🎉", "🎊", "✨", "💫", "🌟", "🎂", "🎁", "💖", "🎈", "🥳", "💝", "🌸"];
const sparkleColors = ["hsl(var(--primary))", "hsl(var(--birthday-pink))", "hsl(var(--sparkle))", "hsl(var(--birthday-purple))"];

const FinalScreen = ({ onRestart }: FinalScreenProps) => {
  const [confetti, setConfetti] = useState<
    { id: number; emoji: string; x: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const pieces = [...Array(50)].map((_, i) => ({
      id: i,
      emoji: confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)],
      x: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <motion.div
      className="screen bg-birthday-gradient overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Magical sparkles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() > 0.5 ? '4px' : '2px',
              height: Math.random() > 0.5 ? '4px' : '2px',
              background: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Confetti rain */}
      {confetti.map((piece) => (
        <motion.span
          key={piece.id}
          className="absolute text-2xl md:text-4xl pointer-events-none"
          style={{ left: `${piece.x}%`, top: "-10%" }}
          initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0.8, 0],
            rotate: 360 + Math.random() * 720,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        >
          {piece.emoji}
        </motion.span>
      ))}

      {/* Glowing tree */}
      <motion.div
        className="relative mb-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
      >
        {/* Magical tree glow */}
        <motion.div
          className="absolute inset-0 -m-16 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, hsl(var(--birthday-pink) / 0.2) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tree */}
        <div className="relative">
          {/* Trunk */}
          <div className="w-10 h-24 bg-gradient-to-t from-bark via-trunk to-root rounded-sm mx-auto shadow-lg" />
          {/* Foliage layers */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2">
            <motion.div
              className="w-40 h-40 bg-accent/50 rounded-full blur-md"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2">
            <motion.div
              className="w-32 h-32 bg-leaf/60 rounded-full blur-sm"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </div>
          {/* Flowers, fruits & decorations */}
          <motion.span
            className="absolute -top-10 left-6 text-3xl"
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🌸
          </motion.span>
          <motion.span
            className="absolute -top-16 right-4 text-3xl"
            animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            🍎
          </motion.span>
          <motion.span
            className="absolute -top-6 right-0 text-2xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌸
          </motion.span>
          <motion.span
            className="absolute -top-2 left-0 text-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
          >
            🍃
          </motion.span>
          <motion.span
            className="absolute -top-20 left-1/2 -translate-x-1/2 text-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⭐
          </motion.span>
        </div>
      </motion.div>

      {/* Birthday message */}
      <motion.div
        className="text-center px-6 z-10 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-5xl">🎂</span>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl md:text-6xl text-primary mb-4 font-bold"
          style={{
            textShadow: '0 0 40px hsl(var(--primary) / 0.8), 0 0 80px hsl(var(--primary) / 0.4), 0 0 120px hsl(var(--birthday-pink) / 0.3)'
          }}
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          HAPPY BIRTHDAY
        </motion.h1>

        <motion.p
          className="font-serif text-3xl md:text-4xl text-birthday-pink mb-6 font-medium text-glow-pink"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Anmol Sharma
        </motion.p>

        <motion.p
          className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          This tree will keep growing.
          <br />
          <span className="text-primary">No matter the season.</span>
        </motion.p>

        <motion.button
          onClick={onRestart}
          className="flex items-center gap-4 px-10 py-5 mx-auto bg-gradient-to-r from-primary/30 to-birthday-pink/20 backdrop-blur-sm border border-primary/50 rounded-full text-primary font-semibold hover:border-primary/70 hover:bg-primary/40 transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.span 
            className="text-2xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            🔁
          </motion.span>
          <span className="text-lg">Tap to grow it again</span>
        </motion.button>
      </motion.div>

      {/* Signature with love */}
      <motion.p
        className="absolute bottom-8 text-birthday-pink/60 text-sm font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        Made with 
        <motion.span 
          className="inline-block mx-1"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💖
        </motion.span>
      </motion.p>
    </motion.div>
  );
};

export default FinalScreen;
