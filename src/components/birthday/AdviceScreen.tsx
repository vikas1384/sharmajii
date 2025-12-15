import { motion } from "framer-motion";

interface AdviceScreenProps {
  onNext: () => void;
}

const AdviceScreen = ({ onNext }: AdviceScreenProps) => {
  return (
    <motion.div
      className="screen bg-sunrise-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Sun glow */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(40 90% 70% / 0.3) 0%, transparent 70%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Sun */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full glow-sunrise"
        style={{
          background:
            "radial-gradient(circle, hsl(45 100% 70%) 0%, hsl(35 80% 60%) 100%)",
        }}
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
      />

      {/* Tree silhouette */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div className="w-8 h-32 bg-bark rounded-sm mx-auto" />
        <div className="w-40 h-40 bg-accent rounded-full -mt-20 opacity-50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-md mt-20">
        <motion.p
          className="font-serif text-lg text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          One thing I want for you:
        </motion.p>

        <motion.p
          className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Carry no more overthinking.
        </motion.p>

        <motion.div
          className="space-y-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p className="font-serif text-lg text-foreground/80">
            Find your life goal.
          </p>
          <p className="font-serif text-lg text-foreground/80">
            Work on it.
          </p>
          <p className="font-serif text-lg text-foreground/80">
            Give it time.
          </p>
        </motion.div>

        <motion.p
          className="font-serif text-xl text-primary text-glow mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          You don't need to rush.
          <br />
          Just don't stop.
        </motion.p>

        <motion.button
          onClick={onNext}
          className="flex items-center gap-3 px-8 py-4 mx-auto bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium pulse-gentle hover:bg-secondary/70 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">🎂</span>
          <span>The celebration</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AdviceScreen;
