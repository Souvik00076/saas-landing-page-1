"user client";

import { FC } from "react";
import AcmeLogo from "/public/logo-acme.png";
import ApexLogo from "/public/logo-apex.png";
import EchoLogo from "/public/logo-echo.png";
import PulseLogo from "/public/logo-pulse.png";
import QuantumLogo from "/public/logo-quantum.png";
import Image from "next/image";
import MotionDiv from "./MotionDiv";
import { ANIMATION } from "@/animations/motionAnimation";
import { AnimationProps } from "framer-motion";
const LogoTicker: FC = () => {
  return (
    <div className="  bg-white w-full py-4 md:py-12">
      <div className="container overflow-hidden mx-auto [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <MotionDiv
          style="flex gap-x-14 justify-evenly flex-none "
          animate={ANIMATION.tickerAnimation as AnimationProps}
        >
          <Image src={AcmeLogo} alt="acme logo" className="logo-ticker-image" />
          <Image src={ApexLogo} alt="apex logo" className="logo-ticker-image" />

          <Image src={EchoLogo} alt="echo logo" className="logo-ticker-image" />
          <Image
            src={PulseLogo}
            alt="pulse logo"
            className="logo-ticker-image"
          />
          <Image
            src={QuantumLogo}
            alt="quantum logo"
            className="logo-ticker-image"
          />
        </MotionDiv>
      </div>
    </div>
  );
};

export default LogoTicker;
