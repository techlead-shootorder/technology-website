import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

const faq = () => {
  return (
    <div>
      <div className="faq-area ptb-80">
        <div className="container">
          <h1 className="text-center">Frequently Asked Questions</h1>
          <div className="faq-accordion">
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>
                      Do you provide ongoing support and maintenance after the
                      website is launched?{" "}
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, we do provide ongoing support and maintenance after the
                    website is launched. This includes bug fixes, software
                    updates, security patches, and content updates.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What is the cost of web development services? </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The cost of the services depends on various factors such as
                    the scope of work, timeline, complexity of the work etc.
                    Kindly reach out to us with your requirements so that we can
                    provide you with a proposal fitted for you.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>
                      How do I choose the right web development company for my
                      project?
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    While choosing a web development company consider factors
                    such as experience, expertise, client testimonials etc.,
                    Also discussing your requirements upfront will help you to
                    make a decision.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>How long does it take to develop a website? </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The time taken to develop a web application depends on
                    various factors, such as the complexity of the webpage,
                    features, functionalities, design, and development approach
                    etc., Simple web applications may take a few weeks to
                    develop, while more complex projects might take several
                    months or longer.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Can you redesign or update existing web apps? </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, we do work on existing web apps to increase their
                    performance, usability and overall user experience.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="f">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>
                      Can you integrate third-party services or APIs into our
                      web app?{" "}
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, we do integrate third-party services and APIs into your
                    web app to enhance the functionality of the app.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default faq
