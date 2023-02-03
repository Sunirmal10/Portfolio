import React, { useState } from "react";
import About from "./About";
import Contacts from "./Contacts";
import Projects from "./Projects";
import Footer from "./Footer";
import "./Home.css";
import Info from "./Info";
import * as Md from "react-icons/md";
import * as Fa from "react-icons/fa";
import * as Gr from "react-icons/gr";

function Home() {
  const [side, setside] = useState(false);

  return (
    <div className="home" id="home">
      <div className="navbar">
        <div className="logo">
          <a href="/">
            {" "}
            <span>{`<`}</span>SD<span>{`/>`}</span>
          </a>
        </div>
        <div className="right">
          <div className="itemlist">
            <div className="item">
              <a href="/">Home</a>
            </div>
            <div className="item">
              <a href="#about">About</a>
            </div>
            <div className="item">
              <a href="#pro">Projects</a>
            </div>
            <div className="item">
              <a href="#contact">Contact</a>
            </div>
            <div className="item resume">
              <a href="" download="SunirmalDasResume">
                Resume
              </a>
            </div>
          </div>
          <div className="bars" onClick={() => setside(true)}>
            <Fa.FaBars />
          </div>
          <div
            className="itembars"
            style={side ? { right: "0" } : { right: "-100vw" }}
          >
            <div className="close" onClick={() => setside(false)}>
              <Gr.GrClose />
            </div>
            <div className="item">
              <a href="/">Home</a>
            </div>
            <div className="item">
              <a href="#about">About</a>
            </div>
            <div className="item">
              <a href="#pro">Projects</a>
            </div>
            <div className="item">
              <a href="#contact">Contact</a>
            </div>
            <div className="item resume">
              <a href="" download="SunirmalDasResume">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="body">
        <div id="info">
          <Info />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="pro">
          <Projects />
        </div>
        <div id="contact">
          <Contacts />
        </div>
      </div>
      <div className="top">
        <a href="#home">
          <button className="topbtn">
            <Md.MdArrowUpward />
            Top
          </button>
        </a>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
