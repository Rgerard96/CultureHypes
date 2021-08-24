import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import ModalCloseButton from './ModalCloseButton';

export default function Registration({ changeOpenModal }) {
 const closeModal = () => {
    changeOpenModal('');
  };
  return (
    <div className='py-8 px-5 sm:flex sm:items-center bg-white max-w-max rounded-t-2xl sm:rounded-2xl sm:relative fixed bottom-0 animate-fadeUp sm:animate-fadeIn'>
      <Head>
        <title>CultureHypes - Register</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ModalCloseButton closeModal={closeModal} />
      <div className='mx-auto max-w-sm text-center'>
        <div className='mb-6'>
          <h2 className='font-bold text-2xl mb-1'>Join CultureHypes</h2>
          <p className=''>Please fill in the form to continue.</p>
        </div>
        <div className='text-left'>
          <label className=''>Full Name</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='text'
            name='fullName'
            id='fullName'
            placeholder='Your Name'
          />
          <label className=''>Email Address</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='text'
            name='email'
            id='email'
            placeholder='your@email.com'
          />
          <label className=''>Phone Number</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='tel'
            name='phone'
            id='phone'
            placeholder='0648751245'
          />
          <label className=''>Password</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='password'
            name='password'
            id='password'
            placeholder='•••••••••'
          />
        </div>
        <div>
          <button className='bg-primary w-full py-2 px-3 rounded-lg text-white mb-4'>
            Sign Up
          </button>
          <p>
            Have an account?{' '}
            <a
              className='text-darkGrey font-bold cursor-pointer break-normal hover:text-primary'
              onClick={() => changeOpenModal('login')}
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
