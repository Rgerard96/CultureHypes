import React, { useEffect, useState } from 'react';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Menu from './Menu';
import PostalCode from './PostalCode';

export default function Modals({ modal, setModal }) {
  const [modalOpen, setModalOpen] = useState();

  useEffect(() => {
    setModalOpen(modal);
  }, [modal]);

  const changeOpenModal = (change) => {
    setModalOpen(change);
    setModal(change);
  };
  return (
    <div
      className={`bg-black bg-opacity-70 w-screen fixed inset-0 ${
        modalOpen ? 'flex' : 'invisible'
      } ${
        modalOpen && 'animate-scaleIn'
      } justify-center sm:items-center items-end sm:justify-center z-10 pointer-events-auto`}
    >
      {modalOpen === 'login' && <Login changeOpenModal={changeOpenModal} />}
      {modalOpen === 'forgotPassword' && (
        <ForgotPassword changeOpenModal={changeOpenModal} />
      )}
        {modalOpen === 'postalCode' && (
          <PostalCode changeOpenModal={changeOpenModal} />
        )}
      {modalOpen === 'menu' && (
        <Menu modalOpen={modalOpen} changeOpenModal={changeOpenModal} />
      )}
    </div>
  );
}
