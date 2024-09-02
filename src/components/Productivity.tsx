import { FC } from "react";
import CommonPriceCard from "./CommonPriceCard";

const Productivity: FC = () => {
  return (
    <section className=" pt-4 pb-12 overflow-x-clip">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:w-[600px] text-center container mx-auto">
          <span className="px-2 mt-4 py-1 text-xs font-medium border border-primary-gray rounded-md tracking-tight">
            Everything you need
          </span>{" "}
          <h1 className="text-4xl md:text-6xl  mt-8 md:mt:4 tracking-tight text-center">
            A more effective way to track progress
          </h1>
          <h2 className="text-sm  mt-4">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simple
            and quickly.
          </h2>
        </div>
        <div className="flex items-center justify-center mt-12">
          <div className="flex md:flex-row flex-col md:items-end gap-4">
            <CommonPriceCard
              buttonText={"Get started for free"}
              childrenProps={[
                "Up to 5 project members",
                " Unlimited tasks and projects",
                "2GB storage",
                "Integrations",
                "Basic support",
              ]}
              isPopular={false}
              darkMode={false}
              cardType={0}
              price={0}
            />
            <CommonPriceCard
              buttonText={"Signup now"}
              childrenProps={[
                "Up to 5 project members",
                " Unlimited tasks and projects",
                "2GB storage",
                "Integrations",
                "Basic support",
              ]}
              isPopular={true}
              darkMode={true}
              cardType={1}
              price={0}
            />
            <CommonPriceCard
              buttonText={"Get started for free"}
              childrenProps={[
                "Up to 5 project members",
                " Unlimited tasks and projects",
                "2GB storage",
                "Integrations",
                "Basic support",
              ]}
              isPopular={false}
              darkMode={false}
              cardType={2}
              price={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productivity;
