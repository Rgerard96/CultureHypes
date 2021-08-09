import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className='bg-dark w-screen text-white px-8 py-5'>
      <div className='container mx-auto flex justify-between'>
        <h1>CultureHypes</h1>
        <div>
          <Link href='/checkout'>
            <a className='hover:text-cred'>Checkout</a>
          </Link>
          <Link href='/login'>
            <a className='ml-8 hover:text-cred'>Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
