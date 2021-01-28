import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function MagneticKnifeHolder() {
  const images = [
    {
      original: "/images/page/misc/custom_magnetic_knife_holder/mag_knife_holder.jpg",
      thumbnail: "/images/page/misc/custom_magnetic_knife_holder/thumbs/mag_knife_holder.jpg",
    },
    {
      original: "/images/page/misc/custom_magnetic_knife_holder/mag_knife_holder1.jpg",
      thumbnail: "/images/page/misc/custom_magnetic_knife_holder/thumbs/mag_knife_holder1.jpg",
    },
    {
      original: "/images/page/misc/custom_magnetic_knife_holder/mag_knife_holder2.jpg",
      thumbnail: "/images/page/misc/custom_magnetic_knife_holder/thumbs/mag_knife_holder2.jpg",
    },
    {
      original: "/images/page/misc/custom_magnetic_knife_holder/mag_knife_holder3.jpg",
      thumbnail: "/images/page/misc/custom_magnetic_knife_holder/thumbs/mag_knife_holder3.jpg",
    },
    {
      original: "/images/page/misc/custom_magnetic_knife_holder/mag_knife_holder4.jpg",
      thumbnail: "/images/page/misc/custom_magnetic_knife_holder/thumbs/mag_knife_holder4.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Magnetic Knife Holder</h2>
        <div className="product-price">$38</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Magnetic knife holder adds the warmth of natural wood to your kitchen or outdoor cooking space. Due to its powerful magnetic charge, your knives will stay in place and not slide off. Cutlery storage convenience, its sleek, modern, space-saving design saves valuable countertop and workbench space. It's sure to accent any kitchen decor. So simple to use, just attach it to a wall, the strong magnet grips a wide range of knives in all shapes and sizes. The knife holder comes with mounting hardware and easy to follow instructions.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Dimensions: 2" H x 4.5" W x 24" D</li> 
              <li>Weight: 4lbs</li> 
              <li>Material: Wood and strong magnetic bar</li>
                <li>Care & Cleaning: Wipe clean</li>
              <li>Product Information: 6.5"L x 3.5"W </li>
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
