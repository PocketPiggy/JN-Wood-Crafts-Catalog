import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function DualNameSign() {
  const images = [
    {
      original: "/images/page/signs/parent_and_child/parent_child1.jpg",
      thumbnail: "/images/page/signs/parent_and_child/thumbs/parent_child1.jpg",
    },
    {
      original: "/images/page/signs/parent_and_child/parent_child.jpg",
      thumbnail: "/images/page/signs/parent_and_child/thumbs/parent_child.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Dual Name Sign</h2>
        <div className="product-price">$25</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Let us create something that is customized for your parent/child
              or grandparent/grandchild or husband/wife. The possibilities are
              endless.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Backboard dimensions: ***</li>
              <li>Dual name portion ¼" wood</li>
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
