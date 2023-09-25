import React from "react";
import Image from "next/image";
import DownloadButton from "./DowloadCV";


export default function HomeAboutMe() {
  return (
    <section className="about" id="about">
    <div className="max-width">
      <h2 className="title">About Me</h2>
      <div className="about-content">
        <div className="column left">
         <Image 
         src={"webdev.svg"} 
         width={300}
         height={200}
         alt={""}         
         />
        </div>
        <div className="column right">
          <div className="text">I'm Dincher and I'm a Web Developer  <span className="typing-2"></span></div>
          <p>Seeking an entry-level opportunity with an esteemhance lfield of work. Capable of mastering new technologies.</p>
          <br></br>
          <div className="text">Why Work With Me</div>
          <p>I'm a great communicator & love to invest the necessary time to understand the customer's problem very well.</p>
          <a href="#" target="blank">Download CV</a>
        </div>
      </div>
    </div>
  </section>
  );
}