import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../typings';
import { urlFor } from '../../sanity';

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
    <div className='relative flex cursor-pointer group'>
      <img
        src={imageUrl}
        alt=''
        className='object-fill w-20 h-20 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:greyscale'
      />
    </div>
  );
}

export default Skill;
