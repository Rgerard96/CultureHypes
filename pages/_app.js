import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='text-darkGrey'>
      <Component {...pageProps} />

    </div>
  )
  
}

export default MyApp
