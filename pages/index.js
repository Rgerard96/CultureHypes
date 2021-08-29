import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const router = useRouter();
  return (
    <div className=''>
      <Head>
        <title>Culture Hypes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <SearchBar />
      <div className='container mx-auto py-10 px-5 2xl:px-0'>
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
          <div
            className='rounded-lg shadow-md cursor-pointer overflow-hidden'
            onClick={() => router.push('/food')}
          >
            <div
              className='h-64 sm:h-56 lg:h-48 bg-cover bg-center bg-no-repeat'
              style={{ backgroundImage: 'url(' + '/images/img.jpg' + ')' }}
            ></div>
            <div className='p-3'>
              <div className='font-semibold text-lg mb-2'>Pork tenderloin sandwich</div>
              <div className='flex justify-between items-center text-primary'>
               <p className='font-semibold'>€ 15,00</p>
               <div className='p-1 rounded-lg border border-primary bg-green-50'>Afhalen en Bezorgen</div>
              </div>
            </div>
          </div>
          <div
            className='rounded-lg shadow-md cursor-pointer overflow-hidden'
            onClick={() => router.push('/food')}
          >
            <div
              className='h-64 sm:h-56 lg:h-48 bg-cover bg-center bg-no-repeat'
              style={{ backgroundImage: 'url(' + '/images/img.jpg' + ')' }}
            ></div>
            <div className='p-3'>
              <div className='font-semibold text-lg mb-2'>Pork tenderloin sandwich</div>
              <div className='flex justify-between items-center text-primary'>
               <p className='font-semibold'>€ 15,00</p>
               <div className='p-1 rounded-lg border border-primary bg-green-50'>Afhalen en Bezorgen</div>
              </div>
            </div>
          </div>
          <div
            className='rounded-lg shadow-md cursor-pointer overflow-hidden'
            onClick={() => router.push('/food')}
          >
            <div
              className='h-64 sm:h-56 lg:h-48 bg-cover bg-center bg-no-repeat'
              style={{ backgroundImage: 'url(' + '/images/img.jpg' + ')' }}
            ></div>
            <div className='p-3'>
              <div className='font-semibold text-lg mb-2'>Pork tenderloin sandwich</div>
              <div className='flex justify-between items-center text-primary'>
               <p className='font-semibold'>€ 15,00</p>
               <div className='p-1 rounded-lg border border-primary bg-green-50'>Afhalen en Bezorgen</div>
              </div>
            </div>
          </div>
          <div
            className='rounded-lg shadow-md cursor-pointer overflow-hidden'
            onClick={() => router.push('/food')}
          >
            <div
              className='h-64 sm:h-56 lg:h-48 bg-cover bg-center bg-no-repeat'
              style={{ backgroundImage: 'url(' + '/images/img.jpg' + ')' }}
            ></div>
            <div className='p-3'>
              <div className='font-semibold text-lg mb-2'>Pork tenderloin sandwich</div>
              <div className='flex justify-between items-center text-primary'>
               <p className='font-semibold'>€ 15,00</p>
               <div className='p-1 rounded-lg border border-primary bg-green-50'>Afhalen en Bezorgen</div>
              </div>
            </div>
          </div>
          <div
            className='rounded-lg shadow-md cursor-pointer overflow-hidden'
            onClick={() => router.push('/food')}
          >
            <div
              className='h-64 sm:h-56 lg:h-48 bg-cover bg-center bg-no-repeat'
              style={{ backgroundImage: 'url(' + '/images/img.jpg' + ')' }}
            ></div>
            <div className='p-3'>
              <div className='font-semibold text-lg mb-2'>Pork tenderloin sandwich</div>
              <div className='flex justify-between items-center text-primary'>
               <p className='font-semibold'>€ 15,00</p>
               <div className='p-1 rounded-lg border border-primary bg-green-50'>Afhalen en Bezorgen</div>
              </div>
            </div>
          </div>
          <div
            className='rounded-lg shadow-md cursor-pointer overflow-hidden'
            onClick={() => router.push('/food')}
          >
            <div
              className='h-64 sm:h-56 lg:h-48 bg-cover bg-center bg-no-repeat'
              style={{ backgroundImage: 'url(' + '/images/img.jpg' + ')' }}
            ></div>
            <div className='p-3'>
              <div className='font-semibold text-lg mb-2'>Pork tenderloin sandwich</div>
              <div className='flex justify-between items-center text-primary'>
               <p className='font-semibold'>€ 15,00</p>
               <div className='p-1 rounded-lg border border-primary bg-green-50'>Afhalen en Bezorgen</div>
              </div>
            </div>
          </div>
          <div
            className='rounded-lg shadow-md cursor-pointer overflow-hidden'
            onClick={() => router.push('/food')}
          >
            <div
              className='h-64 sm:h-56 lg:h-48 bg-cover bg-center bg-no-repeat'
              style={{ backgroundImage: 'url(' + '/images/img.jpg' + ')' }}
            ></div>
            <div className='p-3'>
              <div className='font-semibold text-lg mb-2'>Pork tenderloin sandwich</div>
              <div className='flex justify-between items-center text-primary'>
               <p className='font-semibold'>€ 15,00</p>
               <div className='p-1 rounded-lg border border-primary bg-green-50'>Afhalen en Bezorgen</div>
              </div>
            </div>
          </div>
          <div
            className='rounded-lg shadow-md cursor-pointer overflow-hidden'
            onClick={() => router.push('/food')}
          >
            <div
              className='h-64 sm:h-56 lg:h-48 bg-cover bg-center bg-no-repeat'
              style={{ backgroundImage: 'url(' + '/images/img.jpg' + ')' }}
            ></div>
            <div className='p-3'>
              <div className='font-semibold text-lg mb-2'>Pork tenderloin sandwich</div>
              <div className='flex justify-between items-center text-primary'>
               <p className='font-semibold'>€ 15,00</p>
               <div className='p-1 rounded-lg border border-primary bg-green-50'>Afhalen en Bezorgen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
