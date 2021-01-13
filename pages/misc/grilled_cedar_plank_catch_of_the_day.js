import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

export default function GrilledCedarPlankCatchOfTheDay() {
  const images = [
    {
      original: "/images/page/misc/grilled_cedar_plank_cotd/IMG_0840.jpg",
      thumbnail:
        "/images/page/misc/grilled_cedar_plank_cotd/thumbs/IMG_0840.jpg",
    },
    {
      original: "/images/page/misc/grilled_cedar_plank_cotd/IMG_0844.jpg",
      thumbnail:
        "/images/page/misc/grilled_cedar_plank_cotd/thumbs/IMG_0844.jpg",
    },
    {
      original: "/images/page/misc/grilled_cedar_plank_cotd/IMG_0846.jpg",
      thumbnail:
        "/images/page/misc/grilled_cedar_plank_cotd/thumbs/IMG_0846.jpg",
    },
    {
      original: "/images/page/misc/grilled_cedar_plank_cotd/IMG_0847.jpg",
      thumbnail:
        "/images/page/misc/grilled_cedar_plank_cotd/thumbs/IMG_0847.jpg",
    },
    {
      original: "/images/page/misc/grilled_cedar_plank_cotd/IMG_0848.jpg",
      thumbnail:
        "/images/page/misc/grilled_cedar_plank_cotd/thumbs/IMG_0848.jpg",
    },
    {
      original: "/images/page/misc/grilled_cedar_plank_cotd/IMG_0849.jpg",
      thumbnail:
        "/images/page/misc/grilled_cedar_plank_cotd/thumbs/IMG_0849.jpg",
    },
  ];
  return (
    <>
      <Head></Head>
      <div className="page-content">
        <ImageGallery items={images} />
        <h2 className="product-title">
          Grilled Cedar Plank - Catch of the Day
        </h2>
        <div className="product-price">3 for $15</div>
        <div className="product-description-container">
          <div className="product-description">
            <p>
              Ever thought about using Cedar Planks to add smoke flavor to your
              grilled food?  Grocery & specialty stores sell generic planks, but
              with our planks, you can "customize" a Cedar Plank with the "name"
              of your Husband, boyfriend, family member, or pretty much anyone
              who loves to BBQ with our Catch of the Day Planks!
            </p>
            <p>
              These all-natural cedar grilling planks add a delicious smoky
              flavor to lamb chops, grilled veggies, shrimp, or salmon.
              Spaciously sized for larger cuts of food, they're an excellent
              option for family cookouts, casual tailgating events, and more. A
              much easier way to add a smoky flavor to your grilled food without
              using wood chips or chunks. It's very easy to do and use. Just
              simply soak in water for 15-30 minutes, heat on the grill, then
              cook food atop the plank.  Perfect for use outdoors on gas or
              charcoal grills
            </p>
          </div>
          <div className="product-list-container">
            <p className="product-list-title">Product information:</p>
            <ul>
              <li>Large Cedar Planks - 7"W x 15"L</li>
              <li>
                3/8" thick but not so thick that it wastes wood, and not so thin
                that the planks burn-up before the food is cooked
              </li>
              <li>
                Fits:
                <ul>
                  <li>1 large salmon filet </li>
                  <li>Shrimp</li>
                  <li>Assorted varieties of fish or vegetables </li>
                </ul>
              </li>
              <li>
                100% Natural - No Chemicals All of the grilling planks products
                are obtained from an official Cedar Plank Online Vendor that I
                personally use to perfect the Salmon I make on the grill!
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
