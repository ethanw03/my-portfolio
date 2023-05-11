import Link from 'next/link';
import React from 'react';
import { Social } from '../../typings';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center '>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center '
      >
        {/* Social Icons */}

        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='gray'
            bgColor='transparent'
            target='_blank'
          />
        ))}
      </motion.div>
      <Link href='#contact'>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className='flex flex-row items-center text-gray-300 '
        >
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className='hidden text-sm text-gray-400 uppercase md:inline-flex '>
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
