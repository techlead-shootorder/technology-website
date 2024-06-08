import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

// Services Icon
import Icon1 from "../../images/bigdata-analytics/icon1.png"
import Icon2 from "../../images/bigdata-analytics/icon2.png"
import Icon3 from "../../images/bigdata-analytics/icon3.png"
import Icon4 from "../../images/bigdata-analytics/icon4.png"
import Icon5 from "../../images/bigdata-analytics/icon5.png"
import Icon6 from "../../images/bigdata-analytics/icon6.png"
import Rectangle from "../../images/bigdata-analytics/rectangle.png"

const Services = () => {
  return (
    <>
      <div className="bigdata-services-area ptb-80 bg-eef6fd">
        <div className="container">
          <div className="section-title">
            <h2>Our Services  </h2>
            <div className="bar"></div>
            <p>
              Re-image Applications with [Company name]. We develop robust and
              secure apps that provide seamless user experience and contribute
              to your business growth.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon1} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">
                    Data Analytics and Engineering{" "}
                  </Link>
                </h3>
                <p>
                  We at [Company name], help you unlock the potential of your
                  business through our Data Analytics and Engineering offerings.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon2} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">
                    Software Maintenance and Support {" "}
                  </Link>
                </h3>
                <p>
                  We support you 365 days a year in managing, improving, and
                  maintaining your apps. Our IT support and maintenance services
                  are designed to manage software maintenance proactively,
                  ensuring that it is bug-free upon release.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon3} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">
                    Quality Assurance and Testing{" "}
                  </Link>
                </h3>
                <p>
                  We offer top-tier quality assurance and testing services to
                  help you obtain precise quality insights. Our widespread
                  testing strategy includes API, regression, and accessibility
                  testing, ensuring superior software development.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon4} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">DevOps Services  </Link>
                </h3>
                <p>
                  Fast-track your cloud operations and capabilities by
                  minimizing costs, increasing productivity, and speeding up the
                  release management cycle with [Company name]’s DevOps
                  Services.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon5} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">
                    User Experience (UX) and User Interface (UI) Design
                  </Link>
                </h3>
                <p>
                  Transform your ideas into a seamless user experience with our
                  innovative UI & UX design services at [Company name], aimed at
                  delivering an excellent finished product on time.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon6} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">
                    Artificial Intelligence (AI) and Machine Learning (ML) {" "}
                  </Link>
                </h3>
                <p>
                  We at [Company name] harness the power of AI and ML to drive
                  innovation and help your business reach intelligent
                  automation. With our strategic and data-driven approach, we
                  can help evolve solutions right from process automation to
                  cognitive engagement, when systems work autonomously.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon6} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">
                    Internet of Things (IoT) Development 
                  </Link>
                </h3>
                <p>
                  Through [Company Name] experience custom IoT development
                  services that enable remote device management and intelligent
                  data analytics, all planned to meet your business needs. We
                  provide a wide range of IoT software development services,
                  including middleware engineering and IoT data pipeline
                  architecture, as well as the creation of sleek and functional
                  web and mobile applications for users of connected equipment.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon6} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Blockchain Development </Link>
                </h3>
                <p>
                  Our comprehensive range of blockchain development services
                  enables you to efficiently implement blockchain technology in
                  your firm. Whether you're beginning from scratch or
                  redesigning an existing system, our blockchain software
                  engineers thrive at developing highly skilled solutions that
                  are resilient, safe, and aligned with driving your business
                  objectives.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon6} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">
                    Enterprise Software Development   
                  </Link>
                </h3>
                <p>
                  We design and develop tailored-fit software systems that let
                  you handle all your key business data successfully on a single
                  platform. We help you acquire a competitive edge with our
                  tailored, innovative, agile, and scalable digital solutions.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
