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
      original: "/images/page/misc/cellphoneholder/cell_phone_holder.jpg",
      thumbnail:
        "/images/page/misc/cellphoneholder/thumbs/cell_phone_holder.jpg",
    },
    {
      original: "/images/page/misc/cellphoneholder/cell_phone_holder2.jpg",
      thumbnail:
        "/images/page/misc/cellphoneholder/thumbs/cell_phone_holder2.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Cell Phone Holder</h2>
        <div className="product-price">$19.99</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Cell Phone Holder with an initial. Can be personalized with name
              or saying.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Product Information: 6.5" h x 3.5"w x 4"w</li>
              <li>
                As this item is personalized and made to order, no refunds or
                exchanges are allowed TO As this item is customized and made to
                order, no refunds or exchanges are allowed.
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
