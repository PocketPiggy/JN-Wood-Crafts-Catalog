import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function CedarPlankCatchOfTheDay() {
  const images = [
    {
      original: "/images/page/misc/cedar_plank_cotd/IMG_0840.jpg",
      thumbnail: "/images/page/misc/cedar_plank_cotd/thumbs/IMG_0840.jpg",
    },
    {
      original: "/images/page/misc/cedar_plank_cotd/IMG_0844.jpg",
      thumbnail: "/images/page/misc/cedar_plank_cotd/thumbs/IMG_0844.jpg",
    },
    {
      original: "/images/page/misc/cedar_plank_cotd/IMG_0846.jpg",
      thumbnail: "/images/page/misc/cedar_plank_cotd/thumbs/IMG_0846.jpg",
    },
    {
      original: "/images/page/misc/cedar_plank_cotd/IMG_0847.jpg",
      thumbnail: "/images/page/misc/cedar_plank_cotd/thumbs/IMG_0847.jpg",
    },
    {
      original: "/images/page/misc/cedar_plank_cotd/IMG_0848.jpg",
      thumbnail: "/images/page/misc/cedar_plank_cotd/thumbs/IMG_0848.jpg",
    },
    {
      original: "/images/page/misc/cedar_plank_cotd/IMG_0849.jpg",
      thumbnail: "/images/page/misc/cedar_plank_cotd/thumbs/IMG_0849.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Cedar Plank - Catch of the Day</h2>
        <div className="product-price">$15 for 3</div>
        <div className="product-description-container">
          <div className="product-description">
            <p></p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Large Cedar Planks - 7"W x 15"L</li>
              <li>
                3/8" thick but not so thick that it wastes wood, and not so thin
                that the planks burn-up before the food is cooked
              </li>
              <li>
                Fits: 1 large salmon filet Shrimp Assorted varieties of fish or
                vegetables
              </li>
              <li>
                100% Natural - No Chemicals All of the grilling planks products
                are obtained from an official Cedar Plank Online Vendor that I
                personally use to perfect the Salmon I make on the grill!
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
