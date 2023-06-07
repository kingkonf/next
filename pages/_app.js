import '@/styles/globals.css'
import Header from './blogpost/header';

export default function App({ Component, pageProps }) {
  return(
  <>
  <Header/>
   <Component {...pageProps} />
</>
  );
};
