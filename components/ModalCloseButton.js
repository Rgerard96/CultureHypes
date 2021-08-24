import React from 'react';

export default function ModalCloseButton({ closeModal }) {
  return (
    <div
      className='absolute top-5 right-5 cursor-pointer h-5 group'
      onClick={() => closeModal()}
    >
      <img
            src='/icons/close.svg'
            alt='Menu'
            className='h-4'
          />
    </div>
  );
}
