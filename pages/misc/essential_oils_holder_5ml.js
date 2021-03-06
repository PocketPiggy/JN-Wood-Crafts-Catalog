import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function EssentialOilHolder5ml() {
  const images = [
    {
      original: "/images/page/misc/essentialoils15ml/IMG_0009.jpg",
      thumbnail: "/images/page/misc/essentialoils15ml/thumbs/IMG_0009.jpg",
    },
    {
      original: "/images/page/misc/essentialoils15ml/IMG_0010.jpg",
      thumbnail: "/images/page/misc/essentialoils15ml/thumbs/IMG_0010.jpg",
    },
    {
      original: "/images/page/misc/essentialoils15ml/IMG_0011.jpg",
      thumbnail: "/images/page/misc/essentialoils15ml/thumbs/IMG_0011.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Essential Oils Holder - 5ml</h2>
        <div className="product-price">$10</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              A perfect gift for any fan of essential oils. This beautiful laser
              cut oil organizer holds 5 of your favorite essential oils. Each
              piece is cut, sanded, and sealed with a clear coat for protection.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title"> Product Information: </p>
            <ul>
              <li>Dimensions: 8"L x 2.5"W x 2.5"H </li>
              <li>
                This stand will hold 5 standard 5ml essential oil bottles.
              </li>
              <li>
                Shipping and handling rates apply
              </li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
