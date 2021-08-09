import { useRouter } from 'next/router';
import React from 'react';

export default function checkout() {
  const router = useRouter();
  return (
    <div className='px-8 py-5 w-screen'>
      <div className='container mx-auto'>
        <div className='mb-5'>
          <a
            className='cursor-pointer hover:text-cred'
            onClick={() => router.back()}
          >
            Go Back
          </a>
        </div>
        <div className='flex flex-col sm:flex-row'>
          <div className='px-4 py-8 sm:p-8 w-full sm:w-4/6 mb-8 sm:mb-0 sm:mr-8 bg-gray-100 rounded-md'>
            <h2 className='font-bold text-3xl mb-8 text-center'>Checkout</h2>
            <div className='mb-8'>
              <p className='text-cred font-semibold mb-4'>Billing Details</p>
              <div className='grid sm:grid-cols-2 gap-x-8'>
                <div>
                  <label className='font-semibold'>Full Name</label>
                  <input
                    className='focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-5 w-full'
                    type='text'
                    name='fullName'
                    id='fullName'
                    placeholder='Rashid Gerard'
                  />
                </div>
                <div>
                  <label className='font-semibold'>Email Address</label>
                  <input
                    className='focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-5 w-full'
                    type='text'
                    name='fullName'
                    id='fullName'
                    placeholder='rashidgerard@hotmail.com'
                  />
                </div>
                <div>
                  <label className='font-semibold'>Phone Number</label>
                  <input
                    className='focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-5 w-full'
                    type='tel'
                    name='phone'
                    id='phone'
                    placeholder='0652836734'
                  />
                </div>
              </div>
            </div>
            <div className='mb-8'>
              <p className='text-cred font-semibold mb-4'>Delivery Info</p>
              <div className='grid sm:grid-cols-2 gap-x-8'>
                <div className='col-span-2'>
                  <label className='font-semibold'>Address</label>
                  <input
                    className='focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-5 w-full'
                    type='text'
                    name='fullName'
                    id='fullName'
                    placeholder='Haringvliet 32'
                  />
                </div>
                <div className='col-span-2 sm:col-span-1'>
                  <label className='font-semibold'>ZIP Code</label>
                  <input
                    className='focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-5 w-full'
                    type='text'
                    name='fullName'
                    id='fullName'
                    placeholder='3011TE'
                  />
                </div>
                <div className='col-span-2 sm:col-span-1'>
                  <label className='font-semibold'>City</label>
                  <input
                    className='focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-5 w-full'
                    type='tel'
                    name='phone'
                    id='phone'
                    placeholder='Rotterdam'
                  />
                </div>
              </div>
            </div>
            <div>
              <p className='text-cred font-semibold mb-4'>Payment Details</p>
              <p className='font-semibold'>Payment Method</p>
              <div className='grid sm:grid-cols-2 gap-x-8'>
                <div className='focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-5 w-full'>
                  <input
                    className='mr-4 text-cred focus:ring-0 focus:ring-offset-0'
                    type='radio'
                    name='iDeal'
                    id='iDeal'
                    defaultChecked
                  />
                  <label>iDeal</label>
                </div>
                <div className='focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-5 w-full'>
                  <input
                    className='mr-4 text-cred focus:ring-0 focus:ring-offset-0'
                    type='radio'
                    name='iDeal'
                    id='iDeal'
                  />
                  <label>PayPal</label>
                </div>
              </div>
            </div>
          </div>
          <div className='p-5 w-full sm:w-2/6 bg-gray-100 rounded-md'>
            <h2 className='font-bold text-3xl mb-8 text-center'>Summary</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
