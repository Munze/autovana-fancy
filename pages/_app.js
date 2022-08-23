import { BottomNav } from '../components/navigation/BottomNav'
import { HeaderNavBar } from '../components/navigation/HeaderNavBar'
import { TopHeader } from '../components/navigation/TopHeader'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <TopHeader />
  <HeaderNavBar />
  <Component {...pageProps} />
  <BottomNav />
  </>)
}

export default MyApp
