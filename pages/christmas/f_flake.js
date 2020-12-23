import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function PersonalizedNameOrnament() {
  const images = [
    {
      original: "/images/page/christmas/f_flake/f_flake1.jpg",
      thumbnail: "/images/page/christmas/f_flake/thumbs/f_flake1.jpg",
    },
    {
      original: "/images/page/christmas/f_flake/f_flake2.jpg",
      thumbnail: "/images/page/christmas/f_flake/thumbs/f_flake2.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">F*** Flake</h2>
        <div className="product-price">$10</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product info:</p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>consectetur adipiscing elit</li>
              <li>eiusmod tempor incididunt </li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
