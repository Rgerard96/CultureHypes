import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ModalCloseButton from './ModalCloseButton';

export default function ForgotPassword({ changeOpenModal }) {
  const closeModal = () => {
    changeOpenModal('');
  };
  return (
    <div className='p-5 bg-white max-w-max rounded-t-2xl sm:rounded-2xl sm:relative fixed bottom-0 animate-fadeUp sm:animate-fadeIn'>
      <Head>
        <title>CultureHypes - Forgot Password</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ModalCloseButton closeModal={closeModal} />
      <div className='mx-auto max-w-sm text-center'>
        <div className='mb-4'>
          <h2 className='font-bold text-2xl mb-1'>Forgot your password?</h2>
          <p className=''>
            Enter your email address below and choose a new password.
          </p>
        </div>
        <div className='text-left'>
          <label className=''>Email Address</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-4 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='text'
            name='email'
            id='email'
            placeholder='your@email.com'
          />
          <label className=''>Choose a new password</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-4 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='password'
            name='password'
            id='password'
            placeholder='•••••••••'
          />
        </div>
        <div>
          <button className='bg-primary w-full py-2 px-3 rounded-lg text-white mb-4'>
            Send reset link
          </button>
          <p
            className='cursor-pointer break-normal hover:text-primary'
            onClick={() => changeOpenModal('login')}
          >
            Back to login
          </p>
        </div>
      </div>
    </div>
  );
}
