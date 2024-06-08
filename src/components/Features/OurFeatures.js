import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

const OurFeatures = () => {
  return (
    <>
      <div className="features-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>
              Take Your Online Presence To The Next Level With Our Expert Web
              Development Services{" "}
            </h2>
            <div className="bar"></div>
            <p>
              At [Company Name], we've got you covered when it comes to web
              development. Whether you are a start-up or an established
              organization, we are here to make your ideas into reality. Our
              team of talented designers and developers develop responsive and
              custom web applications and also make sure that your website not
              only performs well but is also user-friendly. We are always
              up-to-date with the latest technologies and the best industry
              practices to make sure your website shines in the heavily
              competitive digital landscape. Our team is well-versed in a wide
              range of technology stacks, ensuring we create exceptional
              websites: Whether your project demands the flexibility of a MEAN
              stack, the robustness of a LAMP stack, or the simplicity of a JAM
              stack architecture, we have the proficiency to deliver it.{" "}
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon">
                  <Icon.Settings />
                </div>
                <h3>
                  <Link to="/feature-details">Web Consultation Services </Link>
                </h3>
                <p>
                  We access your business and provide expert advice to help you
                  make informed decisions and help you choose suitable
                  solutions.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>
                  <Link to="/feature-details">Website Design </Link>
                </h3>
                <p>
                  We design the layout, user interface, visual appeal, and user
                  experience of a website to ensure it is aesthetically
                  pleasing, easy to navigate, and aligned with your brand’s
                  identity.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Grid />
                </div>
                <h3>
                  <Link to="/feature-details">Front-end Development </Link>
                </h3>
                <p>
                  This entails using HTML, CSS, JavaScript, and also various
                  front-end frameworks to create visual and interactive elements
                  on the website that the users interact with directly.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Info />
                </div>
                <h3>
                  <Link to="/feature-details">Back-end Development </Link>
                </h3>
                <p>
                  Using technologies such as PHP, Python, Ruby and Node.js we
                  work on the server-side of the website.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Box />
                </div>
                <h3>
                  <Link to="/feature-details">Website Optimization</Link>
                </h3>
                <p>
                  We optimize websites to enhance their performance, speed and
                  search engine optimization. Our tailored optimization
                  strategies make sure your web application delivers an
                  exceptional user experience and ranks higher in search
                  results.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link to="/feature-details">E-commerce Development </Link>
                </h3>
                <p>
                  We also specialize in developing captivating E-commerce
                  solutions that help drive your sales and engage customers to
                  uplift your business.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link to="/feature-details">
                    Content Management System (CMS){" "}
                  </Link>
                </h3>
                <p>
                  We excel in building dynamic CMS that helps you to
                  effortlessly manage your website’s content. Our CMS solutions
                  provide adaptability, scalability and user–friendly interfaces
                  for easy content update and publishing.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link to="/feature-details">
                    Website Maintenance and Support
                  </Link>
                </h3>
                <p>
                  From regular updates to troubleshooting issues, our support
                  system ensures your web application runs smoothly and
                  securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurFeatures
