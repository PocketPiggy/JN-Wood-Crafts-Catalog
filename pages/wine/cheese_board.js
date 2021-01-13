import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function CheeseBoard() {
  const images = [
    {
      original: "/images/page/wine/cheeseboards/cheese_slicer.jpg",
      thumbnail: "/images/page/wine/cheeseboards/thumbs/cheese_slicer.jpg",
    },
    {
      original: "/images/page/wine/cheeseboards/cheese_slicer2.jpg",
      thumbnail: "/images/page/wine/cheeseboards/thumbs/cheese_slicer2.jpg",
    },
    {
      original: "/images/page/wine/cheeseboards/IMG_0697.jpg",
      thumbnail: "/images/page/wine/cheeseboards/thumbs/IMG_0697.jpg",
    },
    {
      original: "/images/page/wine/cheeseboards/IMG_0699.jpg",
      thumbnail: "/images/page/wine/cheeseboards/thumbs/IMG_0699.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Cheese Board</h2>
        <div className="product-price">$20</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Make the perfect gift for a wedding, anniversary, birthday,
              housewarming, or just as a surprise for the cook in your life.
            </p>
            <p>
              It will be finished with food safe cutting board oil for excellent
              protection (we do recommend that you reapply the oil as needed to
              protect the wood).
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>
                Blends of wood: Red oak, white oak, mahogany, cherry, maple,
                walnut, poplar
              </li>
              <li>Dimensions are approximately 9.5" x 4.5" x 3/4". </li>
              <li>
                Please note each item is handmade varying in dimensions as well
                as wood combinations.
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
