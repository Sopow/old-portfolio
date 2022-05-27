import "../styles/globals.css";
import "react-pro-sidebar/dist/css/styles.css";
import { Head } from "next/document";

function MyApp({ Component, pageProps }) {
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
        <meta property="og:image" content="https://imgur.com/37syxRn" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.sopow.fr/" />
        <meta name="twitter:title" content="Sopow | Portfolio" />
        <meta
          name="twitter:description"
          content="Personal website created by Sopow available on Github"
        />
        <meta name="twitter:image" content="https://imgur.com/37syxRn" />
        <meta name="theme-color" content="#cc3399" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
