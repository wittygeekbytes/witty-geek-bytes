/* eslint-disable */
import React, { useState } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";
import { headerLinksData } from "../../data/header-links-data.js";
import makeStyles from "@mui/styles/makeStyles";

// @mui/icons-material
import Button from "/components/CustomButtons/Button.js";
import styles from "/styles/jss/novel-logiks/components/headerLinksStyle.js";
import { Typography } from "@mui/material";
import Router from "next/router";
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const [activeItem, setActiveItem] = useState(null);

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
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
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  console.log(headerLinksData);
  const { links } = headerLinksData;
  return (
    <>
      <img
        src="/img/resized_imgs/wgb-logo.png"
        alt="novellogiks"
        style={{ width: "2rem", height: "2rem" ,marginRight:"1rem"}}
      />
      <div>
        <img
          src="/img/resized_imgs/wgb-title.png"
          alt="Witty Geek Bytes"
          style={{ width: "12rem", height:"2rem"}}
        />
      </div>
      <span style={{ marginLeft: "auto", marginRight: "1.5rem" }}></span>
      {links.map((each) => (
        <Link href={each.href}>
          <a
            className={classes.dropdownLink}
            style={{
              color: activeItem === each.title ? "#1e81b0" : "#06437a", // Highlight active item (gold color)
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "1rem",
              fontWeight: "600",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              transition: "color 0.3s ease-in-out",
              cursor: "pointer", // Pointer cursor on hover
              padding: "10px 15px",
              borderBottom:
                activeItem === each.title ? "2px solid #eab676" : "none", // Underline active item
            }}
            onClick={(e) => {
              setActiveItem(each.title); // Set the active menu item
              if (each.title === "Services") Router.push(each.href);
              else smoothScroll(e, each.smoothScroll);
            }}
          >
            <span style={{ whiteSpace: "nowrap", lineHeight: "2rem" }}>
              {each.title}
            </span>
          </a>
        </Link>
      ))}
    </>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
