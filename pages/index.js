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
          <h1> Merchandise </h1>
        </div>
        <span className="welcome-text">
          <p>
            Hi, we are James and Nancy. The JN behind the wood crafts. We are a
            veteran-owned and operated business. We offer items from cornhole
            board sets to handcrafted signs to laser cut items. Our products are
            the perfect personalized gifts for your friends and family.
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
