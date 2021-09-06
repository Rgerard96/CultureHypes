import Head from 'next/head';
import Header from '../components/Header';

export default function contact() {
  return (
    <div className='min-h-screen'>
      <Head>
        <title>CultureHypes - Contact Us</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <div className='mx-auto max-w-lg text-center px-5 my-10'>
        <div className='mb-6'>
          <h2 className='font-bold text-2xl mb-1'>Contact Us</h2>
          <p className=''>Please fill in the form to continue.</p>
        </div>
        <div className='text-left'>
          <label className=''>Full Name</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='text'
            name='fullName'
            id='fullName'
            placeholder='Your Name'
          />
          <label className=''>Email Address</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='text'
            name='email'
            id='email'
            placeholder='your@email.com'
          />
          <label className=''>Phone Number</label>
          <input
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            type='tel'
            name='phone'
            id='phone'
            placeholder='0648751245'
          />
          <label className=''>Message</label>
          <textarea
            className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded-lg py-2 px-3 w-full'
            name='message'
            id='message'
            rows='4'
            placeholder='How can we help you?'
          />
        </div>
        <div>
          <button className='bg-primary w-full py-2 px-3 rounded-lg text-white mb-4'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
