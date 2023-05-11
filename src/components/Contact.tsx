import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PageInfo } from '../../typings';
import React from 'react';

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ethanwong98@yahoo.ca?subject= ${formData.subject}&body=My name is ${formData.name}. ${formData.message}(${formData.email})})`;
  };

  return (
    <div className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
        Contact
      </h3>
      <div className='flex flex-col pt-10 space-y-10 l:space-y-10 xl:'>
        <h4 className='text-4xl font-semibold text-center xl:text-4xl'>
          <span className='decoration-[#36454F]/50 underline '>
            Let's talk.
          </span>
        </h4>

        <div className='space-y-5 l:space-y-10 xl:space-y-10'>
          <div className='flex items-center justify-center space-x-5'>
            <PhoneIcon className='text-[#36454F] h-7 w-7 animate-pulse ' />
            <p className='text-2xl'>{pageInfo.phoneNumber}</p>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <EnvelopeIcon className='text-[#36454F] h-7 w-7 animate-pulse ' />
            <p className='text-2xl'>{pageInfo.email}</p>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <MapPinIcon className='text-[#36454F] h-7 w-7 animate-pulse ' />
            <p className='text-2xl'>{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col mx-auto space-y-3 w-fit'
        >
          <div className='flex flex-col space-y-3 w-30 xl:flex-row xl:space-y-0 xl:space-x-3 '>
            <input
              {...register('name')}
              placeholder='Name'
              className='contactInput'
              type='text'
            />
            <input
              {...register('email')}
              placeholder='Email'
              className='contactInput'
              type='email'
            />
          </div>

          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            type='text'
          />
          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
          />
          <button className='bg-[#36454F] py-5 px-10 rounded-lg text-black font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
