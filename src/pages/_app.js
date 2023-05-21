/* import "bootstrap/dist/css/bootstrap.css"; */
import Navbar from "@/components/nav/navbar";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
