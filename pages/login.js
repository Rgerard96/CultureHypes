import Head from 'next/head';
import Link from 'next/link';

export default function login() {
  return (
    <div className='py-8 px-5 sm:flex sm:items-center'>
      <Head>
        <title>CultureHypes - Login</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='mx-auto max-w-sm text-center'>
        <div className='mb-6'>
          <h2 className='font-bold text-3xl mb-1'>Welcome Back!</h2>
          <p className=''>Please sign in to your account.</p>
        </div>
        <div className='mb-6 text-left'>
        <label className='font-semibold'>Email Address</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-cred focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='text'
            name='email'
            id='email'
            placeholder='your@email.com'
          />
          <label className='font-semibold'>Password</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-cred focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='password'
            name='password'
            id='password'
            placeholder='•••••••••'
          />
          <Link href='/forgot-password'>
            <p className='text-right cursor-pointer hover:text-cred'>Forgot Password?</p>
          </Link>
        </div>
        <div>
          <button className='bg-cred w-full py-2 px-3 rounded text-white mb-4'>
            Sign In
          </button>
          <p>
            Don't have an account?{' '}
            <Link href='/register'>
              <a className='text-darkGrey font-bold cursor-pointer break-normal hover:text-cred'>
                Sign Up
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
