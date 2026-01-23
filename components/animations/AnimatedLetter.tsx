import { motion } from "framer-motion";

type AnimatedLetterProps = {
  letter: string;
  delay: number;
};

export function AnimatedLetter({ letter, delay }: AnimatedLetterProps) {
  // preserva espaços
  if (letter === " ") {
    return <span>&nbsp;</span>;
  }

  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "200% 50%" }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
      style={{
        display: "inline-block",
        backgroundImage: "linear-gradient(90deg, #9ca3af, #22c55e, #000000)",
        backgroundSize: "200% 200%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {letter}
    </motion.span>
  );
}
