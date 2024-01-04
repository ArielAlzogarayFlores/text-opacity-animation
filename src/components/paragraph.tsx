"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

type paragraphProps = {
  paragraph: string;
};

export default function Paragraph({ paragraph }: paragraphProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <motion.p
      ref={container}
      className="flex text-6xl p-10 max-w-7xl text-zinc-300 flex-wrap"
      style={{ opacity: scrollYProgress }}
    >
      {paragraph}
    </motion.p>
  );
}
