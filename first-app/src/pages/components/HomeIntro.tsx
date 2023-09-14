import React from "react";

export default function IntroSection() {
  return (
    <section className="welcomeSection">
      <div className="container">
        <div className="content">
          <div className="about_me">
            <p>
              Welcome,
              <br />   
              I am Dincher Selimov, and I specialize in web development.
            </p>
            <div className="social-icons">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
          <div className="hero">
            <div className="social-links">
              <a href="#" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a target="_blank" href="https://twitter.com/DincherSel32807">
                <i className="fab fa-twitter"></i>
              </a>
              <a target="_blank" href="https://github.com/dincherselimov">
                <i className="fab fa-github"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/dincher-selimov-6b069b209/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
          </div>
          <div className="dinko">
            <img className="me" src="me.jpg" alt="" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
