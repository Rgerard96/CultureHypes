import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen w-screen'>
      <Head>
        <title>Culture Hypes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Link href='/food'>
        <a>Food</a>
      </Link>
    </div>
  );
}
