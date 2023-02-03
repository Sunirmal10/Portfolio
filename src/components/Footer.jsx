import React from "react";
import "./Home.css";
import * as Fa from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footerbody">
      <div className="socials">
        Socials:{" "}
        <a href="https://github.com/Sunirmal10" target="_blank">
          <Fa.FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sunirmal-das-a420a4205/"
          target="_blank"
        >
          <Fa.FaLinkedinIn />
        </a>
        <div className="gmail">| Gmail: sunirmald1996@gmail.com</div>
      </div>
      <div className="footnote">
        <span className="foot">© {year} | Made by Sunirmal Das</span>
      </div>
    </div>
  );
}

export default Footer;
