import React from "react";
import About from "./About";
import Interests from "./Interests";

const Content = () => {
  return (
    <>
      <div className="content-card">
        <div className="card-header">
          <h1 className="name">Hi, I'm Kirsten</h1>
          <h2 className="job-desc">Frontend Developer</h2>
          <a
            href="https://kirstencochrane.com"
            target="_blank"
            rel="noopener noreferrer"
            className="website">
            {" "}
            https://www.kirstencochrane.com
          </a>
        </div>

        <div className="buttons">
          <a href="mailto:kirsten.cochrane@outlook.com" className="mail-btn">
            <img src="./assets/mail.png" alt="" />
            Email
          </a>
          <a
            href="http://linked.com/in/kmcochrane"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn">
            <img src="./assets/linkedin.png" alt="" />
            LinkedIn
          </a>
        </div>
        <About />
        <Interests />
      </div>
    </>
  );
};

export default Content;
