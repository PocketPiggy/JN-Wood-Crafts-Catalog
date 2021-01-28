import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import Button from "react-bootstrap/Button";

export default function CustomCornholeBoard() {
  const crafter = "Barb's Bead Designs";
  const images = [
    {
      original: "/images/page/crafters_showcase/beads_by_barb/beads_by_barb1.jpg",
      thumbnail: "/images/page/crafters_showcase/beads_by_barb/thumbs/beads_by_barb1.jpg",
    },
    {
      original: "/images/page/crafters_showcase/beads_by_barb/beads_by_barb2.jpg",
      thumbnail: "/images/page/crafters_showcase/beads_by_barb/thumbs/beads_by_barb2.jpg",
    },
    {
      original: "/images/page/crafters_showcase/beads_by_barb/beads_by_barb3.jpg",
      thumbnail: "/images/page/crafters_showcase/beads_by_barb/thumbs/beads_by_barb3.jpg",
    },
    {
      original: "/images/page/crafters_showcase/beads_by_barb/beads_by_barb4.jpg",
      thumbnail: "/images/page/crafters_showcase/beads_by_barb/thumbs/beads_by_barb4.jpg",
    },
    {
      original: "/images/page/crafters_showcase/beads_by_barb/beads_by_barb5.jpg",
      thumbnail: "/images/page/crafters_showcase/beads_by_barb/thumbs/beads_by_barb5.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} lazyLoad={true} />
        <h2 className="product-title">Crafter's Showcase</h2>
        <div className="product-price">
          <a href="https://www.facebook.com/BeadDesignsbyBarb">
            <Button className="btn-next" id="contact-quote-btn">
              Visit {crafter} website
            </Button>
          </a>
        </div>
        <div className="product-description-only-container">
          <div className="product-description">
            Here's are our latest Crafter's Showcase.
            Look at the beautiful tear drop earrings made with wooden pieces
            from us. Barbara is an amazing and talented designer.
            Please check out her gorgeous designs at {" "}
            <a href="https://www.facebook.com/BeadDesignsbyBarb">
              Bead Designs by Barb
            </a>.
          </div>
        </div>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
