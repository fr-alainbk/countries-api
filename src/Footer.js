import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        © {currentYear} Copyright - Coded by{" "}
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/franckbinde/"
          target="_blank"
        >
          Franck Binde
        </a>
        , FullStack Developer
      </p>
      {/* <p>Privacy | Terms | Sitemap | Company Details</p> */}
    </div>
  );
}

export default Footer;
