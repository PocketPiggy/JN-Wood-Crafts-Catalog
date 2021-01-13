import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function StainedGlassOrnament() {
  const images = [
    {
      original: "/images/page/christmas/stain_glass/IMG_0148.jpg",
      thumbnail: "/images/page/christmas/stain_glass/thumbs/IMG_0148.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Stain Glass Ornament</h2>
        <div className="product-price">$10</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              This is a mosaic nativity scene. It has been hand painted with top
              coat of liquid glass to emulate a stain glass look. Each ornament
              is made out of two layers. Each piece is cut, sanded, colored and
              sealed with a clear coat for protection.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product info:</p>
            <ul>
              <li>Dimensions: 4" round</li>
              <li>
                Made out of 1/4" wood for the backer and 1/8" wood for the top
                layer
              </li>
              <li>Shipping and handling rates apply</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
