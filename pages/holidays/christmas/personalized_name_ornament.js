import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function PersonalizedNameOrnament() {
  const images = [
    {
      original:
        "/images/page/christmas/personalized_name_ornament/IMG_0596.jpg",
      thumbnail:
        "/images/page/christmas/personalized_name_ornament/thumbs/IMG_0596.jpg",
    },
        {
      original:
        "/images/page/christmas/personalized_name_ornament/IMG_0154.jpg",
      thumbnail:
        "/images/page/christmas/personalized_name_ornament/thumbs/IMG_0154.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Personalized Name ornament</h2>
        <div className="product-price">$10</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              When looking for new ornaments to add to your collection, why not
              go for a wooden look? Our personalized wooden Christmas ornaments
              will go great with all the other ornaments on your tree! Customize
              one or two for yourself, a friend, or a family member today! Each
              ornament is made out of two layers. The top layer is clear coat
              protection with a black backer. Each piece is cut, sanded, and
              sealed with a clear coat for protection.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product info:</p>
            <ul>
              <li>Dimensions: 4" round</li>
              <li> Made out of 1/4" wood</li>
              <li>
                Customized saying is limited to 15 characters (including spaces)
              </li>
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
