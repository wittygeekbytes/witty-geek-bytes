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


export default function SectionServices({ ...rest }) {
  const classes = useStyles();
  console.log('Loaded Courses data : ', services ? services.length : 0);
  return (
    <div className="cd-section" {...rest}>
      
      <div className={classes.container}>
        <GridContainer style={{ marginBottom: '.25rem' }}>
          <GridItem md={6}  sx={{
              fontFamily: "Poppins",
              fontWeight: 800,
              fontSize: { lg: "3rem", md: "3rem", sm: "2rem", xs: "2rem" },
              lineHeight: { lg: "3.75rem", sm: "3rem", xs: "3rem" },
              display: "inline-block",
              maxWidth: "90%",
              color: "#00C3CC",
              textAlign: "left",
            }}>
           
            Courses
          </GridItem>
        </GridContainer> 
        <SectionServicesCarousel/>
        <hr />
      </div>
    </div>
  );
}
