import Link from "next/link";
import Head from "next/head";
import FatCard from "../components/FatCard";
import SelectCard from "../components/SelectCard";

export default function Index() {
  return (
    <>
      <Head>
        <title>JN Wood Crafts - Catalog</title>
      </Head>
      <div className="page-content">
        <div className="logo-container">
          <img
            src="/images/logo/small-logo.png"
            alt="JN Wood Crafts logo."
            title="Veteran owned and operated."
          />
        </div>
        <div className="landing-page-header">
          <h1> Catalog </h1>
        </div>
        <span className="welcome-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
            nulla pharetra diam sit amet nisl suscipit adipiscing bibendum.
            Egestas sed sed risus pretium quam vulputate dignissim suspendisse
            in. Blandit aliquam etiam erat velit scelerisque in.
          </p>
        </span>
        <div className="fatcards-container-6">
          <FatCard cardData={SelectCard("catalog", "signs")} />
          <FatCard cardData={SelectCard("catalog", "wine")} />
          <FatCard cardData={SelectCard("catalog", "misc")} />
          <FatCard cardData={SelectCard("catalog", "christmas")} />
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
