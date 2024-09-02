import { FC } from "react";
import RightArrow from "/public/arrow-right.svg";
import Image from "next/image";
import StarImage from "/public/star.png";
import SpringImage from "/public/spring.png";
const Action: FC = () => {
  return (
    <section className=" bg-gradient-to-t md:mt-12 mt-8 from-[#D2DCFF] to-[#FFFFFF] pt-4 pb-12 overflow-x-clip max-h-[500px]">
      <div className="container mx-auto flex flex-col items-center justify-center ">
        <h1 className="text-3xl md:text-6xl inline-flex font-medium">
          Sign up for free today
        </h1>
        <h3 className="max-w-[500px] md:mt-8 mt-4 text-gray-700 text-center md:text-md text-sm">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts
        </h3>
        <div className="flex gap-6 items-center mt-8">
          <button className="btn btn-primary">Get for free</button>
          <div className="flex gap-2 items-center">
            <span>Learn more</span>
            <Image src={RightArrow} width={24} height={24} alt="arrow icon" />
          </div>
        </div>
      </div>
      <div className="relative h-[100px]">
        <Image
          className="absolute  hidden md:block bottom-[90%]  left-[75%]"
          src={StarImage}
          width={220}
          height={220}
          alt="start image"
        />
        <Image
          className="hidden md:block absolute bottom-0 right-[75%]"
          src={SpringImage}
          width={220}
          height={220}
          alt="spring image"
        />
      </div>
    </section>
  );
};

export default Action;
