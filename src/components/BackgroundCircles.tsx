import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 2.5 }}
      className='relative flex items-center justify-center pb-7 md:pb-0'
    >
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-64 md:mt-52 animate-ping' />
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-64 md:mt-52 ' />
      <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-64 md:mt-52 ' />
      <div className='absolute border border-[#36454F] rounded-full opacity-20 h-[580px] w-[580px] md:h-[650px] md:w-[650px] mt-64 md:mt-52 animate-pulse' />
      <div className='absolute border border-[#333333] rounded-full h-[700px] w-[700px] md:h-[800px] md:w-[800px] mt-64 md:mt-52 ' />
    </motion.div>
  );
}
