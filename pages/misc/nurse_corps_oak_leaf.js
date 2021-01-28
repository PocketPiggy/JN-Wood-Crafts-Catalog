import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function NurseCorpsOakLeaf() {
  const images = [
    {
      original: "/images/page/misc/navy_nurse_corps_fig_insignia/navy_nurse_insignia.jpg",
      thumbnail: "/images/page/misc/navy_nurse_corps_fig_insignia/thumbs/navy_nurse_insignia.jpg",
    },
    {
      original: "/images/page/misc/navy_nurse_corps_fig_insignia/navy_nurse_insignia1.jpg",
      thumbnail: "/images/page/misc/navy_nurse_corps_fig_insignia/thumbs/navy_nurse_insignia1.jpg",
    },
    {
      original: "/images/page/misc/navy_nurse_corps_fig_insignia/navy_nurse_insignia2.jpg",
      thumbnail: "/images/page/misc/navy_nurse_corps_fig_insignia/thumbs/navy_nurse_insignia2.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Nurse Corps Oak Leaf</h2>
        <div className="product-price">$30</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              The distinctive insignia of a single Oak Leaf for the Navy Nurse Corps.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Dimensions: 11" L x 7" W x 1/4" Thick</li>
              <li>Material: Baltic birch plywood</li>
              <li>Shipping and handling rates apply</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
