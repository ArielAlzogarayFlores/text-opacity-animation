"use client";
import { motion, useScroll, useTransform } from "framer-motion";
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

  const words = paragraph.split(" ");

  return (
    <p
      ref={container}
      className="flex text-6xl p-10 max-w-7xl text-zinc-300 flex-wrap"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

type wordProps = {
  children: string;
  progress: any;
  range: number[];
};

const Word = ({ children, progress, range }: wordProps) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="relative mr-3 mt-3">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

type charProps = {
  children: string;
  progress: any;
  range: number[];
};

const Char = ({ children, progress, range }: charProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
