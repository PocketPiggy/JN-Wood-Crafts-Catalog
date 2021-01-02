import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import Button from "react-bootstrap/Button";

export default function CustomCornholeBoard() {
  const images = [
    {
      original: "/images/page/cornhole/dolphin/dolphin.jpg",
      thumbnail: "/images/page/cornhole/dolphin/thumbs/dolphin.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin/dolphin1.jpg",
      thumbnail: "/images/page/cornhole/dolphin/thumbs/dolphin1.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin/dolphin2.jpg",
      thumbnail: "/images/page/cornhole/dolphin/thumbs/dolphin2.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin/dolphin3.jpg",
      thumbnail: "/images/page/cornhole/dolphin/thumbs/dolphin3.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin/dolphin4.jpg",
      thumbnail: "/images/page/cornhole/dolphin/thumbs/dolphin4.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin/dolphin5.jpg",
      thumbnail: "/images/page/cornhole/dolphin/thumbs/dolphin5.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin/dolphin6.jpg",
      thumbnail: "/images/page/cornhole/dolphin/thumbs/dolphin6.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin/dolphin7.jpg",
      thumbnail: "/images/page/cornhole/dolphin/thumbs/dolphin7.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin/dolphin8.jpg",
      thumbnail: "/images/page/cornhole/dolphin/thumbs/dolphin8.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin/dolphin9.jpg",
      thumbnail: "/images/page/cornhole/dolphin/thumbs/dolphin9.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin/dolphin10.jpg",
      thumbnail: "/images/page/cornhole/dolphin/thumbs/dolphin10.jpg",
    },
    {
      original: "/images/page/cornhole/pirate/pirate.jpg",
      thumbnail: "/images/page/cornhole/pirate/thumbs/pirate.jpg",
    },
    {
      original: "/images/page/cornhole/pirate/pirate1.jpg",
      thumbnail: "/images/page/cornhole/pirate/thumbs/pirate1.jpg",
    },
    {
      original: "/images/page/cornhole/pirate/pirate2.jpg",
      thumbnail: "/images/page/cornhole/pirate/thumbs/pirate2.jpg",
    },
    {
      original: "/images/page/cornhole/pirate/pirate3.jpg",
      thumbnail: "/images/page/cornhole/pirate/thumbs/pirate3.jpg",
    },
    {
      original: "/images/page/cornhole/pirate/pirate4.jpg",
      thumbnail: "/images/page/cornhole/pirate/thumbs/pirate4.jpg",
    },
    {
      original: "/images/page/cornhole/pirate/pirate5.jpg",
      thumbnail: "/images/page/cornhole/pirate/thumbs/pirate5.jpg",
    },
    {
      original: "/images/page/cornhole/pirate/pirate6.jpg",
      thumbnail: "/images/page/cornhole/pirate/thumbs/pirate6.jpg",
    },
    {
      original: "/images/page/cornhole/pirate/pirate7.jpg",
      thumbnail: "/images/page/cornhole/pirate/thumbs/pirate7.jpg",
    },
    {
      original: "/images/page/cornhole/pirate/pirate8.jpg",
      thumbnail: "/images/page/cornhole/pirate/thumbs/pirate8.jpg",
    },
    {
      original: "/images/page/cornhole/pirate/pirate9.jpg",
      thumbnail: "/images/page/cornhole/pirate/thumbs/pirate9.jpg",
    },
    {
      original: "/images/page/cornhole/pirate/pirate10.jpg",
      thumbnail: "/images/page/cornhole/pirate/thumbs/pirate10.jpg",
    },
    {
      original: "/images/page/cornhole/wash/wash.jpg",
      thumbnail: "/images/page/cornhole/wash/thumbs/wash.jpg",
    },
    {
      original: "/images/page/cornhole/wash/wash1.jpg",
      thumbnail: "/images/page/cornhole/wash/thumbs/wash1.jpg",
    },
    {
      original: "/images/page/cornhole/wash/wash2.jpg",
      thumbnail: "/images/page/cornhole/wash/thumbs/wash2.jpg",
    },
    {
      original: "/images/page/cornhole/wash/wash3.jpg",
      thumbnail: "/images/page/cornhole/wash/thumbs/wash3.jpg",
    },
    {
      original: "/images/page/cornhole/wash/wash4.jpg",
      thumbnail: "/images/page/cornhole/wash/thumbs/wash4.jpg",
    },
    {
      original: "/images/page/cornhole/wash/wash5.jpg",
      thumbnail: "/images/page/cornhole/wash/thumbs/wash5.jpg",
    },
    {
      original: "/images/page/cornhole/wash/wash6.jpg",
      thumbnail: "/images/page/cornhole/wash/thumbs/wash6.jpg",
    },
    {
      original: "/images/page/cornhole/wash/wash7.jpg",
      thumbnail: "/images/page/cornhole/wash/thumbs/wash7.jpg",
    },
    {
      original: "/images/page/cornhole/wash/wash8.jpg",
      thumbnail: "/images/page/cornhole/wash/thumbs/wash8.jpg",
    },
    {
      original: "/images/page/cornhole/samurai/samurai.jpg",
      thumbnail: "/images/page/cornhole/samurai/thumbs/samurai.jpg",
    },
    {
      original: "/images/page/cornhole/samurai/samurai1.jpg",
      thumbnail: "/images/page/cornhole/samurai/thumbs/samurai1.jpg",
    },
    {
      original: "/images/page/cornhole/samurai/samurai2.jpg",
      thumbnail: "/images/page/cornhole/samurai/thumbs/samurai2.jpg",
    },
    {
      original: "/images/page/cornhole/samurai/samurai3.jpg",
      thumbnail: "/images/page/cornhole/samurai/thumbs/samurai3.jpg",
    },
    {
      original: "/images/page/cornhole/samurai/samurai4.jpg",
      thumbnail: "/images/page/cornhole/samurai/thumbs/samurai4.jpg",
    },
    {
      original: "/images/page/cornhole/samurai/samurai5.jpg",
      thumbnail: "/images/page/cornhole/samurai/thumbs/samurai5.jpg",
    },
    {
      original: "/images/page/cornhole/samurai/samurai6.jpg",
      thumbnail: "/images/page/cornhole/samurai/thumbs/samurai6.jpg",
    },
    {
      original: "/images/page/cornhole/samurai/samurai7.jpg",
      thumbnail: "/images/page/cornhole/samurai/thumbs/samurai7.jpg",
    },
    {
      original: "/images/page/cornhole/samurai/samurai8.jpg",
      thumbnail: "/images/page/cornhole/samurai/thumbs/samurai8.jpg",
    },
    {
      original: "/images/page/cornhole/greenhog/greenhog.jpg",
      thumbnail: "/images/page/cornhole/greenhog/thumbs/greenhog.jpg",
    },
    {
      original: "/images/page/cornhole/greenhog/greenhog1.jpg",
      thumbnail: "/images/page/cornhole/greenhog/thumbs/greenhog1.jpg",
    },
    {
      original: "/images/page/cornhole/greenhog/greenhog2.jpg",
      thumbnail: "/images/page/cornhole/greenhog/thumbs/greenhog2.jpg",
    },
    {
      original: "/images/page/cornhole/greenhog/greenhog3.jpg",
      thumbnail: "/images/page/cornhole/greenhog/thumbs/greenhog3.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} lazyLoad={true} />
        <h2 className="product-title">Customized Cornhole Board Set</h2>
        <div className="product-price">
          <Link href="/contact" passHref>
            <Button className="btn-next" id="contact-quote-btn">
              Click here to request a quote
            </Button>
          </Link>
        </div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Ever thought about getting a set of Cornhole Boards? If so, why
              not get boards that are made with the highest quality
              craftsmanship!  They can be used for a tournament as well as
              fierce backyard gameplay! I have had positive comments from people
              who say, "these boards are too good to play on!" Our boards are a
              unique difference!  No doubt, you will impress your friends, with
              a one-of-a-kind customized board from JN Wood Crafts!  They are
              constructed with birch plywood and designed with cross beams to
              support the legs, as well as a built-in compartment to house all
              your bags and other related items.
            </p>
            <p>
              So, whether you're looking for wedding reception entertainment,
              family get-together fun, company picnic/BBQ, waiting around with
              friends/family during a half time sporting event, or you simply
              want to play America's favorite backyard game, browse our handy
              work and contact us for your own customized set, today!
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Dimensions: 24" W x 48" L x 4" H</li>
              <li>Wood type: Birch plywood and common board </li>
              <li>LED lights with remote</li>
              <li>Eight corn bags with a box compartment with lid to house all bags</li>
              <li>Comes with a 27 ft regulation cable</li>
              <li>Two carry handles and 4 stainless steel side latches</li>
              <li>Customized wooden embellishments of your choice on tops, bottom and comparment box lid</li>
              <li>
                As this item is customized and made to order, no refunds or
                exchanges are allowed.
              </li>
              <li>Local orders/pickup only</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
