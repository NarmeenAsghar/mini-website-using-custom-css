import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div id="contact" className="contact">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-info">
        <div className="contact-item">
          <h3>Phone Number</h3>
          <a href="tel:+18001234567" className="contact-link">
            (021) 123-4567
          </a>
        </div>

        <div className="contact-item">
          <h3>Email Us</h3>
          <a href="mailto:Driveaura@yourwebsite.com" className="contact-link">
            DriveAura@yourwebsite.com
          </a>
        </div>

        <div className="contact-item">
          <h3>Visit Our Website</h3>
          <a
            href="https://www.Driveaura.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            www.DriveAura.com
          </a>
        </div>
      </div>

      <div>
        <h1 className="contact-title">Soical Media</h1>
        <div className="social-links">
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook.png" alt="Facebook" width="40" height="40" />
          </a>

          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/instagram.png" alt="Instagram" width="40" height="40" />
          </a>

          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/linkedin.png" alt="LinkedIn" width="40" height="40" />
          </a>
        </div>
      </div>
    </div>
  );
}
