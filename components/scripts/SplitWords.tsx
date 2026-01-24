"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
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
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true, // anima apenas uma vez
    margin: "-20% 0%", // começa um pouco antes de entrar totalmente
  });

  useEffect(() => {
    if (!isInView) return;

    async function run() {
      await controls.start("blue");
      await controls.start("black");
    }

    run();
  }, [isInView, controls]);

  return (
    <span ref={ref} className={className} style={{ whiteSpace: "pre" }}>
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
