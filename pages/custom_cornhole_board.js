import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import Button from "react-bootstrap/Button";

export default function CustomCornholeBoard() {
  const images = [
    {
      original: "/images/page/cornhole/IMG_0371.jpg",
      thumbnail: "/images/page/cornhole/thumbs/IMG_0371.jpg",
    },
    {
      original: "/images/page/cornhole/IMG_0376.jpg",
      thumbnail: "/images/page/cornhole/thumbs/IMG_0376.jpg",
    },
    {
      original: "/images/page/cornhole/IMG_0379.jpg",
      thumbnail: "/images/page/cornhole/thumbs/IMG_0379.jpg",
    },
    {
      original: "/images/page/cornhole/IMG_0363.jpg",
      thumbnail: "/images/page/cornhole/thumbs/IMG_0363.jpg",
    },
    {
      original: "/images/page/cornhole/IMG_0365.jpg",
      thumbnail: "/images/page/cornhole/thumbs/IMG_0365.jpg",
    },
    {
      original: "/images/page/cornhole/IMG_0356.jpg",
      thumbnail: "/images/page/cornhole/thumbs/IMG_0356.jpg",
    },
    {
      original: "/images/page/cornhole/IMG_0325.jpg",
      thumbnail: "/images/page/cornhole/thumbs/IMG_0325.jpg",
    },
    {
      original: "/images/page/cornhole/IMG_0331.jpg",
      thumbnail: "/images/page/cornhole/thumbs/IMG_0331.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin.jpg",
      thumbnail: "/images/page/cornhole/thumbs/dolphin.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin1.jpg",
      thumbnail: "/images/page/cornhole/thumbs/dolphin1.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin2.jpg",
      thumbnail: "/images/page/cornhole/thumbs/dolphin2.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin3.jpg",
      thumbnail: "/images/page/cornhole/thumbs/dolphin3.jpg",
    },
    {
      original: "/images/page/cornhole/dolphin4.jpg",
      thumbnail: "/images/page/cornhole/thumbs/dolphin4.jpg",
    },
    {
      original: "/images/page/cornhole/ghog.jpg",
      thumbnail: "/images/page/cornhole/thumbs/ghog.jpg",
    },
    {
      original: "/images/page/cornhole/ghog1.jpg",
      thumbnail: "/images/page/cornhole/thumbs/ghog1.jpg",
    },
    {
      original: "/images/page/cornhole/ghog2.jpg",
      thumbnail: "/images/page/cornhole/thumbs/ghog2.jpg",
    },
    {
      original: "/images/page/cornhole/ghog3.jpg",
      thumbnail: "/images/page/cornhole/thumbs/ghog3.jpg",
    },
    {
      original: "/images/page/cornhole/shawn.jpg",
      thumbnail: "/images/page/cornhole/thumbs/shawn.jpg",
    },
    {
      original: "/images/page/cornhole/shawn1.jpg",
      thumbnail: "/images/page/cornhole/thumbs/shawn1.jpg",
    },
    {
      original: "/images/page/cornhole/shawn2.jpg",
      thumbnail: "/images/page/cornhole/thumbs/shawn2.jpg",
    },
    {
      original: "/images/page/cornhole/shawn3.jpg",
      thumbnail: "/images/page/cornhole/thumbs/shawn3.jpg",
    },
    {
      original: "/images/page/cornhole/shawn4.jpg",
      thumbnail: "/images/page/cornhole/thumbs/shawn4.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
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
