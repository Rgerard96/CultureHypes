import Head from 'next/head';
import { useRouter } from 'next/router';
import ModalCloseButton from './ModalCloseButton';

export default function Menu({ modalOpen, changeOpenModal }) {
  const router = useRouter();
  const closeModal = () => {
    changeOpenModal('');
  };
  return (
    <div
      className={`p-5 flex flex-col bg-white h-full fixed bottom-0 left-0 ${
        modalOpen === 'menu' ? 'animate-fadeInLeft' : 'animate-fadeOutLeft'
      }  w-3/4 z-20`}
    >
      <Head>
        <title>CultureHypes - Login</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ModalCloseButton closeModal={closeModal} />

      <div className='text-center'>
        <p className='mb-6'>Contact</p>
        <p className='mb-6'>Our Policies</p>
        <div
          className='cursor-pointer border rounded-lg py-2 px-3 text-center mb-6'
          onClick={() => router.push('/checkout')}
        >
          Checkout
        </div>
        <div className='cursor-pointer bg-primary text-white rounded-lg py-2 px-3 text-center mb-6'>
          Start Selling
        </div>
      </div>
    </div>
  );
}
