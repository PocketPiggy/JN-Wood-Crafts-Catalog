import Link from "next/link";
import Head from "next/head";
import Button from "react-bootstrap/Button";
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
            Hi, we are James and Nancy. The "JN" behind the wood crafts. We are
            a veteran-owned and operated business. We offer items ranging from
            cornhole board sets to handcrafted signs, to laser cut items. Our
            products are the perfect personalized gifts for you, your friends,
            and your family. Currently, this is an informational catalog. Please
            fill out our contact form to get your order started.
          </p>
          <Link href="/contact" passHref>
            <Button className="btn-next" id="contact-quote-btn" name='contact-form'>
              Contact form
            </Button>
          </Link>
        </span>
        <div className="fatcards-container-even">
          <FatCard cardData={SelectCard("catalog", "whats-new")} />
          <FatCard cardData={SelectCard("catalog", "signs")} />
          <FatCard cardData={SelectCard("catalog", "wine")} />
          <FatCard cardData={SelectCard("catalog", "misc")} />
          <FatCard cardData={SelectCard("catalog", "holidays")} />
          <FatCard cardData={SelectCard("catalog", "cornhole")} />
        </div>
        <div className="fatcards-container-odd">
          <FatCard cardData={SelectCard("catalog", "crafters-showcase")} />
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
