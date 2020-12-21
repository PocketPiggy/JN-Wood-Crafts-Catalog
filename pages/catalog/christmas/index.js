import Link from "next/link";
import Head from "next/head";
import Card from "../../../components/Card.js";
import SelectCard from "../../../components/SelectCard.js";

export default function ChristmasCollection() {
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
        <h1 className="catalog-title"> Holidays </h1>
        <p className="catalog-category-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="cards-container">
          <Card
            cardData={SelectCard("christmas", "personalized-name-ornament")}
          />
          <Card cardData={SelectCard("christmas", "2020-covid-ornament")} />
          <Card cardData={SelectCard("christmas", "custom-state-ornament")} />
          <Card cardData={SelectCard("christmas", "diy-christmas-craft-kit")} />
        </div>
      </div>
    </>
  );
}
