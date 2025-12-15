import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BirthdayExperience from "@/components/birthday/BirthdayExperience";

const Index = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("unlocked") === "true") setUnlocked(true);
  }, []);

  const handleSubmit = () => {
    if (password.trim() === "16/12/2025") {
      setUnlocked(true);
      localStorage.setItem("unlocked", "true");
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (!unlocked) {
    return (
      <>
        <Helmet>
          <title>Enter Password 🎂</title>
          <meta name="description" content="Birthday access gate" />
        </Helmet>
        <div className="screen bg-birthday-gradient">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-2xl opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 85}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {["🎂", "✨", "🎁", "💫", "🎈"][i % 5]}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-sm mx-auto bg-secondary/40 backdrop-blur-md border border-primary/30 rounded-2xl p-6 text-center glow-birthday"
          >
            <motion.h1
              className="font-serif text-2xl text-primary text-glow mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Happy Birthday Access
            </motion.h1>
            <p className="text-muted-foreground mb-4">Enter the password to continue</p>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit();
              }}
              placeholder="Password"
              className="mb-3 text-center"
            />
            {error && (
              <motion.p
                className="text-destructive mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.p>
            )}
            <Button onClick={handleSubmit} className="pulse-birthday">
              Unlock
            </Button>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Happy Birthday Anmol 🌳</title>
        <meta name="description" content="A growing tree of memories and wishes for someone special." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#1a1611" />
      </Helmet>
      <BirthdayExperience />
    </>
  );
};

export default Index;
