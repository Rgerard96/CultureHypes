import React from 'react';

export default function ModalCloseButton({ closeModal }) {
  return (
    <div className='absolute top-5 right-5 cursor-pointer'>
      <img
        src='/icons/close.svg'
        alt='Menu'
        className='h-4'
        onClick={() => closeModal()}
      />
    </div>
  );
}
