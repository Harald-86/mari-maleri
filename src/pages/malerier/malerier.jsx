"use server";

import Head from "next/head";
import { createClient } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Navbar from "@/components/nav/navbar";
import { useEffect } from "react";

export default function Malerier(malerier) {
  console.log(malerier.malerier);
  const resultat = malerier.malerier;

  /* useEffect(() => {
    console.log("this is inside the useeffect", resultat);
  }, [resultat]);
 */
  return (
    <>
      <Head>
        <title>Malerier | Marimaleri</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <Navbar />
          {resultat.map((sortert, index) => {
            console.log("sortet", sortert.tittel);
            console.log("slug", sortert.slug);

            return (
              <>
                {sortert.publiser ? (
                  <Link
                    href={`/malerier/details/[slug]`}
                    as={`/malerier/details/${sortert.slug.current}`}
                    key={index}
                    className="maleri"
                  >
                    <Image
                      src={sortert.bilde + "?auto=format"}
                      alt="Maleri malt av Mari Tomter"
                      width={250}
                      height={250}
                    />
                    <p className="maleri__tittel">{sortert.tittel}</p>
                    <p className="maleri__pris">kr {sortert.pris},-</p>
                  </Link>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

const client = createClient({
  projectId: "4i1q7pgh",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export async function getInitialProps() {
  const malerier = await client.fetch(
    `*[_type == "malerier"]{_rev,_id,tittel,slug,publiser, pris,"bilde": bilde.asset->url}`
  );

  return {
    props: {
      malerier,
    },
  };
}

/* export function getAllPostIds(malerier) {
  const filNavn = fs.readdirSync(malerier);

  return filNavn.map((fil) => {
    return {
      params: {
        id: filNavn.replace(/\.md$/, ""),
      },
    };
  });
}
 */
