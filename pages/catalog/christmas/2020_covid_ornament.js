import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function Covid2020Ornament() {
  const images = [
    {
      original: "/images/page/christmas/2020_covid_ornament/ornament2020.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">2020 Covid Ornament</h2>
        <div className="product-price">$7</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Hmmmm, it's been a crazy year for all and here's an ornament for
              it....
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Production Information: </p>
            <ul>
              <li>Dimensions: 4" round</li>
              <li>Made out of 1/8" thick wood</li>
              <li>
                {" "}
                Each piece is cut, sanded, and sealed with a clear coat for
                protection.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
