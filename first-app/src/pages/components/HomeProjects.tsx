import React from 'react-dom';
import Image from "next/image";

export default function HomeProjects(){
    return(

      <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="carousel owl-carousel">
          <div className="card">
            <div className="box">
              <img src="dcat.jpg" alt=""></img>
              <div className="text">DCAT-AP</div>
              <p>#Project Details:<br></br></p>
              <p>•Test case specification and development for DCAT-AP for a German partner (Bable GmbH).</p>
              <p> •Testbed development for IoT Protocols based on FI-WARE.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="portfolio.jpeg" alt=""></img>
              <div className="text">Portfolio</div>
              <p>#Project Details:- Personal Web Developer Portfolio.Technologies: JavaScript, React, Next.js</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="trading.jpg" alt=""></img>
              <div className="text">Newsletter and Trading Platform</div>
              <p >#Project Details:</p>
              <p className='newsletter_text'>Successfully designed, developed,<br />
                and maintained a trading website <br />
                using WordPress. This project<br />
                showcased my ability to create<br />
                user-friendly and visually <br />
                appealing front-end interfaces. <br />
                Proficiently processed and <br />
                maintained user data within the
                trading platform, ensuring data
                integrity, security, and
                accessibility</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="magento.png" alt=""></img>
              <div className="text">PHP Developer (initOS GmbH)</div>
              <p>#Project Details:</p>
              <p>Creating and Maintaining high
                quality PHP code</p>
            </div>
          </div>
  
        </div>
      </div>
    </section>
    );
}