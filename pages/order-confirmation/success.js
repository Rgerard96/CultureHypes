import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function success() {
  return (
    <div className='py-8 px-5 sm:flex sm:items-center'>
      <Head>
        <title>CultureHypes - Order Confirmation Successful</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='mx-auto max-w-sm sm:w-96 text-center flex flex-col items-center'>
        <img
          className='w-24 mb-4'
          src='/icons/order-success.svg'
          alt='Order Successful'
        />
        <div className='font-semibold text-2xl mb-4'>
          <h3 className='mb-1'>Hey Rashid,</h3>
          <h3>Thanks for your order.</h3>
        </div>
        <div className='w-full border-t-2 py-4'>
          <div className='flex justify-between mb-1 items-center'>
            <p>Sub Total</p>
            <p className='font-semibold'>$138.75</p>
          </div>
          <div className='flex justify-between mb-1 items-center'>
            <p>Delivery Fee</p>
            <p className='font-semibold'>$3.00</p>
          </div>
          <div className='flex justify-between mb-1 items-center'>
            <p>Process Fee</p>
            <p className='font-semibold'>$1.00</p>
          </div>
          <hr className='my-4 border-t-2' />
          <div className='flex justify-between mb-1 items-center font-semibold'>
            <p>Total</p>
            <p>$142.75</p>
          </div>
        </div>
        <Link href='/checkout'>
          <button className='bg-primary w-full py-2 px-3 rounded text-white mb-4'>
            Order Details
          </button>
        </Link>
        <Link href='/'>
          <a className='text-darkGrey cursor-pointer break-normal hover:text-primary'>
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
