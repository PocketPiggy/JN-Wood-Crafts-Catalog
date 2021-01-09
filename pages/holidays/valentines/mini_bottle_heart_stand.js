import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function MiniBottleHeartStand() {
  const images = [
    {
      original:
        "/images/page/valentines/mini_bottle_heart/Mini_Bottle_Heart_Stand.jpg",
      thumbnail:
        "/images/page/valentines/mini_bottle_heart/thumbs/Mini_Bottle_Heart_Stand.jpg",
    },
    {
      original:
        "/images/page/valentines/mini_bottle_heart/Mini_Bottle_Heart_Stand1.jpg",
      thumbnail:
        "/images/page/valentines/mini_bottle_heart/thumbs/Mini_Bottle_Heart_Stand1.jpg",
    },
    {
      original:
        "/images/page/valentines/mini_bottle_heart/Mini_Bottle_Heart_Stand2.jpg",
      thumbnail:
        "/images/page/valentines/mini_bottle_heart/thumbs/Mini_Bottle_Heart_Stand2.jpg",
    },
    {
      original:
        "/images/page/valentines/mini_bottle_heart/Mini_Bottle_Heart_Stand3.jpg",
      thumbnail:
        "/images/page/valentines/mini_bottle_heart/thumbs/Mini_Bottle_Heart_Stand3.jpg",
    },
    {
      original:
        "/images/page/valentines/mini_bottle_heart/Mini_Bottle_Heart_Stand4.jpg",
      thumbnail:
        "/images/page/valentines/mini_bottle_heart/thumbs/Mini_Bottle_Heart_Stand4.jpg",
    },
    {
      original:
        "/images/page/valentines/mini_bottle_heart/Mini_Bottle_Heart_Stand5.jpg",
      thumbnail:
        "/images/page/valentines/mini_bottle_heart/thumbs/Mini_Bottle_Heart_Stand5.jpg",
    },
    {
      original:
        "/images/page/valentines/mini_bottle_heart/Mini_Bottle_Heart_Stand6.jpg",
      thumbnail:
        "/images/page/valentines/mini_bottle_heart/thumbs/Mini_Bottle_Heart_Stand6.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Mini Bottle Heart Stand</h2>
        <div className="product-price">$10</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Looking for a way to give a gift of a 50ml bottle to a friend or a
              loved one? Comes fully assembled and painted, ready for you to add
              your own mini bottle. This mini bottle holder is designed as a
              split heart on a pedestal. Each piece is cut, sanded, and sealed
              with a clear coat for protection.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product info:</p>
            <ul>
              <li>Dimensions: 6" H x 5.5" W x 1.75" D</li>
              <li>
                {" "}
                Made out of 1/4" wood for the backer and 1/8" wood for the top
                layer
              </li>
              <li>Mini Bottle not included</li>
              <li>Shipping and handling rates apply</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
