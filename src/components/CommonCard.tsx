"use client";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type TCommonCard = {
  image: StaticImageData;
  header?: string;
  content: string;
  isTestimonial?: boolean;
  email?: string;
};
const CommonCard: FC<TCommonCard> = ({
  image,
  header,
  content,
  isTestimonial = false,
  email,
}) => {
  return (
    <div
      className={`bg-gray-100 shadow-xl ${isTestimonial ? "max-w-[250px]" : "max-w-[300px]  md:max-w-none"} px-8 border border-gray-200 py-6 rounded-xl`}
    >
      {isTestimonial ? (
        <>
          <span className=" text-start text-sm">{content}</span>
          <div className="flex gap-2">
            <Image src={image} width={24} height={24} alt="profile image" />
            <span>{email}</span>
          </div>
        </>
      ) : (
        <>
          <Image src={image} alt="icon" width={200} height={200} />
          <h3 className="font-medium text-lg inline-flex">{header}</h3>
          <h4 className="text-xs mt-2 md:text-sm">{content}</h4>
        </>
      )}
    </div>
  );
};

export default CommonCard;
