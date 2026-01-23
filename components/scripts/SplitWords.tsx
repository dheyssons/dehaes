"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { blueishfade } from "@/public/variants/blueishFade";

type SplitTextProps = {
  text: string;
  className?: string;
  letterClassName?: string;
};

export function SplitText({
  text,
  className,
  letterClassName,
}: SplitTextProps) {
  const controls = useAnimation();

  useEffect(() => {
    async function run() {
      await controls.start("blue"); // varredura azul completa
      await controls.start("black"); // depois varredura preta
    }
    run();
  }, [controls]);

  return (
    <span className={className} style={{ whiteSpace: "pre" }}>
      {text.split("").map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="initial"
          animate={controls}
          variants={blueishfade}
          className={letterClassName}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
