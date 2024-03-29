import "../styles/globals.css";
import "react-pro-sidebar/dist/css/styles.css";
import Head from "next/head";
import ascii from "../utils/ascii";
import React from "react";

function MyApp({ Component, pageProps }) {
  const img = "https://i.imgur.com/766AFNG.png";
  React.useEffect(() => {
    console.log(
      ascii,
      "color: #7488E5FF; font-family: monospace; font-size: 0.9em;"
    );
  }, []);
  return (
    <>
      <Head>
        <title>Sopow</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sopow.fr/" />
        <meta property="og:title" content="Sopow | Portfolio" />
        <meta
          property="og:description"
          content="Personal website created by Sopow"
        />
        <meta property="og:image" content={img} />
        <meta
          name="google-site-verification"
          content="tf06sdvU_f3DljkLJ8cemWHYRSgoxYhyUuym9L00BT8"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.sopow.fr/" />
        <meta name="twitter:title" content="Sopow | Portfolio" />
        <meta
          name="twitter:description"
          content="Personal website created by Sopow available on Github"
        />
        <meta name="twitter:image" content={img} />
        <meta name="theme-color" content="#011627" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
