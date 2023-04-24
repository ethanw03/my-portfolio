import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://i.ibb.co/tQ6GQQN/Screenshot-2023-04-24-at-12-30-31-PM.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
          vivamus arcu felis bibendum ut tristique et. Metus dictum at tempor
          commodo ullamcorper a lacus vestibulum sed. Eleifend quam adipiscing
          vitae proin sagittis nisl rhoncus. Pretium quam vulputate dignissim
          suspendisse in est. Nibh sed pulvinar proin gravida hendrerit lectus
          a. Hac habitasse platea dictumst quisque sagittis. Et magnis dis
          parturient montes nascetur.
        </p>
      </div>
    </motion.div>
  );
}
