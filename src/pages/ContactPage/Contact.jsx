import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9siw0h1", "template_9df11xl", form.current, {
        publicKey: "lvlVNQmGHQmupIY6k",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };
  return (
    <div className="contact-us background-color-components">
      <div className="contact-details">
        <h2 className="hero-item-title">Contact us</h2>
        <p>
          Need help? Want to get in touch? Our contact page provides easy ways
          to reach us. Feel free to send us an email &nbsp;
          <Link to="mailto:littlePetshop@gmail.com">
            littlePetshop@gmail.com
          </Link>
          , give us a call at &nbsp;
          <Link to="tel:+40774429524">+40 774 429 524 </Link>, or fill out our
          contact form.
        </p>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="email">Your e-mail:</label>
          <input
            className="form-pet-input"
            placeholder="john_smith@gmail.com"
            id="email"
            name="user_email"
            type="email"
            autoComplete="off"
          />
          <label htmlFor="name">Your name:</label>
          <input
            className="form-pet-input"
            placeholder="John Smith"
            id="name"
            type="name"
            name="user_name"
            autoComplete="off"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-pet-input"
            placeholder="Your message here"
            id="message"
            name="message"
            required=""
          ></textarea>
          <div className="contact-btn">
            <button className="search-btn" type="submit" value="Send">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
