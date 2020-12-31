import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function CustomStateOrnament() {
  const images = [
    {
      original:
        "/images/page/christmas/custom_state_ornament/ornament_first_xmas_TN.jpg",
      thumbnail:
        "/images/page/christmas/custom_state_ornament/thumbs/ornament_first_xmas_TN.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Custom State ornament</h2>
        <div className="product-price">$20</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              This personalized state ornament is laser engraved with your
              choice of state and customized saying such as, "First Christmas
              In" as shown in the example. Each piece is cut, sanded and sealed
              with a clear coat for protection.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Dimensions: 4" round</li>
              <li>Made out of 1/4" wood</li>
              <li>
                Customized saying is limited to 20 characters (including spaces)
              </li>
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
