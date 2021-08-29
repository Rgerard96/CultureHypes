import Link from 'next/link';
import React, { useState } from 'react';
import Modals from './Modals';

export default function Header() {
  const [modal, setModal] = useState('');
  console.log(modal);
  return (
    <div className='px-5 py-3 border-b'>
      <Modals modal={modal} setModal={setModal} />
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center justify-between w-full sm:w-max'>
          <Link href='/'>
            <h1 className='font-bold font-carter text-xl sm:text-3xl cursor-pointer text-primary'>
              CultureHypes
            </h1>
          </Link>
          <img
            src='/icons/menu.svg'
            alt='Menu'
            className='h-5 sm:hidden'
            onClick={() => setModal('menu')}
          />
        </div>
        <div className='hidden sm:flex'>
          <p className='cursor-pointer pr-6 border-r text-black sm:text-opacity-60 sm:hover:text-opacity-100'>
            Contact
          </p>
          <p className='ml-6 cursor-pointer text-black sm:text-opacity-60 sm:hover:text-opacity-100'>
            Our Policies
          </p>
        </div>
        <div className='items-center hidden sm:flex'>
          <p
            className=' text-black text-opacity-60 hover:text-opacity-100 cursor-pointer'
            onClick={() => setModal('login')}
          >
            Account
          </p>
          <div className='cursor-pointer ml-6 bg-primary text-white rounded-lg py-2 px-3 hover:bg-opacity-90 '>
            Start Selling
          </div>
        </div>
      </div>
    </div>
  );
}
