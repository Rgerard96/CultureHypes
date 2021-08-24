import React, { useEffect, useState } from 'react';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Registration from './Registration';

export default function Modals({ modal, setModal }) {
  const [modalOpen, setModalOpen] = useState();

  useEffect(() => {
    setModalOpen(modal);
  }, [modal]);

  const changeOpenModal = (change) => {
    setModalOpen(change);
    setModal(change)
  };
  return (
    <div
      className={`bg-black bg-opacity-40 h-screen w-screen fixed inset-0 ${
        modalOpen ? 'flex' : 'hidden'
      } justify-center sm:items-center items-end`}
    >
      {modalOpen === 'login' && <Login changeOpenModal={changeOpenModal} />}
      {modalOpen === 'registration' && (
        <Registration changeOpenModal={changeOpenModal} />
      )}
      {modalOpen === 'forgotPassword' && (
        <ForgotPassword changeOpenModal={changeOpenModal} />
      )}
    </div>
  );
}
