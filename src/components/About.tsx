import { PageInfo } from '../../typings';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly '
    >
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='https://i.ibb.co/tQ6GQQN/Screenshot-2023-04-24-at-12-30-31-PM.png'
        className='-mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />

      <div className='px-0 space-y-5 md:space-y-10 md:px-10'>
        <h4 className='text-xl font-semibold md:text-4xl'>
          Here is a{' '}
          <span className='underline decoration-[#36454F]/50'>little</span>{' '}
          background
        </h4>
        <p className='text-md lg:text-lg'>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
