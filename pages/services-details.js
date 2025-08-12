import React from "react";
import Router from "next/router";
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import headersStyle from "../styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Typography, Divider, Box } from "@mui/material";
import Button from "/components/CustomButtons/Button.js";
import SectionServicesRight from "../pages-sections/components/SectionServicesRight.js";
import SectionServicesLeft from "../pages-sections/components/SectionServicesLeft.js";
import { services } from "../data/services-data.js";

const useStyles = makeStyles(headersStyle);

export default function CoursesDetails({ ...rest }) {
  const classes = useStyles();
  console.log('Loaded Courses data : ', services ? services.length : 0);
  return (
    <> <h3>Courses   </h3>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <div className={classes.container} style={{ marginTop: "5.5em", backgroundColor:"" }}>
        <GridContainer style={{ marginBottom: '.25rem' }}>
          <GridItem md={6} style={{ color: '#112A46' }}>
            <h1 sx={{
              fontFamily: "Poppins",
              fontWeight: 800,
              fontSize: { lg: "3rem", md: "3rem", sm: "2rem", xs: "2rem" },
              lineHeight: { lg: "3.75rem", sm: "3rem", xs: "3rem" },
              display: "inline-block",
              maxWidth: "90%",
              margin: "5rem",
              color: "#000000",
              textAlign: "center",
            }}>  Courses
            </h1>
          </GridItem>
        </GridContainer>
        {services && services[0] && (<GridContainer id='0' style={{ marginBottom: '.25rem' }}>
          <SectionServicesLeft data={services[0]} />
        </GridContainer>)}
        {services && services[1] && (<GridContainer id='1' style={{ marginBottom: '.25rem' }}>
          <SectionServicesRight data={services[1]} />
        </GridContainer>)}
        {services && services[2] && (<GridContainer id='2' style={{ marginBottom: '.25rem' }}>
          <SectionServicesLeft data={services[2]} />
        </GridContainer>)}
      </div>
    </>
  );
}
