import React from 'react';

export default function SearchBar() {
  return (
    <div className='px-5 py-3 border-b sticky top-0 bg-white'>
      <div className='container flex items-center justify-end mx-auto'>
        <div className='group focus-within:border-primary flex items-center border rounded-lg px-3 py-2 w-full lg:w-96'>
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
        />
      </div>
    </div>
  );
}
