import React from 'react';

export default function ModalCloseButton({ closeModal }) {
  return (
    <div
      className='absolute top-5 right-5 cursor-pointer h-5 group'
      onClick={() => closeModal()}
    >
      <div className='bg-black bg-opacity-60 group-hover:bg-opacity-100 rounded-lg h-5 w-0.5 transform rotate-45'></div>
      <div className='bg-black bg-opacity-60 group-hover:bg-opacity-100 rounded-lg h-5 w-0.5 transform rotate-135 -translate-y-5'></div>
    </div>
  );
}
