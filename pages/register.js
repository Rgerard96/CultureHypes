import Head from 'next/head';
import Link from 'next/link';

export default function register() {
  return (
    <div className='h-screen w-screen overflow-x-hidden py-8 px-5 sm:flex sm:items-center'>
      <Head>
        <title>CultureHypes - Register</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='mx-auto max-w-sm text-center'>
        <div className='mb-6'>
          <h2 className='font-bold text-3xl mb-1'>Create new account</h2>
          <p className=''>Please fill in the form to continue.</p>
        </div>
        <div>
          <input
            className='focus:outline-none mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='text'
            name='fullName'
            id='fullName'
            placeholder='Full Name'
          />
          <input
            className='focus:outline-none mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='text'
            name='email'
            id='email'
            placeholder='Email Address'
          />
          <input
            className='focus:outline-none mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='tel'
            name='phone'
            id='phone'
            placeholder='Phone Number'
          />
          <input
            className='focus:outline-none mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
          <input
            className='focus:outline-none mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder='Confirm Password'
          />
        </div>
        <div>
          <button className='bg-cred w-full py-2 px-3 rounded text-white mb-4'>
            Sign Up
          </button>
          <p>
            Have an account?{' '}
            <Link href='/login'>
              <a className='text-darkGrey font-bold cursor-pointer break-normal hover:text-cred'>
                Log In
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
