import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className='text-darkGrey px-8 py-3 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h1 className='font-bold text-lg cursor-pointer'>CultureHypes</h1>
        </Link>
        <div className='flex'>
          {/* <img
            className='w-6 cursor-pointer'
            src='/icons/cart-icon.svg'
            alt='Cart'
          /> */}
          <Link href='/checkout'>
            <a className='ml-8 hover:text-primary'>Checkout</a>
          </Link>
          <Link href='/login'>
            <a className='ml-8 hover:text-primary'>Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
