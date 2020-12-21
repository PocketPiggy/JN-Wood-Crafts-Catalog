import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function MonogramShadowBox() {
  const images = [
    {
      original: "/images/page/signs/monogram_shadow_box/IMG_0551.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/monogram_shadow_box/IMG_0548.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/monogram_shadow_box/IMG_0584.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/monogram_shadow_box/IMG_0586.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/monogram_shadow_box/IMG_0551.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/monogram_shadow_box/IMG_0536.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/monogram_shadow_box/IMG_0535.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/monogram_shadow_box/IMG_0421.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Monogram Shadow Box</h2>
        <div className="product-price">$65</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              This shadow box showcases the popular laser cut split letter
              monogram sign. The monogram letter can be personalized with a
              first OR last name of your choice. Each piece is cut, sanded,
              colored or stained, and sealed with a clear coat for protection.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Dimensions: 14" x 14""</li>
              <li>Monogram Sign made out ¼" wood</li>
              <li>Hard wood shadow box frame</li>
              <li>
                As this item is personalized and made to order, no refunds or
                exchanges are allowed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
