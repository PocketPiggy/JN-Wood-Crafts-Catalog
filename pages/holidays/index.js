import Link from "next/link";
import Head from "next/head";
import FatCard from "../../components/FatCard";
import SelectCard from "../../components/SelectCard";

export default function Holidays() {
  return (
    <>
      <Head>
        <title>JN Wood Crafts - Holidays</title>
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
          <h1> Holidays </h1>
        </div>
        <div className="fatcards-container-even">
          <FatCard cardData={SelectCard("catalog", "valentines")} />
          <FatCard cardData={SelectCard("catalog", "christmas")} />
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
