import { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/nav/navbar";

export default function Document() {
  return (
    <Html lang="en">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <Head />
      <body>
        <div className="wrapper">
          <Main />
          <NextScript />
        </div>
        <Footer />
      </body>
    </Html>
  );
}
