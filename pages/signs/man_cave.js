import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function Covid2020Ornament() {
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
        <h2 className="product-title">Man Cave</h2>
        <div className="product-price">$19.99</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Excepteur sint occaecat:</p>
            <ul>
              <li> cupidatat non proident </li>
              <li> sunt in culpa qui </li>
              <li> officia deserunt mollit anim id est laborum</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
