import 'tailwindcss/tailwind.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div className='text-darkGrey overflow-x-hidden'>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
