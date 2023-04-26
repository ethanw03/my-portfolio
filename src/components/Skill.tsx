import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  const imageUrl = skill?.image ? urlFor(skill.image).url() : undefined;

  if (!imageUrl) {
    console.error(`Invalid image for skill "${skill.title}"`);
    return null;
  }

  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={imageUrl}
        alt=""
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-30 xl:h-30 filter group-hover:greyscale transition duration=300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 group-hover:bg-white h-24 w-24 md:w-24 md:h-24 xl:w-30 xl:h-30 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
