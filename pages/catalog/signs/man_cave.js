import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function ManCave() {
  const images = [
    {
      original: "/images/page/signs/man_cave/MAN_CAVE.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/man_cave/MAN_CAVE1.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/man_cave/MAN_CAVE2.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "/images/page/signs/man_cave/MAN_CAVE3.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">Man Cave</h2>
        <div className="product-price">$45</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              The perfect gift for the Man Cave..... This can be personalized
              with any icon.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li> Dimensions: 15" x 11 1/2"</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
