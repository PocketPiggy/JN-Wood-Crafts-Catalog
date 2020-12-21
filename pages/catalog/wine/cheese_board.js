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
      original: "/images/page/wine/cheeseboards/cheese_slicer1.jpg",
      thumbnail: "/images/page/wine/cheeseboards/thumbs/cheese_slicer1.jpg",
    },
    {
      original: "/images/page/wine/cheeseboards/cheese_slicer2.jpg",
      thumbnail: "/images/page/wine/cheeseboards/thumbs/cheese_slicer2.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Cheese Board</h2>
        <div className="product-price">$19.99</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Our cheese slicer is the perfect companion for our wine bottle
              holder.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>
                Types of wood: Red oak, white oak, mahogany, cherry, maple,
                walnut, poplar
              </li>
              <li>Dimensions are approximately 9.5" x 4.5" x 3/4". </li>
              <li>
                Please note each item is handmade varying in dimensions as well
                as wood combinations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
