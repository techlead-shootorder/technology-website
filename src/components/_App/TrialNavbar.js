// import React from "react"
// import { Link } from "gatsby"
// import { Menu, Dropdown, Space, Tag} from "antd"
// import { DownOutlined } from "@ant-design/icons"
// import Logo from "../../images/logo-white.png"
// import Typography from "antd/es/typography/Typography"

// const MegaMenu = () => {
//   return (
//     <>
//       <Menu
//         items={[
//           {
//             label: "Service",
//             key: "home",
//             children: [
//               {
//                 label: <Mega />,
//                 key: "Megamenu",
//                 style: {
//                   height: "fit-content",
//                 },
//               },
//             ],
//           },
//         ]}
//       ></Menu>
//     </>
//   )
// }
// const Mega = () => {
//   return (
//     <>
//       <div className="pt-3 p-3">
//         {/* <Typography.Title>Website Making</Typography.Title> */}
//         {/* <Tag color="red">Sale 50% Off</Tag> */}
//         <Space direction="horizontal">
//           <Menu
//             items={[
//               {
//                 label: "Mobile",
//                 key: "mobile",
//                 type: "group",
//               },
//               {
//                 label: "App Development ",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//             ]}
//           />
//           <Menu
//             items={[
//               {
//                 label: "Web",
//                 key: "web",
//                 type: "group",
//                 style:{
//                     fontWeight: "bold",
//                     fontSize: "20px"
//                 }
//               },
//               {
//                 label: "Web Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//             ]}
//           />
//           <Menu
//             items={[
//               {
//                 label: "Emerging Technologies",
//                 key: "tech",
//                 type: "group",
//               },
//               {
//                 label: "Web Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//               {
//                 label: "App Development",
//                 key: "app-development",
//               },
//             ]}
//           />
//         </Space>
//       </div>
//     </>
//   )
// }

// const NavbarStyleFour = () => {
//   return (
//     <header
//       id="header"
//       className="headroom navbar-color-white navbar-style-four"
//     >
//       <div className="startp-nav">
//         <div className="container">
//           <nav className="navbar navbar-expand-md navbar-light">
//             <Link to="/" className="navbar-brand">
//               <img src={Logo} alt="logo" />
//             </Link>

//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Dropdown
//                   overlay={<MegaMenu />}
//                   trigger={["hover"]}
//                   placement="bottomCenter"
//                 >
//                   <Link to="#" className="nav-link">
//                     services
//                   </Link>
//                 </Dropdown>
//               </li>
//               <li className="nav-item">
//                 <Link to="/about" className="nav-link">
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/contact" className="nav-link">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default NavbarStyleFour

import React from "react"
import { Link } from "gatsby"
import "./MegaMenu.css" // Create this CSS file to style the mega menu

const MegaMenu = ({ toggleNavbar }) => {
  return (
    <li className="nav-item dropdown mega-dropdown">
      <Link
        to="#"
        onClick={e => e.preventDefault()}
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
      >
        Services
      </Link>
      <div className="dropdown-menu mega-menu">
        <div className="container">
          <div className="row">
            {/* Mobile Section */}
            <div className="col-md-4">
              <h5 className="dropdown-header">Mobile</h5>
              <ul className="list-unstyled">
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <b>App Development</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    iOS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Android
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Flutter
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <b>Cross Platform App Development</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    React Native
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Ionic
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    MEAN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    MongoDB
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <b>Startup IT Solutions</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <b>Market Research Software Development</b>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Web Section */}
            <div className="col-md-4">
              <h5 className="dropdown-header">Web</h5>
              <div className="row">
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <b>Web App Development</b>
                  </Link>
                </li>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        PHP
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        Java
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        ROR
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        Python
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        VueJs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        Angular
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        React
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        NodeJs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-3">
                <ul className="list-unstyled">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <b>Ecommerce & CMS</b>
                    </Link>
                  </li>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li className="nav-item">
                          <Link to="#" className="nav-link">
                            Magento
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="#" className="nav-link">
                            Marketplace
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li className="nav-item">
                          <Link to="#" className="nav-link">
                            WordPress
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="#" className="nav-link">
                            Shopify
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>
            </div>

            {/* Emerging Technologies Section */}
            <div className="col-md-4">
              <h5 className="dropdown-header">Emerging Technologies</h5>
              <ul className="list-unstyled">
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Chatbot
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    IoT Development
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Enterprise Product Engineering
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Software Support Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Business Operation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Technical Operations Staffing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default MegaMenu
