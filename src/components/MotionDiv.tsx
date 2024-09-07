"use client";
import React, { FC } from "react";
import { AnimationProps, motion } from "framer-motion";
const MotionDiv: FC<{
  children: React.ReactNode;
  animate: AnimationProps;
  style?: string;
}> = ({ children, animate, style }) => {
  return (
    <motion.div className={style} {...animate}>
      {children}
    </motion.div>
  );
};
export default MotionDiv;
