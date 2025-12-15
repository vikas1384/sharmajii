import { motion } from "framer-motion";

interface SafetyScreenProps {
  onNext: () => void;
}

const SafetyScreen = ({ onNext }: SafetyScreenProps) => {
  return (
    <motion.div
      className="screen bg-soil-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Glowing roots at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
        <svg viewBox="0 0 200 50" className="w-full h-full opacity-60">
          <motion.path
            d="M0 50 Q50 30 100 35 Q150 40 200 50"
            fill="none"
            stroke="hsl(38, 70%, 55%)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M20 50 Q60 20 100 30 Q140 40 180 50"
            fill="none"
            stroke="hsl(38, 70%, 55%)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
        </svg>
        <motion.div
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      </div>

      {/* Content */}
      <div className="text-center px-6 max-w-md">
        <motion.p
          className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          No matter what happens.
        </motion.p>

        <motion.p
          className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          No matter how big the argument.
        </motion.p>

        <motion.p
          className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          No matter how long the silence.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <p className="font-serif text-lg text-muted-foreground mb-4">
            If you ever need someone
            <br />
            in your bad time wheather we r talking or not
          </p>

          <motion.p
            className="font-serif text-2xl md:text-3xl text-primary font-semibold text-glow"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.5, type: "spring" }}
          >
            CALL ME FIRST.
          </motion.p>

          <motion.p
            className="font-serif text-xl text-foreground/80 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            I'll be there.
            <br />
            Always.
          </motion.p>
        </motion.div>

        <motion.button
          onClick={onNext}
          className="flex items-center gap-3 px-8 py-4 mx-auto bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium pulse-gentle hover:bg-secondary/70 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">🌅</span>
          <span>One more thing</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SafetyScreen;
