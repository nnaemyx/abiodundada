import React from "react";
import { motion, Variants } from "framer-motion";

// Variants for the parent container (quote)
const quote: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

// Variants for each single word
const singleWord: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

// Props for the AnimatedText component
interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  return (
    <div>
      <motion.div
        variants={quote}
        initial="initial"
        animate="animate"
        className={`w-full font-gobold font-bold text-black text-[48px] max-w-full mx-auto leading-[56px] ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
          className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedText;
