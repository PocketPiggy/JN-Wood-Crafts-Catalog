import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function WelcomeSign() {
  const images = [
    {
      original: "/images/page/signs/welcome/welcome.jpg",
      thumbnail: "/images/page/signs/welcome/thumbs/welcome.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Welcome</h2>
        <div className="product-price">$40</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              This welcome sign would be perfect for the living room or kitchen
              wall as well as looking great in your home's entryway. Makes a
              great housewarming gift. Please contact us for color
              customization.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information</p>
            <ul>
              <li>Measurement: 18" shiplap circle; 1/4"</li>
              <li>Welcome: 12" length; ¼"; cranberry color</li>
              <li>Shipping and handling rates apply</li>
            </ul>
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
