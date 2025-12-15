import { motion } from "framer-motion";

interface SeedScreenProps {
  onNext: () => void;
}

const SeedScreen = ({ onNext }: SeedScreenProps) => {
  return (
    <motion.div
      className="screen bg-birthday-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Magical sparkles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
              width: Math.random() > 0.7 ? '3px' : '2px',
              height: Math.random() > 0.7 ? '3px' : '2px',
              background: i % 3 === 0 
                ? 'hsl(var(--primary))' 
                : i % 3 === 1 
                  ? 'hsl(var(--birthday-pink))' 
                  : 'hsl(var(--sparkle))',
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating birthday emojis */}
      {['🎂', '✨', '🎁', '💫', '🎈'].map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl opacity-40 pointer-events-none"
          style={{
            left: `${15 + i * 18}%`,
            top: `${10 + (i % 3) * 15}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* Dedication */}
      <motion.div
        className="text-center mb-12 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.p 
          className="text-birthday-pink text-sm tracking-[0.3em] uppercase mb-3 font-medium"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✨ Dedicated to ✨
        </motion.p>
        <h1 className="font-serif text-4xl md:text-5xl text-primary text-glow font-bold">
          Anmol Sharma
        </h1>
        <motion.p 
          className="text-foreground/70 text-sm italic mt-3 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Precious by nature. Rare by presence.
        </motion.p>
      </motion.div>

      {/* Seed with magical glow */}
      <motion.div
        className="relative flex items-center justify-center mb-16"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      >
        {/* Outer magical glow */}
        <motion.div
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--birthday-pink) / 0.3) 0%, hsl(var(--birthday-purple) / 0.2) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Inner gold glow */}
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-primary/40"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-12 h-12 rounded-full bg-seed-glow/60"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        {/* The seed */}
        <motion.div 
          className="w-7 h-10 bg-gradient-to-b from-primary via-sunrise to-bark rounded-full transform rotate-45 glow-gold"
          animate={{ rotate: [45, 50, 45] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="text-center mb-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
          Every strong bond
          <br />
          <span className="text-primary">starts quietly.</span>
        </p>
      </motion.div>

      {/* Button with rainbow effect */}
      <motion.button
        onClick={onNext}
        className="relative flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-secondary/60 to-birthday-pink/20 backdrop-blur-sm border border-primary/40 rounded-full text-primary font-semibold pulse-birthday hover:border-primary/60 transition-all z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.span 
          className="text-3xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🌱
        </motion.span>
        <span className="text-lg">Tap to plant the seed</span>
      </motion.button>

      {/* Magical soil at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40">
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-birthday-purple/20 to-transparent" />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bark/40 to-transparent"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default SeedScreen;
