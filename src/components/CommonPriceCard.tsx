import { FC } from "react";
import CheckIcon from "/public/check.svg";
import Image from "next/image";

type TCommonPriceCard = {
  buttonText: string;
  price: number;
  childrenProps: string[];
  darkMode: boolean;
  cardType: number;
  isPopular: boolean;
};

const CommonPriceCard: FC<TCommonPriceCard> = ({
  buttonText,
  childrenProps,
  darkMode,
  cardType,
  price,
  isPopular,
}) => {
  const cardHeight =
    cardType === 0
      ? "md:h-[508px] h-[508px]"
      : cardType === 1
        ? "md:h-[603px] h-[508px]"
        : "md:h-[728px] h-[508px]";
  const textColor = cardType === 1 ? "text-gray-100" : "text-gray-700";
  const bgColor = darkMode ? "bg-black" : "bg-gray-50";
  const textColorDarkMode = darkMode ? "text-[#FFFFFF]" : "";
  const buttonStyle = darkMode ? "btn-secondary" : "btn-primary";
  const iconStyle = darkMode ? "dark:invert" : "border-black";

  return (
    <div
      className={`w-[300px] md:w-[230px] lg:w-[300px] px-6 py-4 rounded-xl shadow-lg ${cardHeight} ${bgColor}`}
    >
      <div className={`flex items-center justify-between ${textColor}`}>
        <span>
          {cardType === 1 ? "Pro" : cardType === 0 ? "Free" : "Business"}
        </span>
        {isPopular && (
          <div className="px-4 py-1.5  border-white border-[1px] text-sm rounded-md">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] ">
              Most Popular
            </span>
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-1 mt-[30px]">
        <span className={`text-4xl font-medium ${textColorDarkMode}`}>
          ${price}
        </span>
        <span className="text-gray-400 font-medium">/monthly</span>
      </div>
      <button className={`btn ${buttonStyle} mt-8 w-[80%]`}>
        {buttonText}
      </button>
      <div
        className={`mt-8 flex flex-col gap-4 ${darkMode ? "text-gray-50" : ""}`}
      >
        {childrenProps.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image
              src={CheckIcon}
              width={24}
              height={24}
              alt="check icon"
              className={iconStyle}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonPriceCard;
