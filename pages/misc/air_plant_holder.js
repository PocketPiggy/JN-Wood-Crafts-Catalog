import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function AirPlantHolder() {
  const images = [
    {
      original: "/images/page/misc/airplantholder/IMG_9997.jpg",
      thumbnail: "/images/page/misc/airplantholder/thumbs/IMG_9997.jpg",
    },
    {
      original: "/images/page/misc/airplantholder/IMG_0006.jpg",
      thumbnail: "/images/page/misc/airplantholder/thumbs/IMG_0006.jpg",
    },
    {
      original: "/images/page/misc/airplantholder/IMG_0008.jpg",
      thumbnail: "/images/page/misc/airplantholder/thumbs/IMG_0008.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Air Plant Holder</h2>
        <div className="product-price">$5</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              A simple yet elegant design to display your air plant. Each piece
              is cut, sanded, stained/colored and sealed with a clear coat for
              protection.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li> Measurements: 5" x 5" x 2.25" </li>
              <li> Made out of 1/8" wood</li>
              <li> Hanger is not included</li>
              <li> Air plant is not included</li>
              <li>Shipping and handling rates apply</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
