import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function PersonalizedNameOrnamentSL() {
  const images = [
    {
      original:
        "/images/page/christmas/personalized_name_ornament_sl/IMG_0151.jpg",
      thumbnail:
        "/images/page/christmas/personalized_name_ornament_sl/thumbs/IMG_0151.jpg"
    }
    /*
    {
      original:
        "/images/page/christmas/personalized_name_ornament_sl/IMG_0152.jpg",
      thumbnail:
        "/images/page/christmas/personalized_name_ornament_sl/thumbs/IMG_0152.jpg",
    },
    */
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">
          Personalized Name ornament - Single Layer
        </h2>
        <div className="product-price">$7</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              This our original version of our popular Personalized Name
              Ornament. It's a single layer simple and elegant ornament. Each
              piece is cut, sanded, and sealed with a clear coat for protection.
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
