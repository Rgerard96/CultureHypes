import React, { useState } from 'react';
import Head from 'next/head';
import Modals from '../components/Modals';
import Header from '../components/Header';

export default function Registration({ changeOpenModal }) {
  const [modal, setModal] = useState('');
  return (
    <div>
      <Head>
        <title>CultureHypes - Start Selling</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Modals modal={modal} setModal={setModal} />
      <Header />
      <div className='mx-auto max-w-lg text-center px-5 my-10'>
        <div className='mb-4'>
          <h2 className='font-bold text-2xl mb-1'>
            Get Started
          </h2>
          <p>Please fill in the form to continue.</p>
        </div>
        <div className='text-left'>
          <label>Full Name</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-4 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='text'
            name='fullName'
            id='fullName'
            placeholder='Your Name'
          />
          <label>Email Address</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-4 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='text'
            name='email'
            id='email'
            placeholder='your@email.com'
          />
          <label>Phone Number</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-4 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='tel'
            name='phone'
            id='phone'
            placeholder='0648751245'
          />
          <label>Password</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-4 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='password'
            name='password'
            id='password'
            placeholder='•••••••••'
          />
        </div>
        <div>
          <button className='bg-primary w-full py-2 px-3 rounded-lg text-white mb-4'>
            Start Selling
          </button>
          <p>
            Have an account?{' '}
            <a
              className='text-darkGrey font-bold cursor-pointer break-normal hover:text-primary'
              onClick={() => setModal('login')}
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
