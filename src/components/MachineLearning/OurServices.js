import React from "react"
import { Link } from "gatsby"

// Service Images
import ServiceImage1 from "../../images/services-image/service-image1.png"
import ServiceImage2 from "../../images/services-image/service-image2.png"
import ServiceImage3 from "../../images/services-image/service-image3.png"
import ServiceImage4 from "../../images/services-image/service-image4.png"
import ServiceImage5 from "../../images/services-image/service-image5.png"
import ServiceImage6 from "../../images/services-image/service-image6.png"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const OurServices = () => {
  return (
    <>
      <div className="ml-services-area ptb-80">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Solutions</span>
            <h2>Our Services</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage1} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">AI/ML Model Development </Link>
                </h3>
                <p>
                  <b>Predictive Analytics:</b> We anticipate your demand and
                  adjust inventory levels accordingly. We also assist you in
                  evaluating potential threats and developing appropriate
                  mitigation solutions.
                </p>
                <p>
                  <b>Natural Language Processing (NLP):</b> We develop
                  techniques to evaluate your data and extract valuable insights
                  from it. Our skilled specialists assist you in creating a
                  smooth interplay between computer systems and human language.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage2} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">AI/ML Integration </Link>
                </h3>
                <p>
                  <b>Chatbot Development: </b> Chatbots are wonderful tools for
                  system communications. Our dynamic team creates intelligent
                  bots and virtual assistants that understand and respond to
                  your customer queries.
                </p>
                <p>
                  <b>Recommendation Systems: </b> By understanding the
                  customer's purchasing habits, interests, preferences, and
                  similarities to other users to propose relevant products and
                  boost cross-sell/up-sell chances.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage3} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">Computer Vision </Link>
                </h3>
                <p>
                  We leverage technology to help with image recognition and
                  object detection that would help customers capture and upload
                  an image of a product they are interested in and find similar
                  items.
                </p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage4} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">Security & Surveillance</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage5} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">Automatic Optimization</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage6} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">Data Analysts</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default OurServices
