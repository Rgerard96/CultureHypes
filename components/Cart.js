import React from 'react';

export default function Cart() {
  return (
    <div className='h-screen w-screen absolute top-0 z-20 bg-primary pt-5 overflow-hidden'>
      <div className='flex justify-between px-5 mb-5'>
        <h2 className='text-2xl text-center text-white font-semibold'>Cart</h2>
        <div className='bg-white py-1 px-2 rounded-md cursor-pointer'>
          <img src='/icons/times-solid.svg' alt='Close' className='w-full' />
        </div>
      </div>
      <div className='px-5 pt-5 pb-20 h-full rounded-t-3xl bg-white overflow-y-scroll'>
        <div></div>
      </div>
    </div>
  );
}
