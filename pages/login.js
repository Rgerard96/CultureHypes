import Head from 'next/head';
import Link from 'next/link';

export default function login() {
  return (
    <div className='h-screen w-screen py-8 px-5 flex items-center'>
      <Head>
        <title>CultureHypes - Login</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='mx-auto max-w-sm text-center'>
        <div className='mb-6'>
          <h2 className='font-bold text-3xl mb-1'>Welcome Back!</h2>
          <p className=''>Please sign in to your account.</p>
        </div>
        <div className='mb-6'>
          <input
            className='focus:outline-none mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='text'
            name='email'
            id='email'
            placeholder='Email Address'
          />
          <input
            className='focus:outline-none mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
          <Link href='/forgot-password'>
            <p className='text-right cursor-pointer hover:text-teal'>Forgot Password?</p>
          </Link>
        </div>
        <div>
          <button className='bg-teal w-full py-2 px-3 rounded text-white mb-4'>
            Sign In
          </button>
          <p>
            Don't have an account?{' '}
            <Link href='/register'>
              <a className='text-darkGrey font-bold cursor-pointer break-normal hover:text-teal'>
                Sign Up
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
