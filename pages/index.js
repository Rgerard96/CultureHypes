import Head from 'next/head';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Culture Hypes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SearchBar />
      <div className='h-screen'>

      </div>
    </div>
  );
}
