import { FC } from "react";
import Avatar1 from "/public/avatar-1.png";
import Avatar2 from "/public/avatar-2.png";
import Avatar3 from "/public/avatar-3.png";
import Avatar4 from "/public/avatar-4.png";
import Avatar5 from "/public/avatar-5.png";
import Avatar6 from "/public/avatar-6.png";
import Avatar7 from "/public/avatar-7.png";
import Avatar8 from "/public/avatar-8.png";
import Avatar9 from "/public/avatar-9.png";
import CommonCard from "./CommonCard";

const data = [
  {
    image: Avatar1,
    content:
      "This is an amazing product! It has changed the way I work for the better.",
    email: "user1@example.com",
  },
  {
    image: Avatar2,
    content: "I highly recommend this service. It exceeded my expectations.",
    email: "user2@example.com",
  },
  {
    image: Avatar3,
    content: "Great value for the price. I would definitely purchase again.",
    email: "user3@example.com",
  },
  {
    image: Avatar4,
    content: "Fantastic quality and fast delivery. Very satisfied!",
    email: "user4@example.com",
  },
  {
    image: Avatar5,
    content: "A top-notch experience. Customer service was outstanding.",
    email: "user5@example.com",
  },
  {
    image: Avatar6,
    content:
      "This product is just what I needed. Highly recommend it to others.",
    email: "user6@example.com",
  },
  {
    image: Avatar7,
    content:
      "Excellent quality and fantastic support. I'm very happy with my purchase.",
    email: "user7@example.com",
  },
  {
    image: Avatar8,
    content:
      "A must-have for anyone looking for top performance and reliability.",
    email: "user8@example.com",
  },
  {
    image: Avatar9,
    content:
      "Exceeded my expectations in every way. Will definitely buy again.",
    email: "user9@example.com",
  },
];

const Testimonials: FC = () => {
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
        <div className="  [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] w-[70%] container mx-auto mt-4 md:mt-16 flex flex-col md:flex-row items-center gap-4 justify-center overflow-hidden max-h-[700px]">
          <div className="flex flex-col gap-4">
            {data.map((item, index) => {
              return (
                <CommonCard
                  key={index}
                  image={item.image}
                  content={item.content}
                  email={item.email}
                  isTestimonial={true}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            {data.map((item, index) => {
              return (
                <CommonCard
                  key={index}
                  image={item.image}
                  content={item.content}
                  email={item.email}
                  isTestimonial={true}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            {data.map((item, index) => {
              return (
                <CommonCard
                  key={index}
                  image={item.image}
                  content={item.content}
                  email={item.email}
                  isTestimonial={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
