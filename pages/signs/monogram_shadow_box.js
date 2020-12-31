import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function MonogramShadowBox() {
  const images = [
    {
      original: "/images/page/signs/monogram_shadow_box/IMG_0551.jpg",
      thumbnail: "/images/page/signs/monogram_shadow_box/thumbs/IMG_0551.jpg",
    },
    {
      original: "/images/page/signs/monogram_shadow_box/IMG_0548.jpg",
      thumbnail: "/images/page/signs/monogram_shadow_box/thumbs/IMG_0548.jpg",
    },
    {
      original: "/images/page/signs/monogram_shadow_box/IMG_0584.jpg",
      thumbnail: "/images/page/signs/monogram_shadow_box/thumbs/IMG_0584.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Monogram Shadow Box</h2>
        <div className="product-price">$70</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              This shadow box showcases the popular laser-cut split letter
              monogram sign. The monogram letter is personalized with a first OR
              last name of your choice. Each monogram is cut, sanded, stained,
              and sealed with a clear coat for protection.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Dimensions: 14" x 14""</li>
              <li>Monogram Sign made out ¼" wood</li>
              <li>Hardwood shadow box frame</li>
              <li>1/8" Plexiglass</li>
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
