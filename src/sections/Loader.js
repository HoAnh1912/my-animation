import React from "react";
import { motion } from "framer-motion";
import Image from "./Image";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <Block variants={item} id="block-1" text="Contact" />
        <motion.div variants={itemMain} className="transition-image">
          <motion.h1>WELCOM TO MY PROJECT</motion.h1>
        </motion.div>
        <Block variants={item} id="block-3" text="About" />
        <Block variants={item} id="block-4" text="Blog" />
        <Block variants={item} id="block-5" text="Product" />
      </motion.div>
    </motion.div>
  );
};

export const Block = ({ posX, posY, variants, id, text }) => {
  return (
    <motion.div
      variants={variants}
      className={`block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <div>
        <h1>{text}</h1>
      </div>
    </motion.div>
  );
};
export default Loader;
