import React from "react"
import { Link } from "gatsby"

import Vector from "../../images/bigdata-analytics/vector.png"
import { AppstoreOutlined, BookOutlined, CreditCardOutlined, EnvironmentOutlined, GlobalOutlined, HomeOutlined, LaptopOutlined, MedicineBoxOutlined, SettingOutlined, ShoppingCartOutlined, ShoppingOutlined, SmileOutlined, ToolOutlined } from "@ant-design/icons"

const IndustriesWeServe = () => {
  return (
    <>
      <div className="industries-serve-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Industries we cater to : </h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <MedicineBoxOutlined/>
                </div>
                Healthcare
                <Link to="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <ToolOutlined/>
                </div>
                Automobile
                <Link to="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <LaptopOutlined/>
                </div>
                Technology
                <Link to="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <BookOutlined/>
                </div>
                Education
                <Link to="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <CreditCardOutlined/>
                </div>
                Fintech
                <Link to="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <ShoppingCartOutlined/>
                </div>
                E-commerce
                <Link to="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <SmileOutlined/>
                </div>
                Hospitality
                <Link to="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <HomeOutlined/>
                </div>
                Real Estate
                <Link to="/service-details" className="link-btn"></Link>
              </div>
            </div>
            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <GlobalOutlined/>
                </div>
                Travel & Tourism
                <Link to="/service-details" className="link-btn"></Link>
              </div>
            </div>
            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <SettingOutlined/>
                </div>
                Manufacturing
                <Link to="/service-details" className="link-btn"></Link>
              </div>
            </div>
            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <ShoppingOutlined/>
                </div>
                FMCG
                <Link to="/service-details" className="link-btn"></Link>
              </div>
            </div>
            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <AppstoreOutlined/>
                </div>
                Agriculture
                <Link to="/service-details" className="link-btn"></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="analytics-shape2">
          <img src={Vector} alt="Vector" />
        </div>
      </div>
    </>
  )
}

export default IndustriesWeServe
