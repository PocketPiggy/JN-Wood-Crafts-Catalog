import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function WineBottleHolder() {
  const images = [
    {
      original: "/images/page/wine/wineholders/wine_holder.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/wine_holder.jpg",
    },
    {
      original: "/images/page/wine/wineholders/wine_holder_1.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/wine_holder_1.jpg",
    },
    {
      original: "/images/page/wine/wineholders/wine_holder2.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/wine_holder2.jpg",
    },
    {
      original: "/images/page/wine/wineholders/wine_holder3.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/wine_holder3.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Wine Bottle holder</h2>
        <div className="product-price">$20</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              We have created these unique, one-of-a-kind products that are hand
              sanded and hand finished. This is a perfect gift for a hostess or
              house warming. A simple yet tasteful decoration that looks great
              anywhere.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>
                Types of wood: Red oak, white oak, mahogany, cherry, maple,
                walnut, poplar
              </li>
              <li>
                Dimensions are approximately 9.5" x 5" x 3/4". Please note each
                item is handmade varying in dimensions as well as wood
                combinations.
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
