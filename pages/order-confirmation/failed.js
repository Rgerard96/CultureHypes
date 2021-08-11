import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function failed() {
    return (
        <div className='py-8 px-5 sm:flex sm:items-center w-80 mx-auto'>
        <Head>
          <title>CultureHypes - Order Confirmation Failed</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div className='w-full text-center flex flex-col items-center'>
          <img
            className='w-24 mb-4'
            src='/icons/order-failed.svg'
            alt='Order Failed'
          />
          <div className='mb-4'>
            <h3 className='mb-1 font-semibold text-2xl '>Oops, Payment Failed.</h3>
            <h4>Payment for your order could not be proceed, try again.</h4>
          </div>
          <Link href='/checkout'>
            <button className='bg-cred w-full py-2 px-3 rounded text-white mb-4'>
              Back to Checkout
            </button>
          </Link>
          <Link href='/'>
              <a className='text-darkGrey cursor-pointer break-normal hover:text-cred'>
                Back to Home
              </a>
            </Link>
        </div>
      </div>
    )
}
