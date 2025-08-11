// /*eslint-disable*/
// import React from "react";
// import makeStyles from "@mui/styles/makeStyles";
// import Header from "/components/Header/Header.js";
// import HeaderLinks from "/components/Header/HeaderLinks.js";
// import GridContainer from "/components/Grid/GridContainer.js";
// import GridItem from "/components/Grid/GridItem.js";
// import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
// import { Divider, Typography } from "@mui/material";
// import Footer from "/components/Footer/Footer.js";
// import Button from "/components/CustomButtons/Button.js";

// const useStyles = makeStyles(headersStyle);

// export default function ContactUsPage() {
//   const classes = useStyles();
//   return (
//     <React.Fragment style={{ backgroundColor: "#FFFFFF" }}>
//       <Header
//         brand=""
//         links={<HeaderLinks dropdownHoverColor="info" />}
//         fixed
//         color="info"
//         disableGutters={true}
//       />
//       <div style={{ marginTop: "5em", backgroundColor: "#FFFFFF" }}>
//         <GridContainer style={{ marginBottom: '.25rem' }}>
//           <GridItem md={12} style={{ color: '#112A46' }}>
//             <h1 style={{
//               fontFamily: 'Montserrat',
//               fontSize: '2rem',
//               lineHeight: '2rem',
//               fontWeight: '600',
//               textAlign: "left",
//               color: '#112A46'
//             }}>  Contact Us
//             </h1>
//             {/* <Divider style={{
//               backgroundColor: '#0D47A1',
//               color: '#0D47A1',
//               border: '#0D47A1',
//               borderRadius: '5px',
//               borderTop: '0.25rem solid #0D47A1',
//               width: '25%'
//             }}></Divider> */}
//           </GridItem>
//         </GridContainer>
//         <GridContainer>
//           <GridItem md={6} style={{ color: '#112A46', marginTop: "5rem" }}>
//             <Typography style={{ fontWeight: "600", fontFamily: '"Montserrat"' }}>
//               <GridItem xs={12} sm={12} md={12} style={{ textAlign: "left", justifyContent: "center", alignItems: "center", marginTop: "5rem" }}>
//                 What Does Your Business Need?
//               </GridItem>
//               <GridItem xs={12} sm={12} md={12} style={{ textAlign: "left", justifyContent: "center", alignItems: "center" }}>
//                 <Typography style={{ fontWeight: "600", fontFamily: '"Montserrat"' }}>Learn how Witty Geek Bytes Technologies can move your technology and business strategy forward. Please contact us with any inquiries or requests to help you grow your business.</Typography>
//               </GridItem>
//               <GridItem xs={12} sm={12} md={12} style={{ textAlign: "left", justifyContent: "center", alignItems: "center" }}>
//                 <Typography style={{ fontWeight: "500", fontFamily: '"Montserrat"' }}>Please contact us with any inquiries or requests to help you grow your business.</Typography>
//               </GridItem>
//               <GridItem xs={12} sm={12} md={12} style={{ textAlign: "left", justifyContent: "center", alignItems: "center" }}>
//                 <Typography style={{ fontWeight: "500", fontFamily: '"Montserrat"' }}>(+91) 2244451109<br />Mon - Fri, 8:00-22:00</Typography>
//               </GridItem>
//               <GridItem xs={12} sm={12} md={12} style={{ textAlign: "left", justifyContent: "center", alignItems: "center" }}>
//                 <Typography style={{ fontWeight: "500", fontFamily: '"Montserrat"' }}>contact@novellogiks.com<br />hr@novellogiks.com<br /></Typography>
//               </GridItem>
//             </Typography>
//           </GridItem>
//           <GridItem md={6} style={{ color: '#112A46', marginTop: "5rem" }}>
//             <GridContainer>
//               <GridItem md={12} style={{ textAlign: "center", justifyContent: "center" }} >
//                 <img
//                   src="img/resized_imgs/wgb-logo.png"
//                   alt="ai pic"
//                   style={{ width: '50%' }}
//                 />
//               </GridItem>
//             </GridContainer>
//           </GridItem>
//         </GridContainer>
//        <Footer
//           className={classes.footer}
//           content={
//             <div>
//               {/* <Divider /> */}
//               <div className={classes.container}>
//                 <GridContainer style={{ alignItems: "baseline" }}>
//                   <GridItem md={12}>
//                     <h4
//                       style={{
//                         fontFamily: "Montserrat",
//                         fontSize: "0.75rem",
//                         fontWeight: "500",
//                         color: "#000",
//                       }}
//                     >
//                       ©2025 novellogiks.com
//                     </h4>
//                   </GridItem>
//                 </GridContainer>
//               </div>
//             </div>
//           }
//         />
//       </div>
//     </React.Fragment>
//   );
// }
/*eslint-disable*/
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Divider, Typography } from "@mui/material";
import Footer from "/components/Footer/Footer.js";
import { Phone, Email } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const useStyles = makeStyles(headersStyle);

