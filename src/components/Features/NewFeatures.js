import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

const NewFeatures = () => {
  return (
    <div className="features-area pt-80 pb-50 bg-f9f6f6">
      <div className="container">
        <div className="row justify-content-center gap-2">
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex flex-column align-items-center justify-content-center">
            <h2>
              Take Your Online Presence To The Next Level With Our Expert Web
              Development Services{" "}
            </h2>
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
          <div className="col-lg-5 col-md-5 col-sm-12 ">
            <div className="faq-accordion">
              <Accordion allowZeroExpanded preExpanded={["a"]}>
                <AccordionItem uuid="a">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Web Consultation Services</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We access your business and provide expert advice to help
                      you make informed decisions and help you choose suitable
                      solutions.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="b">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Website Design </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We design the layout, user interface, visual appeal, and
                      user experience of a website to ensure it is aesthetically
                      pleasing, easy to navigate, and aligned with your brand’s
                      identity.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="c">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Front-end Development</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      This entails using HTML, CSS, JavaScript, and also various
                      front-end frameworks to create visual and interactive
                      elements on the website that the users interact with
                      directly.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="d">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Back-end Development </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Using technologies such as PHP, Python, Ruby and Node.js
                      we work on the server-side of the website.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="e">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Website Optimization</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We optimize websites to enhance their performance, speed
                      and search engine optimization. Our tailored optimization
                      strategies make sure your web application delivers an
                      exceptional user experience and ranks higher in search
                      results.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="f">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>E-commerce Development</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We also specialize in developing captivating E-commerce
                      solutions that help drive your sales and engage customers
                      to uplift your business.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="f">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Content Management System (CMS) </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We excel in building dynamic CMS that helps you to
                      effortlessly manage your website’s content. Our CMS
                      solutions provide adaptability, scalability and
                      user–friendly interfaces for easy content update and
                      publishing.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="f">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Website Maintenance and Support</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      From regular updates to troubleshooting issues, our
                      support system ensures your web application runs smoothly
                      and securely.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewFeatures
