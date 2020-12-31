import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function ManCave() {
  const images = [
    {
      original: "/images/page/signs/man_cave/MAN_CAVE.jpg",
      thumbnail: "/images/page/signs/man_cave/thumbs/MAN_CAVE.jpg",
    },
    {
      original: "/images/page/signs/man_cave/MAN_CAVE1.jpg",
      thumbnail: "/images/page/signs/man_cave/thumbs/MAN_CAVE1.jpg",
    },
    {
      original: "/images/page/signs/man_cave/MAN_CAVE2.jpg",
      thumbnail: "/images/page/signs/man_cave/thumbs/MAN_CAVE2.jpg",
    },
    {
      original: "/images/page/signs/man_cave/MAN_CAVE3.jpg",
      thumbnail: "/images/page/signs/man_cave/thumbs/MAN_CAVE3.jpg",
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
              This custom-made wooden sign is the perfect birthday or holiday
              gift for dads, husbands, or brothers who spend time in their man
              cave. Choose an offered activity symbol, it will be the talk of
              all who see it.
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li> Dimensions: 15" x 11 1/2"</li>
              <li>
                As this item is personalized and made to order, no refunds or
                exchanges are allowed TO As this item is customized and made to
                order, no refunds or exchanges are allowed.
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
