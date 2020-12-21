import Link from "next/link";
import Head from "next/head";
import Card from "../../../components/Card.js";
import SelectCard from "../../../components/SelectCard.js";

export default function MiscellaneousCollection() {
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
        <h1> stuff</h1>
        <p>askdfjlasdfjkasdkjf</p>
        <div className="cards-container">
          <Card cardData={SelectCard("misc", "cell-phone-holder")} />
          <Card cardData={SelectCard("misc", "air-plant-holder")} />
          <Card cardData={SelectCard("misc", "essential-oils-15ml")} />
          <Card cardData={SelectCard("misc", "essential-oils-5ml")} />
        </div>
      </div>
    </>
  );
}
