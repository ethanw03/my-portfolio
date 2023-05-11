import { Experience } from '../../typings';
import ExperienceCard from './ExperienceCard';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-lft md:flex-row justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500  text-center text-2xl '>
        Experience
      </h3>
      <div className='w-screen lg:w-100 xl:w-100 flex space-x-5 overflow-x-scroll p-20 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#36454F]/80'>
        {experiences?.map((experience) => (
          <ExperienceCard
            key={experience._id}
            experience={experience}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
