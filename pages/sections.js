import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import SectionHome from "/pages-sections/sections-page/SectionHome.js";
import SectionAboutUsDetails from "/pages-sections/sections-page/SectionAboutUsDetails.js";
import SectionServices from "/pages-sections/sections-page/SectionServices.js";
import SectionContactUs from "/pages-sections/sections-page/SectionContactUs.js";

import SectionTeams from "/pages-sections/sections-page/SectionTeams.js";
import sectionsPageStyle from "/styles/jss/novel-logiks/pages/sectionsPageStyle.js";
import Footer from "../components/Footer/Footer";
import Button from "/components/CustomButtons/Button.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import { Box, Divider, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const useStyles = makeStyles(sectionsPageStyle);

export default function SectionsPage() {
  React.useEffect(() => {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0) {
      document.getElementById(href).scrollIntoView();
    }
    window.addEventListener("scroll", updateView);
    updateView();
    return function cleanup() {
      window.removeEventListener("scroll", updateView);
    };
  });
  const updateView = () => {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document
      .getElementById("cd-vertical-nav")
      .getElementsByTagName("a");

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (
        contentSections[i].offsetTop - window.innerHeight / 2 <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  };
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const smoothScroll = (target) => {
    var targetScroll = document.getElementById(target);
    scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  const classes = useStyles();
  return (
    <div>
      <Header
        color="info"
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
      />
      <div className={classes.main}>
        <SectionHome id="home" />
        <SectionAboutUsDetails id="about-us" />
        <SectionServices id="services" />
        {/* <SectionTeams id="teams" /> */}
        <SectionContactUs id="contactUs" />
      </div>
      <nav id="cd-vertical-nav" style={{ display: "none" }}>
        <ul>
          <li>
            <a
              href="#home"
              data-number="1"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("home");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#aboutus"
              data-number="2"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("aboutus");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">About</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              data-number="3"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("services");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Services</span>
            </a>
          </li>
          <li>
            <a
              href="#contactUs"
              data-number="4"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("contactUs");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Contact Us</span>
            </a>
          </li>
        </ul>
      </nav>

      <Footer
        className={classes.footer}
        content={
          <div style={{ padding: "1.5rem 0" }}>
            <div className={classes.container}>
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
                      fontFamily: "Poppins",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                      color: "#555",
                    }}
                  >
                    © {new Date().getFullYear()} wittygeekbytes.com , All Rights
                    Reserved
                  </Typography>
                </GridItem>

                {/* Right - Social Icons */}
                <GridItem xs={12} sm={6} style={{ textAlign: "right" }}>
                  <a
                    href="https://www.linkedin.com/wittygeekbytes"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0A66C2", margin: "0 0.5rem" }}
                  >
                    <LinkedInIcon fontSize="medium" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1DA1F2", margin: "0 0.5rem" }}
                  >
                    <TwitterIcon fontSize="medium" />
                  </a>
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1877F2", margin: "0 0.5rem" }}
                  >
                    <FacebookIcon fontSize="medium" />
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1877F2", margin: "0 0.5rem" }}
                  >
                    <InstagramIcon fontSize="medium" />
                  </a>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        }
      />
    </div>
  );
}
