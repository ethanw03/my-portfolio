import { Experience } from '../../typings';
import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../sanity';

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className='flex flex-col rounded-lg items-center space-y-0 flex-shrink-0 
      w-[500px] md:w-[600px] xl:w-[900] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden drop-shadow-xl '
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-28 h-28 md:w-28 md:h-28 rounded-full xl:w-[150px] xl:h-[150px] mb-2 object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
        alt='profile'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-lg font-light md:text-3xl'>
          {experience?.jobTitle}
        </h4>
        <p className='mt-1 font-bold text-md md:text-2xl'>
          {' '}
          {experience?.company}
        </p>
        <div className='flex my-2 space-x-2'>
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className='object-cover w-10 h-10 rounded-full'
              src={
                technology?.image ? urlFor(technology.image).url() : undefined
              }
              alt='tech'
            />
          ))}
        </div>
      </div>
      <p className='py-3 text-sm text-gray-300 uppercase md:py-5 md:text-lg '>
        {new Date(experience?.dateStarted).toDateString()} -{' '}
        {experience.isCurrentlyWorkingHere
          ? 'Present'
          : new Date(experience?.dateEnded).toDateString()}
      </p>

      <ul className='p-10 pr-10 ml-10 space-y-4 overflow-y-scroll text-sm list-disc max-h-48 md:text-lg scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#36454F]/80'>
        {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
