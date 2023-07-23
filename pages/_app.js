import '@/styles/globals.css'
import './signup.css';
import './login.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Feed from '../components/Feed.css'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
