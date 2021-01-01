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
      <div className="page-content">
        <div className="logo-container">
          <img
            src="/images/logo/small-logo.png"
            alt="JN Wood Crafts logo."
            title="Veteran owned and operated."
          />
        </div>

        <div className="landing-page-header">
          <h1>Contact</h1>
        </div>
        <span className="welcome-text">
          <p className="contact-text">
            We're here to help and answer any question you might have. We look
            forward to hearing from you. To contact us please fill out the form
            below or contact us directly at
            <a href="mailto:jnwoodcrafts@gmail.com?subject=JNWOOD CRAFTS - PRODUCT INQUIRY"> jnwoodcrafts@gmail.com</a>
            {" "}Reply responses are usually within one business day.
          </p>
        </span>

        <div id="contact-form">
          <span className="send-email-header">
            <h3> Send us an email </h3>
          </span>
          <form className="contact-form" onSubmit={sendEmailToSelf}>
            <input type="hidden" name="contact_number" />

            {/*}<label style={{display: 'none'}}>Name</label>{*/}
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
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
        <span className="buffy-the-buffer"></span>
      </div>
    </>
  );
}
