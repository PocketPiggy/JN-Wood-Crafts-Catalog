import Link from "next/link";
import Head from "next/head";
import Card from "../../../components/Card.js";
import SelectCard from "../../../components/SelectCard.js";

export default function ValentinesCollection() {
  return (
    <>
      <Head>
        <title>JN Wood Crafts - Valentine's Day</title>
      </Head>
      <div className="page-content">
        <div className="logo-container">
          <img
            src="/images/logo/small-logo.png"
            alt="JN Wood Crafts logo."
            title="Veteran owned and operated."
          />
        </div>
        <h1 className="catalog-title"> Holidays </h1>
        <p className="catalog-category-description"></p>
        <div className="cards-container">
          <Card cardData={SelectCard("valentines", "mini-bottle-heart")} />
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
