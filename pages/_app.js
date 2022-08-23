import { BottomNav } from '../components/navigation/BottomNav'
import { HeaderNavBar } from '../components/navigation/HeaderNavBar'
import { TopHeader } from '../components/navigation/TopHeader'
import { store } from '../store'
import { Provider } from 'react-redux'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Provider store={store}>
  <TopHeader />
  <HeaderNavBar />
  <Component {...pageProps} />
  <BottomNav />
  </Provider>
  </>)
}

export default MyApp
