import "@/styles/globals.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps, session }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Toaster/>
      <SessionProvider session={session}>
        <Navber />
        <Component {...pageProps} />
        <ToastContainer />
        <Footer />
      </SessionProvider>
    </>
  );
}
