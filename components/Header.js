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
        <div className='flex items-center'>
          <img
            src='/icons/menu.svg'
            alt='Menu'
            className='mr-4 h-5 sm:hidden'
          />
          <Link href='/'>
            <h1 className='font-bold sm:text-2xl cursor-pointer'>
              CultureHypes
            </h1>
          </Link>
        </div>
        <div className='flex items-center'>
          {/* <img
            className='w-6 cursor-pointer'
            src='/icons/cart-icon.svg'
            alt='Cart'
          /> */}
          <Link href='/checkout'>
            <div className='pr-4 sm:pr-6 text-black text-opacity-60 hover:text-opacity-100 border-r flex items-center cursor-pointer'>
              <img
                src='/icons/shopping-basket.svg'
                alt='Cart'
                className='mr-2 h-5 '
              />
              <p>0</p>
            </div>
          </Link>
          <img
            src='/icons/user.svg'
            alt='Account'
            className='ml-4 h-5 cursor-pointer block sm:hidden'
            onClick={() => setModal('login')}
          />
          <p
            className='hidden sm:block ml-6 text-black sm:text-opacity-60 hover:text-opacity-100 cursor-pointer border rounded-lg py-1 px-2 sm:border-none sm:p-0 sm:rounded-none'
            onClick={() => setModal('login')}
          >
            Account
          </p>
          <div className='cursor-pointer ml-6 bg-primary text-white rounded-lg py-2 px-3 hover:bg-opacity-90 hidden sm:block'>
            Start Selling
          </div>
        </div>
      </div>
    </div>
  );
}
