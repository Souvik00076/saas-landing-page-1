"use client";
import React, { FC, useEffect } from "react";
import { AnimationProps, motion, useAnimate } from "framer-motion";
const MotionImage: FC<{
  children: React.ReactNode;
  animate: AnimationProps;
  style?: string;
}> = ({ children, animate, style }) => {
  return (
    <motion.div {...animate} className={style}>
      {children}
    </motion.div>
  );
};
export default MotionImage;
