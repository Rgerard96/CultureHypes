import React, { useState } from 'react';
import Modals from './Modals';

export default function SearchBar() {
  const [modal, setModal] = useState('');
  return (
    <div className='px-5 py-2 border-b sticky top-0 bg-white'>
      <Modals modal={modal} setModal={setModal} />
      <div className='container flex items-center justify-end mx-auto'>
        <div className='group focus-within:border-primary flex items-center border rounded-lg px-3 py-1.5 w-full lg:w-96'>
          <img src='/icons/search.svg' alt='Search' className='w-4  mr-3' />
          <input
            type='search'
            name='search'
            id='search'
            placeholder='Search'
            className='border-none w-full focus:outline-none focus:ring-0 p-0'
          />
        </div>
        <img
          src='/icons/location.svg'
          alt='Location'
          className='ml-5 w-5 cursor-pointer'
          onClick={() => setModal('postalCode')}
        />
      </div>
    </div>
  );
}
