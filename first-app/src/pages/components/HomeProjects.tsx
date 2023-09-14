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
              <img src="https://source.unsplash.com/720x600/?shopping" alt=""></img>
              <div className="text">Ecommerce</div>
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="https://source.unsplash.com/720x600/?portfolio" alt=""></img>
              <div className="text">Portfolio</div>
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="https://source.unsplash.com/720x600/?blog" alt=""></img>
              <div className="text">Blog</div>
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="https://source.unsplash.com/720x600/?messanger" alt=""></img>
              <div className="text">Messaging App</div>
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="https://source.unsplash.com/720x600/?app-clone" alt=""></img>
              <div className="text">Clone</div>
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="https://source.unsplash.com/720x600/?code,demo" alt=""></img>
              <div className="text">Demo</div>
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}