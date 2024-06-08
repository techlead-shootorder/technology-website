import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarStyleFour from "../components/_App/NavbarStyleFour"
import MainBanner from "../components/BigdataAnalytics/MainBanner"
import WhatWeDo from "../components/BigdataAnalytics/WhatWeDo"
import DiscoverArea from "../components/BigdataAnalytics/DiscoverArea"
import Services from "../components/BigdataAnalytics/Services"
import TeamStyleTwo from "../components/Common/TeamStyleTwo"
import BigdataFunFacts from "../components/BigdataAnalytics/BigdataFunFacts"
import Feedback from "../components/BigdataAnalytics/Feedback"
import IndustriesWeServe from "../components/BigdataAnalytics/IndustriesWeServe"
import BlogPost from "../components/BigdataAnalytics/BlogPost"
import NewsletterStyleTwo from "../components/Common/NewsletterStyleTwo"
import Footer from "../components/_App/Footer"
import OurFeatures from "../components/Features/OurFeatures"
import Faqs from '../components/faq/Faqs'
import TrialNavbar from '../components/_App/TrialNavbar'

const BigdataAnalyticsHomePage = () => (
  <Layout>
    <NavbarStyleFour />
    {/* <TrialNavbar/> */}
    <MainBanner />
    <WhatWeDo />
    {/* <OurFeatures /> */}
    <DiscoverArea />
    <Services />
    {/* <TeamStyleTwo /> */}
    {/* <BigdataFunFacts /> */}
    <Feedback />
    <Faqs/>
    <IndustriesWeServe />
    <BlogPost />
    <NewsletterStyleTwo />
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Bigdata Analytics" />

export default BigdataAnalyticsHomePage
