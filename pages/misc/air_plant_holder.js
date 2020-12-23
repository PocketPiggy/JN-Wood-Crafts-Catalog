import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function AirPlantHolder() {
  const images = [
    {
      original: "/images/page/misc/airplantholder/IMG_0006.jpg",
      thumbnail: "/images/page/misc/airplantholder/thumbs/IMG_0006.jpg",
    },

    {
      original: "/images/page/misc/airplantholder/IMG_0008.jpg",
      thumbnail: "/images/page/misc/airplantholder/thumbs/IMG_0008.jpg",
    },
    {
      original: "/images/page/misc/airplantholder/IMG_9997.jpg",
      thumbnail: "/images/page/misc/airplantholder/thumbs/IMG_9997.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Cell Phone Holder</h2>
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
              <li> Measurement: *** </li>
              <li> Made out of 1/8" wood</li>
              <li> Hanger is not provided</li>
              <li> Air plant is not provided</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
