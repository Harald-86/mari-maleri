import { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/nav/navbar";

export default function Document() {
  return (
    <Html lang="en">
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
