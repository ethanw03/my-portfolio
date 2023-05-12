import { Project } from '../../typings';
import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../sanity';

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left  md:flex-row xl:text-grey-500 justify-evenly'
    >
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        Projects
      </h3>

      <div className='relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80'>
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className='flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-10 space-y-5 snap-center md:p-44'
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className='object-contain  h-28 xl:h-80 md:h-72'
              src={urlFor(project?.image).url()}
              alt=''
            />

            <div className='max-w-6xl px-0 space-y-5 md:space-y-10 md:px-10'>
              <h4 className='text-lg font-semibold text-center md:text-2xl lg:text-4xl'>
                <span className='underline decoration-darkGreen/50'>
                  Project {i + 1}:
                </span>{' '}
                {project?.title}
              </h4>
              <div className='flex items-center justify-center space-x-2 '>
                {project?.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    className='object-cover w-10 h-10 rounded-full'
                    src={urlFor(technology?.image).url()}
                    alt=''
                  />
                ))}
              </div>

              <p className='text-sm text-justify md:text-md lg:text-lg '>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[20%] md:top-[30%] bg-darkGreen/40 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}
