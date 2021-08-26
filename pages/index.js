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
      <div className='container mx-auto py-10 px-5 sm:px-0'>
        <div className=' bg-primary h-36 sm:h-52 rounded-lg mb-10'></div>
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
          <div
            className=' h-72 rounded-lg border border-primary cursor-pointer'
            onClick={() => router.push('/food')}
          ></div>
          <div
            className=' h-72 rounded-lg border border-primary cursor-pointer'
            onClick={() => router.push('/food')}
          ></div>
          <div
            className=' h-72 rounded-lg border border-primary cursor-pointer'
            onClick={() => router.push('/food')}
          ></div>
          <div
            className=' h-72 rounded-lg border border-primary cursor-pointer'
            onClick={() => router.push('/food')}
          ></div>
          <div
            className=' h-72 rounded-lg border border-primary cursor-pointer'
            onClick={() => router.push('/food')}
          ></div>
          <div
            className=' h-72 rounded-lg border border-primary cursor-pointer'
            onClick={() => router.push('/food')}
          ></div>
          <div
            className=' h-72 rounded-lg border border-primary cursor-pointer'
            onClick={() => router.push('/food')}
          ></div>
          <div
            className=' h-72 rounded-lg border border-primary cursor-pointer'
            onClick={() => router.push('/food')}
          ></div>
          <div
            className=' h-72 rounded-lg border border-primary cursor-pointer'
            onClick={() => router.push('/food')}
          ></div>
        </div>
      </div>
    </div>
  );
}
