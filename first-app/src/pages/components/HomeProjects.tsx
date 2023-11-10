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
              {/* <img src="dcat.jpg" alt=""></img> */}
              <Image
              src="/dcat.jpg"
              width={400}
              height={400}
              alt="dcat"
            />
              <div className="text">DCAT-AP</div>
              <p>#Project Details:<br></br></p>
              <p className='projects-p'>•Test case specification and development for DCAT-AP for a German partner (Bable GmbH).</p>
              <p className='projects-p'> •Testbed development for IoT Protocols based on FI-WARE.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              {/* <img src="portfolio.jpeg" alt=""></img> */}
              <Image
              src="/portfolio.jpeg"
              width={400}
              height={400}
              alt="portfolio"
            />
              <div className="text">Portfolio</div>
              <p className='projects-p'>#Project Details:- Personal Web Developer Portfolio.Technologies: JavaScript, React, Next.js</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              {/* <img src="trading.jpg" alt=""></img> */}
              <Image
              src="/trading.jpg"
              width={400}
              height={400}
              alt="me"
            />
              <div className="text">Newsletter and Trading Platform</div>
              <p  >#Project Details:</p>
              <p className='projects-p'>Successfully designed, developed,<br />
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
              {/* <img src="magento.png" alt=""></img> */}
              <Image
              src="/magento.png"
              width={400}
              height={400}
              alt="magento"
            />
              <div className="text">PHP Developer (initOS GmbH)</div>
              <p className="projects-p">#Project Details:</p>
              <p className="projects-p">Creating and Maintaining high
                quality PHP code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}