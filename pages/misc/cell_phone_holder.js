import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function CellPhoneHolder() {
  const images = [
    {
      original: "/images/page/misc/cellphoneholder/cell_phone_holder1.jpg",
      thumbnail:
        "/images/page/misc/cellphoneholder/thumbs/cell_phone_holder1.jpg",
    },
    {
      original: "/images/page/misc/cellphoneholder/cell_phone_holder2.jpg",
      thumbnail:
        "/images/page/misc/cellphoneholder/thumbs/cell_phone_holder2.jpg",
    },
    {
      original: "/images/page/misc/cellphoneholder/IMG_0551.jpg",
      thumbnail: "/images/page/misc/cellphoneholder/thumbs/IMG_0551.jpg",
    },
    {
      original: "/images/page/misc/cellphoneholder/IMG_0597.jpg",
      thumbnail: "/images/page/misc/cellphoneholder/thumbs/IMG_0597.jpg",
    },
    {
      original: "/images/page/misc/cellphoneholder/IMG_0598.jpg",
      thumbnail: "/images/page/misc/cellphoneholder/thumbs/IMG_0598.jpg",
    },
    {
      original: "/images/page/misc/cellphoneholder/IMG_0599.jpg",
      thumbnail: "/images/page/misc/cellphoneholder/thumbs/IMG_0599.jpg",
    },
    {
      original: "/images/page/misc/cellphoneholder/IMG_0790.jpg",
      thumbnail: "/images/page/misc/cellphoneholder/thumbs/IMG_0790.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Cell Phone Holder</h2>
        <div className="product-price">$20</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Our simple, yet elegant cell phone holders can be used at work,
              school, home, etc. and can be slipped easily into your handbag,
              backpack, and whipped out at any time when needed. Made of 1/4"
              thick wood that is stylishly designed, stable, and portable. It
              allows your phone to stand horizontally or vertically for easy
              viewing. A perfect gift choice for anyone who has a cell phone!
              Customize one today!
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Product Information: 6.5"L x 3.5"W </li>
              <li>
                As this item is customized and made to order, no refunds or
                exchanges are allowed.
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
