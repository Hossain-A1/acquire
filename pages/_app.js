import "@/styles/globals.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps,session }) {
  return (
    <>
      <SessionProvider session={session}>
        <Navber />
        <Component {...pageProps} />
        <ToastContainer/>
        <Footer />
      </SessionProvider>
    </>
  );
}
