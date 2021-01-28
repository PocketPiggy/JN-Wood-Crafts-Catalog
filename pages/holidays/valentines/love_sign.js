import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function LoveSign() {
  const images = [
    {
      original:
        "/images/page/valentines/family_love_sign/love_sign.jpg",
      thumbnail: "/images/page/valentines/family_love_sign/thumbs/love_sign.jpg",
    },
    {
      original:
        "/images/page/valentines/family_love_sign/love_sign1.jpg",
      thumbnail: "/images/page/valentines/family_love_sign/thumbs/love_sign1.jpg",
    },
    {
      original:
        "/images/page/valentines/family_love_sign/love_sign2.jpg",
      thumbnail: "/images/page/valentines/family_love_sign/thumbs/love_sign2.jpg",
    }
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Love Sign</h2>
        <div className="product-price">$15</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Show your love for this Valentines or anytime with this very simple, creative, unique and decorative design for you, your family and friends. It is sure to warm many hearts this Valentine's Day. The Valentine table decor can also freshen up bookshelves, table centerpiece, office desks, counter top decoration, and so on.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product info:</p>
            <ul>
              <li>Dimensions: 7" x 5" </li>
              <li>Made out of 1/4" wood </li>
              <li>Each heart can contained a customized saying or name limited to 10 characters (including spaces).  </li>
              <li>Each design can accommodate up to six (6) hearts.</li>
              <li>As this item is customized and made to order, no refunds or exchanges are allowed. </li>
              <li>Shipping and handling rates apply</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
