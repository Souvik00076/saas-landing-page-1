import { init } from "next/dist/compiled/webpack/webpack";

export const ANIMATION = {
  fadeDown: {
    initial: {
      y: "-100%",
    },
    animate: {
      y: 0,
    },
    transition: {
      duration: 1,
    },
  },
  fadeRight: {
    initial: {
      x: "-150%",
    },
    animate: {
      x: 0,
    },
    transition: {
      duration: 1,
    },
  },
  fadeLeftAndFloat: {
    animate: {
      translateY: [-30, 30],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
  tickerAnimation: {
    animate: {
      translateX: "-70%",
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  },
};
