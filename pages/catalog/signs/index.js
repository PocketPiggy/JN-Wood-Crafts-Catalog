import Link from "next/link";
import Head from "next/head";
import Card from "../../../components/Card.js";
import SelectCard from "../../../components/SelectCard.js";

export default function SignCollection() {
  return (
    <>
      <Head>
        <title>JN Wood Crafts - Signs</title>
      </Head>
      <div className="page-content">
        <div className="logo-container">
          <img
            src="/images/logo/small-logo.png"
            alt="JN Wood Crafts logo."
            title="Veteran owned and operated."
          />
        </div>
        <h1 className="catalog-title">Signs</h1>
        <p className="catalog-category-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="cards-container">
          <Card cardData={SelectCard("signs", "monogram-shadow-box")} />
          <Card cardData={SelectCard("signs", "split-letter-monogram")} />
          <Card cardData={SelectCard("signs", "welcome")} />
          <Card cardData={SelectCard("signs", "man-cave")} />
          <Card cardData={SelectCard("signs", "parent-and-child")} />
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
