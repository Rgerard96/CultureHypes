import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function index() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('iDeal');
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');

  return (
    <div className='p-5 sm:px-8'>
      <div className='container mx-auto'>
        <div
          className='mb-5 py-1 flex items-center cursor-pointer'
          onClick={() => router.back()}
        >
          <img
            className='w-3 mr-1'
            src='/icons/left-arrow.svg'
            alt='Go back arrow'
          />
          <a className='text-xs'>Back</a>
        </div>
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row sm:justify-between'>
          <div
            className='w-full h-80 sm:w-102 sm:h-102 mb-8 lg:mb-0 mr-8 bg-center bg-cover rounded-md'
            style={{ backgroundImage: 'url(' + '/images/img2.jpg' + ')' }}
          ></div>
          <div className='w-full sm:w-1/2'>
            <h2 className='font-bold text-2xl mb-4'>Healthy Bowl</h2>
            <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt nemo maxime natus fugiat dolore excepturi sequi quo quas odio atque consectetur, exercitationem inventore qui voluptatum quidem pariatur molestiae accusantium quaerat cum.
            </p>
            <div className='mb-4'>
            <h4 className='font-semibold text-md underline mb-2'>Ingredients</h4>
            <ul className='list-disc list-inside'>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
            </ul>
            </div>
            <Link href='/order-confirmation/success'>
              <button className='bg-primary w-full py-2 px-3 rounded text-white mb-4'>
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
