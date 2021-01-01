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
        <h2 className="product-title">Custom Cornhole board Set</h2>
        <div className="product-price">Message for a quote </div>
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
              Needs a different more personalized product description like the
              other products you guys did yesterday.
            </p>
            <p>
              Each set includes a pair of corn hole boards; eight (8) bags; a
              set of LED hole lights; a set of handles for easy carry; a 27 ft
              regulation cable for accurate positioning; a set of customized top
              board wraps of your choosing, set up scoreboard/drink holders,
              score board/drink holder and customized wooden embellishments.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Dimensions: X" x Y" x Z"</li>
              <li>Wood type: Some wood type if needed</li>
              <li>LED lights with remote</li>
              <li>Eight corn bags</li>
              <li>Comes with a 27 ft regulation cable</li>
              <li>And some other things that the set comes with</li>
              <li>
                As this item is customized and made to order, no refunds or
                exchanges are allowed.
              </li>
              <li>Local orders/pickup only (change this verbage?)</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
