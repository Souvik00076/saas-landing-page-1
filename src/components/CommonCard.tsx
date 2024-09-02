"use client";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type TCommonCard = {
  image: StaticImageData;
  header: string;
  content: string;
};
const CommonCard: FC<TCommonCard> = ({ image, header, content }) => {
  return (
    <div className="bg-gray-100 shadow-xl max-w-[300px] md:max-w-none px-8 border border-gray-200 py-6 rounded-xl">
      <Image src={image} alt="icon" width={200} height={200} />
      <h3 className="font-medium text-lg inline-flex">{header}</h3>
      <h4 className="text-xs mt-2 md:text-sm">{content}</h4>
    </div>
  );
};

export default CommonCard;
