import Head from "next/head";
import Heading from "@/components/common/Heading";
import Navbar from "@/components/nav/navbar";

export default function Nyheter() {
  return (
    <>
      <Head>
        <title>Nyheter | Marimaleri</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <Navbar />
          <Heading size="1" title="Nyheter" />
        </div>
      </main>
    </>
  );
}
