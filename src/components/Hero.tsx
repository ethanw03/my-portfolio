import { Cursor, useTypewriter } from 'react-simple-typewriter';

import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '../../typings';
import React from 'react';
import { urlFor } from '../../sanity';

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
      'Software Engineer',
      '<Creative />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center '>
      <BackgroundCircles />
      <img
        className='relative object-cover w-32 h-32 mx-auto rounded-full '
        src={urlFor(pageInfo?.heroImage).url()}
        alt='profile'
      />
      <div className='z-20 text'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]'>
          Full-Stack Developer
        </h2>
        <h1 className='px-10 text-2xl font-semibold md:text-5xl lg:text-6xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#36454F ' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