export default function ContactUsPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <div style={{ marginTop: "6em", backgroundColor: "#FFFFFF", padding: "2rem" }}>
        {/* Page Title */}
        <GridContainer style={{ marginBottom: "1rem" }}>
          <GridItem md={12}>
            <h1
              style={{
                fontFamily: "Montserrat",
                fontSize: "2.5rem",
                fontWeight: "700",
                textAlign: "left",
                color: "#112A46",
                marginBottom: "0.5rem",
              }}
            >
              Contact Us
            </h1>
            <Divider
              style={{
                backgroundColor: "#0D47A1",
                height: "4px",
                width: "60px",
                marginBottom: "2rem",
              }}
            />
          </GridItem>
        </GridContainer>

        {/* Main Content */}
        <GridContainer spacing={4}>
          {/* Left Column - Text Info */}
          <GridItem md={6} xs={12}>
            <Typography
              style={{
                fontWeight: "600",
                fontFamily: "Montserrat",
                fontSize: "1.25rem",
                marginBottom: "1rem",
              }}
            >
              What Does Your Business Need?
            </Typography>
            <Typography
              style={{
                fontWeight: "500",
                fontFamily: "Montserrat",
                marginBottom: "1.5rem",
                color: "#555",
              }}
            >
              Learn how Witty Geek Bytes Technologies can move your technology and
              business strategy forward. Please contact us with any inquiries or
              requests to help you grow your business.
            </Typography>

            {/* Contact Details */}
            <div style={{ marginBottom: "1rem" }}>
              <Phone style={{ color: "#0D47A1", marginRight: "0.5rem" }} />
              <span style={{ fontFamily: "Montserrat", fontWeight: "500" }}>
                (+91) 2244451109 — Mon - Fri, 8:00-22:00
              </span>
            </div>
            <div>
              <Email style={{ color: "#0D47A1", marginRight: "0.5rem" }} />
              <span style={{ fontFamily: "Montserrat", fontWeight: "500" }}>
                contact@novellogiks.com | hr@novellogiks.com
              </span>
            </div>
          </GridItem>

          {/* Right Column - Image */}
          <GridItem md={6} xs={12} style={{ textAlign: "center" }}>
            <img
              src="img/resized_imgs/wgb-logo.png"
              alt="Witty Geek Bytes Logo"
              style={{
                width: "70%",
                maxWidth: "350px",
                borderRadius: "12px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              }}
            />
          </GridItem>
        </GridContainer>

        {/* Footer */}
        <Footer
          className={classes.footer}
          content={
            <div style={{ backgroundColor: "#f8f9fa", padding: "1.5rem 0", marginTop: "3rem" }}>
              <GridContainer
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                {/* Left - Copyright */}
                <GridItem xs={12} sm={6} style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                      color: "#555",
                    }}
                  >
                    © {new Date().getFullYear()} novellogiks.com | All Rights Reserved
                  </Typography>
                </GridItem>

                {/* Right - Social Icons */}
                <GridItem xs={12} sm={6} style={{ textAlign: "right" }}>
                  <a href="#" style={{ color: "#0A66C2", margin: "0 0.5rem" }}>
                    <LinkedInIcon fontSize="medium" />
                  </a>
                  <a href="#" style={{ color: "#1DA1F2", margin: "0 0.5rem" }}>
                    <TwitterIcon fontSize="medium" />
                  </a>
                  <a href="#" style={{ color: "#1877F2", margin: "0 0.5rem" }}>
                    <FacebookIcon fontSize="medium" />
                  </a>
                </GridItem>
              </GridContainer>
            </div>
          }
        />
      </div>
    </React.Fragment>
  );
}
