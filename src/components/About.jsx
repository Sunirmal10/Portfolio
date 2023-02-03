import React from "react";

function About() {
  return (
    <div className="about">
      <span className="aboutheader">About Me...</span>
      <div className="aboutwrapper">
        {/* <div className="image">
          <img
            className="propic"
            src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
            style={{ width: "12rem", height: "10rem" }}
          alt="" />
        </div> */}
        <div className="aboutbody">
          <p>
            {" "}
            Hi, My name is <span className="name">Sunirmal Das</span>, and I am
            a C.E. B.Tech graduate from{" "}
            <span className="collage">
              Techno International New Town, Kolkata (Formerly known as Techno
              India Collage of Technology).
            </span>{" "}
            I have worked for the past 2 years in my professional domain, and
            currently looking to switch, and make a career in web development.
          </p>
          <p>
            I have done my schooling from{" "}
            <span className="school">
              Aditya Academy Sr. Secondary, Kolkata
            </span>
            . Some of my interests are-{" "}
            <span className="interests">
              sports, music, bicycling, and reading.
            </span>
          </p>
          <p>
            I have always had a keen interest in programming which drove me to
            persue my passion of web development. I'm a highly motivated and
            skilled engineering graduate looking for an entry-level position as
            a software/front-end engineer.
          </p>
          <div className="skills">
            <span className="skillhead">My skills-</span>
            <div className="skillitems">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>ReactJs</li>
                <li>Node.js</li>
                <li>Express Basics</li>
                <li>MongoDB</li>
                <li>SQL Basics</li>
                <li>REST API</li>
                <li>Bootstrap Basics</li>
                <li>jQuery Basics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
