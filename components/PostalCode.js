import React from 'react';
import Head from 'next/head';
import ModalCloseButton from './ModalCloseButton';

export default function PostalCode({ changeOpenModal }) {
  const closeModal = () => {
    changeOpenModal('');
  };
  return (
    <div className='p-5 bg-white w-full sm:w-96 rounded-t-2xl sm:rounded-2xl sm:relative fixed bottom-0 animate-fadeUp sm:animate-fadeIn'>
      <Head>
        <title>CultureHypes - Forgot Password</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ModalCloseButton closeModal={closeModal} />
      <div className='mx-auto max-w-sm text-center'>
        <div className='mb-4'>
          <h2 className='font-bold text-2xl mb-1'>Postal Code</h2>
        </div>
        <div>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='number'
            name='postalCode'
            id='postalCode'
            placeholder='Postal Code ex. 3011'
            min='1000'
            max='9999'
          />
        </div>
        <div>
          <button className='bg-primary w-full py-2 px-3 rounded-lg text-white mb-6'>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
