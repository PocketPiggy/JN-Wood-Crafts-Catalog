import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function WineBottleHolder() {
  const images = [
    {
      original: "/images/page/wine/wineholders/wine_holder.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/wine_holder.jpg",
    },
    {
      original: "/images/page/wine/wineholders/wine_holder_1.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/wine_holder_1.jpg",
    },
    {
      original: "/images/page/wine/wineholders/wine_holder2.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/wine_holder2.jpg",
    },
    {
      original: "/images/page/wine/wineholders/wine_holder3.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/wine_holder3.jpg",
    },
    {
      original: "/images/page/wine/wineholders/IMG_0704.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/IMG_0704.jpg",
    },
    {
      original: "/images/page/wine/wineholders/IMG_0707.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/IMG_0707.jpg",
    },
    {
      original: "/images/page/wine/wineholders/IMG_0710.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/IMG_0710.jpg",
    },
    {
      original: "/images/page/wine/wineholders/IMG_0711.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/IMG_0711.jpg",
    },
    {
      original: "/images/page/wine/wineholders/IMG_0712.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/IMG_0712.jpg",
    },
    {
      original: "/images/page/wine/wineholders/IMG_0714.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/IMG_0714.jpg",
    },
    {
      original: "/images/page/wine/wineholders/IMG_0715.jpg",
      thumbnail: "/images/page/wine/wineholders/thumbs/IMG_0715.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Wine Bottle Holder</h2>
        <div className="product-price">$25</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Our wine bottle holders are certainly an eye-catcher! They are a
              great way to display your favorite wine! Whether it's your
              favorite wine of the month, hosting a dinner party, or get
              together, our wine bottle holders turn regular wine into a piece
              of art! These make excellent gifts for weddings, anniversaries,
              bridal showers, hostess, and housewarming; an ideal family home
              décor accent piece. Why NOT get one for yourself!
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>
                Blends of wood: Red oak, white oak, mahogany, cherry, maple,
                walnut, poplar
              </li>
              <li>
                Dimensions are approximately 9.5" x 5" x 3/4". Please note each
                item is handmade varying in dimensions as well as wood
                combinations.
              </li>
              <li>Shipping and handling rates apply</li>
              <li>NOTE: WINE NOT INCLUDED</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
