import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-inter'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
