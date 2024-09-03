import { FC } from "react";
import LogoSaas from "/public/logosaas.png";
import Image from "next/image";
import Xicon from "/public/social-x.svg";
import Picon from "/public/social-pin.svg";
import LinkedinIcon from "/public/social-linkedin.svg";
import InstaIcon from "/public/social-insta.svg";
import YoutubeIcon from "/public/social-youtube.svg";
const Footer: FC = () => {
  return (
    <section className="bg-black min-h-[300px] pt-4 pb-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4  md:justify-between md:flex-row">
          <div className="max-w-[400px] flex flex-col gap-2">
            <Image src={LogoSaas} width={48} height={48} alt="logo" />
            <h3 className="text-gray-300 text-sm font-medium md:text-lg">
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website
            </h3>
          </div>
          <div className="grid grid-cols1 md:grid-cols-4 gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Product</h3>
              <span className="text-gray-500">Features</span>
              <span className="text-gray-500">Integrations</span>

              <span className="text-gray-500">Updates</span>

              <span className="text-gray-500">FAQ</span>

              <span className="text-gray-500">Pricing</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Product</h3>
              <span className="text-gray-500">Features</span>
              <span className="text-gray-500">Integrations</span>

              <span className="text-gray-500">Updates</span>

              <span className="text-gray-500">FAQ</span>

              <span className="text-gray-500">Pricing</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Product</h3>
              <span className="text-gray-500">Features</span>
              <span className="text-gray-500">Integrations</span>

              <span className="text-gray-500">Updates</span>

              <span className="text-gray-500">FAQ</span>

              <span className="text-gray-500">Pricing</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Product</h3>
              <span className="text-gray-500">Features</span>
              <span className="text-gray-500">Integrations</span>

              <span className="text-gray-500">Updates</span>

              <span className="text-gray-500">FAQ</span>

              <span className="text-gray-500">Pricing</span>
            </div>
          </div>
        </div>
        <div className="flex mt-4  gap-4 items-center justify-center dark:invert">
          <Image src={InstaIcon} width={42} height={42} alt="InstaIcon" />
          <Image src={LinkedinIcon} width={42} height={42} alt="InstaIcon" />

          <Image src={Picon} width={42} height={42} alt="Pcon" />

          <Image src={Xicon} width={42} height={42} alt="XIcon" />

          <Image src={YoutubeIcon} width={42} height={42} alt="youtubeIcon" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
