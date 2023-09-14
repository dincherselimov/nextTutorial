import React from "react-dom";

export default function HomeSkills() {
  return (
    <section className="skills" id="skills">
      <div className="max-width_skills">
        <h2 className="title">My Skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">INTERNSHIP</div>
            <ul>
              <li className="intern">#Company Name "Where You work"</li>
              <li className="intern">#Company Name "Where You work"</li>
              <li className="intern">#Company Name "Where You work"</li>
            </ul>

            <div className="text">PROJECT</div>

            <ul>
              <li className="project">Portfolio (HTML, CSS, js, Bootstraps)</li>
              <li className="project">
                eCommerce Website (Shopify liquid-code, HTML, CSS)
              </li>
              <li className="project">
                QuickShop - eCommerce Website (Like Amazon, Flipkart etc.)
              </li>
              <li className="project">
                Fully Responsive Design Email Subscribe form
              </li>
              <li className="project">Blog (HTML, CSS, Bootstraps)</li>
              <li className="project">
                Currently Working on a Messaging App (Like WhatsApp)
              </li>
            </ul>

            <div className="text">DEVELOPMENT SKILLS</div>

            <p>
              I'm familiar & work on a daily basis with HTML, CSS, JavaScript,
              Bootstrap, React js and other modern frameworks.
            </p>
            <a href="https://aistechx.com/" target="blank">
              Get Educate...
            </a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>PHP</span>
                <span>70%</span>
              </div>
              <div className="line python"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>99%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>70%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JavaScript</span>
                <span>40%</span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>NextJS</span>
                <span>50%</span>
              </div>
              <div className="line bootstraps"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Java</span>
                <span>40%</span>
              </div>
              <div className="line django"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
