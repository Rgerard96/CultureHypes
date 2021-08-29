import React from 'react';

export default function ModalCloseButton({ closeModal }) {
  return (
    <div className='flex justify-end mb-5'>
      <img
        src='/icons/close.svg'
        alt='Menu'
        className='w-5 cursor-pointer'
        onClick={() => closeModal()}
      />
    </div>
  );
}
