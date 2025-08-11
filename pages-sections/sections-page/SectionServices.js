import React from "react";
import Router from "next/router";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import TerminalIcon from '@mui/icons-material/Terminal';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SpeedIcon from '@mui/icons-material/Speed';
import PsychologyIcon from '@mui/icons-material/Psychology';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
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
              fontFamily: 'Montserrat',
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
