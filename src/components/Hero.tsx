"use client";
import { FC } from "react";
import RightArrow from "/public/arrow-right.svg";
import CogImage from "/public/cog.png";
import Image from "next/image";
import NoodleImage from "/public/noodle.png";
import CylinderImage from "/public/cylinder.png";
import { ANIMATION } from "@/animations/motionAnimation";
import MotionImage from "./MotionImage";
import { AnimationProps } from "framer-motion";
const Hero: FC = () => {
  return (
    <section className="p-4 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip">
      <div className="container mx-auto ">
        <div className=" flex md:flex-row flex-col  ">
          <div className="md:w-[478px] w-[300px] md:mt-20 mt-0 ">
            <span className="px-2 mt-4 py-1 text-xs font-medium border border-primary-gray rounded-md">
              Version 2.0 is here
            </span>
            <h1 className="font-medium mt-8 md:text-6xl text-4xl tracking-tight bg-gradient-to-b to-[#001354]">
              Pathway to productivity
            </h1>
            <h2 className="text-sm mt-4">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts and Celebrate your success.
            </h2>
            <div className="flex gap-6 items-center mt-8">
              <button className="btn btn-primary">Get for free</button>
              <div className="flex gap-2 items-center">
                <span>Learn more</span>
                <Image
                  src={RightArrow}
                  width={24}
                  height={24}
                  alt="arrow icon"
                />
              </div>
            </div>
          </div>
          <div className="relative md:flex-1  md:h-[648px] h-[388px] mt-20">
            <MotionImage
              animate={ANIMATION.fadeLeftAndFloat as unknown as AnimationProps}
              style="absolute md:h-full md:6 xl:left-48 md:max-w-[648px]"
            >
              <Image src={CogImage} alt="cog icon " />
            </MotionImage>
            <MotionImage
              animate={ANIMATION.fadeDown}
              style="hidden  md:block absolute  left-[-40px] top-[-80px]"
            >
              <Image
                src={CylinderImage}
                alt="cylinder"
                width={220}
                height={220}
              />
            </MotionImage>
            <MotionImage animate={ANIMATION.fadeRight}>
              <Image
                src={NoodleImage}
                alt="cylinder"
                className="hidden  xl:block absolute  right-4 top-[524px] rotate-[30deg]"
                width={220}
                height={220}
              />
            </MotionImage>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
