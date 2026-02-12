import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          {/* LEFT SIDE */}
          <div className="contact-left">
            <h1 className="contact-title">Let's Connect</h1>

            <p className="contact-description">
              I am a B.Tech student at <strong>MIT-WPU, Pune</strong>. I am always
              open to discussing new projects, creative ideas, or opportunities
              to be part of impactful work.
            </p>

            <div className="contact-info">
              <p>📧 {contactInfo.email_address}</p>
              <p>📞 +91 {contactInfo.number}</p>
              <p>📍 Pune, India</p>
            </div>

            <SocialMedia />
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="contact-card">
            <h2>Send a Message</h2>

            <form
              className="contact-form"
              action="https://formspree.io/f/xnjbpdok"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
}
