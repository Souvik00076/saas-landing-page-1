import { FC } from "react";
import CubeImage from "/public/cube.png";
import StarImage from "/public/star.png";
import CommonCard from "./CommonCard";
const PriceShow: FC = () => {
  return (
    <section className=" pt-4 pb-12 overflow-x-clip">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:w-[600px] text-center container mx-auto">
          <span className="px-2 mt-4 py-1 text-xs font-medium border border-primary-gray rounded-md tracking-tight">
            Everything you need
          </span>
          <h1 className="text-4xl md:text-6xl  mt:4 tracking-tight text-center">
            A more effective way to track progress
          </h1>
          <h2 className="text-sm  mt-4">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simple
            and quickly.
          </h2>
          <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center gap-2">
            <CommonCard
              image={CubeImage}
              header={"Integration ecosystem"}
              content={
                "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place"
              }
            />
            <CommonCard
              image={StarImage}
              header={"Goal setting and tracking"}
              content={
                "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceShow;
