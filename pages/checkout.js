import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function checkout() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('iDeal');
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');

  return (
    <div className='p-5 sm:px-8'>
      <div className='container mx-auto'>
        <div className='mb-5 py-1 flex items-center cursor-pointer' onClick={() => router.back()}>
          <img
            className='w-3 mr-1'
            src='/icons/left-arrow.svg'
            alt='Go back arrow'
          />
          <a className='text-xs'>Back</a>
        </div>
        <div className='flex flex-col lg:flex-row sm:justify-between'>
          <div className='w-full lg:w-4/6 xl:w-3/6 mb-8 lg:mb-0 sm:mr-8'>
            <h2 className='font-bold text-2xl mb-8'>Checkout</h2>
            <div className='mb-4'>
              <div className='grid sm:grid-cols-2 gap-x-8'>
                <div className='focus:outline-none mb-6 bg-transparent border border-darkGrey rounded py-2 px-5 w-full'>
                  <input
                    className='placeholder-lightGrey mr-4 text-primary focus:ring-0 focus:ring-offset-0'
                    type='radio'
                    name='delivery'
                    id='delivery'
                    checked={deliveryMethod === 'delivery' ? true : false}
                    onChange={(e) => setDeliveryMethod(e.target.name)}
                  />
                  <label>Delivery</label>
                </div>
                <div className='focus:outline-none mb-6 bg-transparent border border-darkGrey rounded py-2 px-5 w-full group-focus:border-primary'>
                  <input
                    className='placeholder-lightGrey mr-4 text-primary focus:ring-0 focus:ring-offset-0'
                    type='radio'
                    name='pickup'
                    id='pickup'
                    checked={deliveryMethod === 'pickup' ? true : false}
                    onChange={(e) => setDeliveryMethod(e.target.name)}
                  />
                  <label>Pick Up</label>
                </div>
              </div>
            </div>
            <div className='mb-4'>
              <p className='text-primary font-semibold mb-4'>Billing Details</p>
              <div className='grid sm:grid-cols-2 gap-x-8'>
                <div className='col-span-2'>
                  <label className='font-semibold'>Full Name</label>
                  <input
                    className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
                    type='text'
                    name='fullName'
                    id='fullName'
                    placeholder='Your Name'
                  />
                </div>
                <div className='col-span-2 sm:col-span-1'>
                  <label className='font-semibold'>Email Address</label>
                  <input
                    className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
                    type='text'
                    name='email'
                    id='email'
                    placeholder='your@email.com'
                  />
                </div>
                <div className='col-span-2 sm:col-span-1'>
                  <label className='font-semibold'>Phone Number</label>
                  <input
                    className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
                    type='tel'
                    name='phone'
                    id='phone'
                    placeholder='0652836734'
                  />
                </div>
              </div>
            </div>
            <div className='mb-4'>
              <p className='text-primary font-semibold mb-4'>Delivery Info</p>
              <div className='grid sm:grid-cols-4 gap-x-8'>
                <div className='col-span-4 sm:col-span-2'>
                  <label className='font-semibold'>Street Name</label>
                  <input
                    className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
                    type='text'
                    name='streetName'
                    id='streetName'
                    placeholder='Haringvliet'
                  />
                </div>
                <div className='col-span-2 sm:col-span-1'>
                  <label className='font-semibold'>House Number</label>
                  <input
                    className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
                    type='text'
                    name='houseNumber'
                    id='houseNumber'
                    placeholder='32'
                  />
                </div>
                <div className='col-span-2 sm:col-span-1'>
                  <label className='font-semibold'>Addition</label>
                  <input
                    className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
                    type='text'
                    name='addition'
                    id='addition'
                    placeholder='C'
                  />
                </div>
                <div className='col-span-4 sm:col-span-2'>
                  <label className='font-semibold'>ZIP Code</label>
                  <input
                    className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
                    type='text'
                    name='zipCode'
                    id='zipCode'
                    placeholder='3011TE'
                  />
                </div>
                <div className='col-span-4 sm:col-span-2'>
                  <label className='font-semibold'>City</label>
                  <input
                    className='placeholder-lightGrey focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-3 w-full'
                    type='text'
                    name='city'
                    id='city'
                    placeholder='Rotterdam'
                  />
                </div>
              </div>
            </div>
            <div>
              <p className='text-primary font-semibold mb-4'>Payment Details</p>
              <p className='font-semibold'>Payment Method</p>
              <div className='grid sm:grid-cols-2 gap-x-8'>
                <div className='focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-5 w-full group-focus:border-primary'>
                  <input
                    className='placeholder-lightGrey mr-4 text-primary focus:ring-0 focus:ring-offset-0'
                    type='radio'
                    name='iDeal'
                    id='iDeal'
                    checked={paymentMethod === 'iDeal' ? true : false}
                    onChange={(e) => setPaymentMethod(e.target.name)}
                  />
                  <label>iDeal</label>
                </div>
                <div className='focus:outline-none mt-2 mb-6 bg-transparent border border-darkGrey rounded py-2 px-5 w-full'>
                  <input
                    className='placeholder-lightGrey mr-4 text-primary focus:ring-0 focus:ring-offset-0'
                    type='radio'
                    name='paypal'
                    id='paypal'
                    checked={paymentMethod === 'paypal' ? true : false}
                    onChange={(e) => setPaymentMethod(e.target.name)}
                  />
                  <label>PayPal</label>
                </div>
              </div>
            </div>
          </div>
          <div className='pb-8 w-full lg:w-2/6'>
            <h2 className='font-bold text-2xl mb-8'>Order Summary</h2>
            <div className='p-5 w-full h-80 bg-gray-100 rounded-md mb-4'></div>
            <Link href='/order-confirmation/success'>
              <button className='bg-primary w-full py-2 px-3 rounded text-white mb-4'>
                Success
              </button>
            </Link>
            <Link href='/order-confirmation/failed'>
              <button className='bg-darkGrey w-full py-2 px-3 rounded text-white'>
                Failed
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
