import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function ParentAndChild() {
  const images = [
    {
      original: "/images/page/signs/parent_and_child/parent_child1.jpg",
      thumbnail: "/images/page/signs/parent_and_child/thumbs/parent_child1.jpg"
    },
    {
      original: "/images/page/signs/parent_and_child/parent_child.jpg",
      thumbnail: "/images/page/signs/parent_and_child/thumbs/parent_child.jpg"
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Parent & Child</h2>
        <div className="product-price">$20</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Just in time for the holidays or just because....we can create
              something personalized for you or your loved one.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Width: 1/4"</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
