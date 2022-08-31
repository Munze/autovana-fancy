import { BottomNav } from "../components/navigation/BottomNav";
import { HeaderNavBar } from "../components/navigation/HeaderNavBar";
import { SessionProvider } from "next-auth/react"
// import { TopHeader } from "../components/navigation/TopHeader";
import { store } from "../store";
import { Provider } from "react-redux";
import "../styles/globals.css";
// import { SearchSidebar } from "../components/navigation/SearchSidebar";

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <>
    <SessionProvider session={session}>
      <Provider store={store}>
        <div className="md:fixed md:top-0 md:left-0 z-30 w-screen">
          {/* <TopHeader /> */}
          <HeaderNavBar />
        </div>
        <div className="bg-slate-200 md:mt-14">
          <Component {...pageProps} />
        </div>
        <BottomNav />
      </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
