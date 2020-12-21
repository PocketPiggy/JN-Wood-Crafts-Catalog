import Link from "next/link";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>JN Wood Crafts - Catalog</title>
      </Head>
      <div className="page-content">
        <div className="logo-container">
          <img
            src="/images/logo/small-logo.png"
            alt="JN Wood Crafts logo."
            title="Veteran owned and operated."
          />
        </div>
        <div className="landing-page-header">
          <h1> Lorem ipsum dolor </h1>
        </div>
        <span className="welcome-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
            nulla pharetra diam sit amet nisl suscipit adipiscing bibendum.
            Egestas sed sed risus pretium quam vulputate dignissim suspendisse
            in. Blandit aliquam etiam erat velit scelerisque in.
          </p>
          <p>
            Congue eu consequat ac felis donec et. Nunc mi ipsum faucibus vitae
            aliquet nec ullamcorper sit. Lacus sed viverra tellus in hac. Neque
            convallis a cras semper auctor neque vitae. Sem et tortor consequat
            id porta nibh. Purus faucibus ornare suspendisse sed nisi lacus.
            Sapien nec sagittis aliquam malesuada.
          </p>
          <p>
            Tortor aliquam nulla facilisi cras fermentum odio. Donec adipiscing
            tristique risus nec feugiat in fermentum posuere urna. Non quam
            lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Id
            neque aliquam vestibulum morbi blandit cursus risus. Mauris vitae
            ultricies leo integer malesuada nunc.
          </p>

          <p>
            Pulvinar mattis nunc sed blandit libero volutpat sed. Maecenas
            ultricies mi eget mauris. Amet tellus cras adipiscing enim eu turpis
            egestas pretium. Duis convallis convallis tellus id interdum velit
            laoreet id donec. Integer feugiat scelerisque varius morbi enim nunc
            faucibus a pellentesque. Euismod elementum nisi quis eleifend quam
            adipiscing. Sagittis nisl rhoncus mattis rhoncus urna neque viverra
            justo. Mauris commodo quis imperdiet massa. Sagittis purus sit amet
            volutpat consequat mauris nunc congue. Elit scelerisque mauris
            pellentesque pulvinar pellentesque habitant. Consequat semper
            viverra nam libero justo laoreet sit amet. Dictum varius duis at
            consectetur. Arcu cursus euismod quis viverra nibh cras pulvinar
            mattis nunc. Odio tempor orci dapibus ultrices in iaculis nunc sed
            augue. Adipiscing elit duis tristique sollicitudin nibh sit amet
            commodo. Ultricies mi eget mauris pharetra.
          </p>
        </span>
        <span className="buffy-the-buffer" />
      </div>
    </>
  );
}
