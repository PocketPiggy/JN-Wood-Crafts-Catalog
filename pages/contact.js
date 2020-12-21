import { useState } from "react";
import Head from "next/head";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";

export default function Contact() {
  const sendEmailToSelf = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          alert("Message sent!");
          //console.log(result.text);
        },
        (error) => {
          alert(
            "Uh oh. Something went wrong. Email me directly at jnwoodcrafts@gmail.com"
          );
          //console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <section className="scroll-block" id="block-1">
        <h1>Contact</h1>
        <p className="contact-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <a href="mailto:jnwoodcrafts@gmail.com">directly</a>. I respond
          usually within 1-2 days.
        </p>

        <div id="contact-form">
          <h3> Send us an email </h3>
          <form className="contact-form" onSubmit={sendEmailToSelf}>
            <input type="hidden" name="contact_number" />

            {/*}<label style={{display: 'none'}}>Name</label>{*/}
            <input
              type="text"
              name="Name"
              placeholder="Your Name)"
              className="contact-box"
            />

            {/*}<label>Email</label>{*/}
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="contact-box"
              required
            />

            {/*}<label>Message</label>{*/}
            <textarea
              name="Message"
              placeholder="Your message..."
              className="contact-message"
              required
            />

            <input type="submit" value="Send" className="contact-submit" />
          </form>
        </div>
      </section>

      <span className="buffy-the-buffer"></span>
    </>
  );
}
