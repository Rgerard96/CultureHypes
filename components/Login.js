import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import ModalCloseButton from './ModalCloseButton';

export default function Login({ changeOpenModal }) {
  const closeModal = () => {
    changeOpenModal('');
  };
  return (
    <div className='pt-10 pb-8 px-5 sm:flex sm:items-center bg-white max-w-max rounded-t-2xl sm:rounded-2xl transform sm:relative fixed bottom-0 animate-fadeUp sm:animate-fadeIn'>
      <Head>
        <title>CultureHypes - Login</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ModalCloseButton closeModal={closeModal} />
      <div className='mx-auto max-w-sm text-center'>
        <div className='mb-6'>
          <h2 className='font-bold text-2xl mb-1'>Hello!</h2>
          <p className=''>Please sign in to your account.</p>
        </div>
        <div className='mb-6 text-left'>
          <label className=''>Email Address</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='text'
            name='email'
            id='email'
            placeholder='your@email.com'
          />
          <label className=''>Password</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='password'
            name='password'
            id='password'
            placeholder='•••••••••'
          />
          <p
            className='text-right cursor-pointer hover:text-primary'
            onClick={() => changeOpenModal('forgotPassword')}
          >
            Forgot Password?
          </p>
        </div>
        <div>
          <button className='bg-primary w-full py-2 px-3 rounded-lg text-white mb-4'>
            Sign In
          </button>
          <p>
            Don't have an account?{' '}
            <a
              className='text-darkGrey font-bold cursor-pointer break-normal hover:text-primary'
              onClick={() => changeOpenModal('registration')}
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
