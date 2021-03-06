import Link from 'next/link';
import React, { useState } from 'react';
import Modals from './Modals';
import { useRouter } from 'next/router';

export default function Header() {
  const [modal, setModal] = useState('');
  const router = useRouter();
  return (
    <div className='px-5 py-2 border-b'>
      <Modals modal={modal} setModal={setModal} />
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center justify-between w-full sm:w-max'>
          <img
            src='/icons/menu.svg'
            alt='Menu'
            className='w-5 sm:hidden'
            onClick={() => setModal('menu')}
          />
          <Link href='/'>
            <h1 className='font-bold font-carter text-xl md:text-2xl cursor-pointer text-primary'>
              CultureHypes
            </h1>
          </Link>
          <img
            src='/icons/avatar.svg'
            alt='Avatar'
            className='w-5 sm:hidden'
            onClick={() => setModal('login')}
          />
        </div>
        <div className='hidden sm:flex'>
          <p
            className='cursor-pointer pr-6 border-r text-black sm:text-opacity-60 sm:hover:text-opacity-100'
            onClick={() => router.push('/contact')}
          >
            Contact
          </p>
          <p
            className='ml-6 cursor-pointer text-black sm:text-opacity-60 sm:hover:text-opacity-100'
            onClick={() => router.push('/policies')}
          >
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
          <div
            className='cursor-pointer ml-6 bg-primary text-white rounded-lg py-1.5 px-2 hover:bg-opacity-90 '
            onClick={() => router.push('/start-selling')}
          >
            Start Selling
          </div>
        </div>
      </div>
    </div>
  );
}
