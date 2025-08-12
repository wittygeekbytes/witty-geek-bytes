import React from "react";
import Router from "next/router";
import makeStyles from '@mui/styles/makeStyles';

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Typography, Divider, Button, Box } from "@mui/material";
import { services } from "../../data/services-data";
import SectionServicesCarousel from "./SectionServicesCarousel";
const useStyles = makeStyles(headersStyle);
const routeToAiDetails = () => {
  Router.push("/ai-details");
}

const routeToContactUs = () => {
  Router.push("/contact-us");
}

export default function SectionServices({ ...rest }) {
  const classes = useStyles();
  console.log('Loaded Services data : ', services ? services.length : 0);
  return (
    <div className="cd-section" {...rest}>
      
      <div className={classes.container}>
        <GridContainer style={{ marginBottom: '.25rem' }}>
          <GridItem md={6} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Poppins',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  Services
            </h1>
          </GridItem>
        </GridContainer> 
        <SectionServicesCarousel/>
        <hr />
      </div>
    </div>
  );
}
