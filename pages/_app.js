import { HeaderNavBar } from '../components/navigation/HeaderNavBar'
import { TopHeader } from '../components/navigation/TopHeader'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <TopHeader />
  <HeaderNavBar />
  <Component {...pageProps} />
  </>)
}

export default MyApp
