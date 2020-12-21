import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function CellPhoneHolder() {
  const images = [
    {
      original: "/images/page/misc/cellphoneholder/cell_phone_holder1.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/misc/cellphoneholder/cell_phone_holder.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/misc/cellphoneholder/cell_phone_holder2.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
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
            <li>Product Information: 6.5" h x 3.5"w x 4"w</li>
            <ul></ul>
          </div>
        </div>
      </div>
    </>
  );
}