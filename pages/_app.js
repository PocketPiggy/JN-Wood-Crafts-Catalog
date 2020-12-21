import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPortrait,
  faCodeBranch,
  faHome,
  faChevronRight,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPortrait,
  faCodeBranch,
  faHome,
  faChevronRight,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faGithubSquare,
  faTwitterSquare
);

import "../styles/styles.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        {/*
        <link rel="stylesheet" type="text/css" href="/static/css/slick.css" />
        <link rel="stylesheet" type="text/css" href="/static/css/slick-theme.css" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="page-container">
        <NavigationBar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
