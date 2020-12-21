import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function SplitLetterMonogram() {
  const images = [
    {
      original: "/images/page/signs/split_letter_monogram/monogram.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/split_letter_monogram/monogram1.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/split_letter_monogram/monogram2.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/split_letter_monogram/monogram3.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/split_letter_monogram/monogram4.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Split Letter Monogram</h2>
        <div className="product-price">$35</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              This sign is a laser engraved split monogram letter with a first
              OR last name of your choice. Each piece is cut, sanded, colored or
              stained, and sealed with a clear coat for protection.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Dimensions: 10.5" x 10.5"</li>
              <li>Made out ¼" wood</li>
              <li>No hanger provided</li>
              <li>
                As this item is personalized and made to order, no refunds or
                exchanges are allowed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
