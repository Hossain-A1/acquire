import "@/styles/globals.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navber />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
