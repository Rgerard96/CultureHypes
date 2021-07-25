import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


export default function forgotPassword() {
  return (
    <div className='h-screen w-screen py-8 px-5 flex items-center'>
      <Head>
        <title>CultureHypes - Forgot Password</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='mx-auto max-w-sm text-center'>
        <div className='mb-6'>
          <h2 className='font-bold text-3xl mb-1'>Forgot your password?</h2>
          <p className=''>
            Enter your registered email below to receive a temporary password.
          </p>
        </div>
        <div>
          <input
            className='focus:outline-none mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='text'
            name='email'
            id='email'
            placeholder='Email Address'
          />
        </div>
        <div>
          <button className='bg-teal w-full py-2 px-3 rounded text-white mb-6'>
            Send
          </button>
          <Link href='/login'>
            <p className='cursor-pointer break-normal hover:text-teal'>
              Back to login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
