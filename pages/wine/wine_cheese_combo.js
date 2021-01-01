import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function WineCheeseCombo() {
  const images = [
    {
      original: "/images/page/wine/winecheesecombo/IMG_0701.jpg",
      thumbnail: "/images/page/wine/winecheesecombo/thumbs/IMG_0701.jpg",
    },
    {
      original: "/images/page/wine/winecheesecombo/IMG_0703.jpg",
      thumbnail: "/images/page/wine/winecheesecombo/thumbs/IMG_0703.jpg",
    },
    {
      original: "/images/page/wine/winecheesecombo/IMG_0716.jpg",
      thumbnail: "/images/page/wine/winecheesecombo/thumbs/IMG_0716.jpg",
    },
    {
      original: "/images/page/wine/winecheesecombo/IMG_0694.jpg",
      thumbnail: "/images/page/wine/winecheesecombo/thumbs/IMG_0694.jpg",
    },
    {
      original: "/images/page/wine/winecheesecombo/IMG_0691.jpg",
      thumbnail: "/images/page/wine/winecheesecombo/thumbs/IMG_0691.jpg",
    }
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Wine & Cheese Combo</h2>
        <div className="product-price">$40</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              We are offering our two best sellers together as a combo deal. You
              will receive a wine bottle holder & a cheese board slicer.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>
                Blends of wood: Red oak, white oak, mahogany, cherry, maple,
                walnut, poplar
              </li>
              <li>Shipping and handling rates apply</li>
              <li>NOTE: WINE NOT INCLUDED</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
