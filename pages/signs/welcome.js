import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function Welcome() {
  const images = [
    {
      original: "/images/page/signs/welcome/IMG_9594.jpg",
      thumbnail: "/images/page/signs/welcome/thumbs/IMG_9594.jpg",
    },
    {
      original: "/images/page/signs/welcome/IMG_9595.jpg",
      thumbnail: "/images/page/signs/welcome/thumbs/IMG_9595.jpg",
    },
    {
      original: "/images/page/signs/welcome/IMG_9596.jpg",
      thumbnail: "/images/page/signs/welcome/thumbs/IMG_9596.jpg",
    },
    {
      original: "/images/page/signs/welcome/IMG_9597.jpg",
      thumbnail: "/images/page/signs/welcome/thumbs/IMG_9597.jpg",
    },
    {
      original: "/images/page/signs/welcome/IMG_9600.jpg",
      thumbnail: "/images/page/signs/welcome/thumbs/IMG_9600.jpg",
    },
    {
      original: "/images/page/signs/welcome/welcome.jpg",
      thumbnail: "/images/page/signs/welcome/thumbs/welcome.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Welcome</h2>
        <div className="product-price">$40</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>Perfect for the front door or hanging on your wall.</p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information</p>
            <ul>
              <li>Measurement: 18" shiplap circle; 1/4"</li>
              <li>Welcome: 12" length; ¼"; cranberry color</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
