import { FC } from "react";
import ProductImage from "/public/product-image.png";
import Image from "next/image";
import RightArrow from "/public/arrow-right.svg";
import TubeImage from "/public/tube.png";
import PyramidImage from "/public/pyramid.png";

const ProductShowCase: FC = () => {
  return (
    <section className=" bg-gradient-to-t from-[#D2DCFF] to-[#FFFFFF] pt-4 pb-12 overflow-x-clip">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:w-[600px] text-center container mx-auto">
          <span className="px-2 mt-4 py-1 text-xs font-medium border border-primary-gray rounded-md tracking-tight">
            Boost your productivity
          </span>
          <h1 className="text-4xl md:text-6xl  mt:4 tracking-tight text-center">
            A more effective way to track progress
          </h1>
          <h2 className="text-sm  mt-4">
            Efforlessly turn your ideas into a fully functional responsive ,
            no-code SaaS website in just minutes with the set of free components
            for Framer
          </h2>
        </div>
        <div className="w-[90%] mt-4 relative container mx-auto flex flex-col items-center ">
          <Image src={ProductImage} alt="product image icon" />
          <Image
            src={TubeImage}
            alt="product image icon"
            className="w-[200px] hidden md:block h-[200px] bottom-[15%] absolute md:right-[85%] lg:right-[90%]"
          />
          <Image
            src={PyramidImage}
            alt="product image icon"
            width={220}
            height={220}
            className="top-[15%] hidden md:block absolute md:left-[85%] lg:left-[90%]"
          />
        </div>
        <div className=" w-[90%] container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-8 mt-4">
          <div className="product-catalog-item">
            <h3> Integration ecosystem</h3>
            <h2>Track your progress and motivate your efforts everyday </h2>
            <div>
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
          <div className="product-catalog-item">
            <h3> Integration ecosystem</h3>
            <h2>Track your progress and motivate your efforts everyday </h2>
            <div>
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
          <div className="product-catalog-item">
            <h3> Integration ecosystem</h3>
            <h2>Track your progress and motivate your efforts everyday </h2>
            <div>
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
          <div className="product-catalog-item">
            <h3> Integration ecosystem</h3>
            <h2>Track your progress and motivate your efforts everyday </h2>
            <div>
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
        </div>
      </div>
    </section>
  );
};
export default ProductShowCase;
