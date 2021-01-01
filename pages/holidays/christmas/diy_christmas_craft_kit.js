import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function DiyChristmasCraftKit() {
  const images = [
    {
      original: "/images/page/christmas/diy_christmas_craft_kit/DIY_kits.jpg",
      thumbnail:
        "/images/page/christmas/diy_christmas_craft_kit/thumbs/DIY_kits.jpg",
    },
    {
      original: "/images/page/christmas/diy_christmas_craft_kit/DIY_kits1.jpg",
      thumbnail:
        "/images/page/christmas/diy_christmas_craft_kit/thumbs/DIY_kits1.jpg",
    },
    {
      original: "/images/page/christmas/diy_christmas_craft_kit/DIY_kits2.jpg",
      thumbnail:
        "/images/page/christmas/diy_christmas_craft_kit/thumbs/DIY_kits2.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">DIY Christmas Craft Kit</h2>
        <div className="product-price">$3 for 1 / $15 for 6</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Get ready for the holidays with our laser cut family friendly DYI
              craft kits. We are offering six different designs (one reindeer
              design; two snow people designs; and three snow globe designs)
              Each design can be personalized with a kiddo's name of it.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Production Information: </p>
            <ul>
              <li>Height: 5"</li>
              <li> Made with1/4" wood</li>
              <li>NO PAINT OR BRUSHES ARE INCLUDED</li>
              <li>
                As this item is customized and made to order, no refunds or
                exchanges are allowed.
              </li>
              <li>
                Shipping and handling rates apply
              </li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
