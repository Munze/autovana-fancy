import { HeaderNavBar } from '../components/navigation/HeaderNavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <HeaderNavBar />
  <Component {...pageProps} />
  </>)
}

export default MyApp
