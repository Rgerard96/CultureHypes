import Link from 'next/link';
import React, { useState } from 'react';
import Modals from './Modals';

export default function Header() {
  const [modal, setModal] = useState('');
  console.log(modal);
  return (
    <div className='px-5 py-2.5 border-b'>
      <Modals modal={modal} setModal={setModal} />
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h1 className='font-bold sm:text-2xl cursor-pointer'>CultureHypes</h1>
        </Link>
        <div className='flex items-center'>
          {/* <img
            className='w-6 cursor-pointer'
            src='/icons/cart-icon.svg'
            alt='Cart'
          /> */}
          <Link href='/checkout'>
            <div className='pr-4 sm:pr-6 text-black text-opacity-60 hover:text-opacity-100 border-r flex items-center cursor-pointer'>
              <img src="/icons/shopping-basket.svg" alt="Cart" className='mr-2 h-5 ' />
              <p>0</p>
            </div>
          </Link>
          <p
            className='ml-4 sm:ml-6 text-black text-opacity-60 hover:text-opacity-100 cursor-pointer border rounded-lg py-1 px-2'
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
