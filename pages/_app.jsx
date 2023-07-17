import "../styles/globals.css";
import "react-pro-sidebar/dist/css/styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const img = "https://i.imgur.com/766AFNG.png"
  return (
    <>
      <Head>
        <title>Sopow</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sopow.ga/" />
        <meta property="og:title" content="Sopow | Portfolio" />
        <meta
          property="og:description"
          content="Personal website created by Sopow"
        />
        <meta property="og:image" content={img} />
        <meta name="google-site-verification" content="tf06sdvU_f3DljkLJ8cemWHYRSgoxYhyUuym9L00BT8" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.sopow.ga/" />
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
