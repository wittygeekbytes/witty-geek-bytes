import React from "react";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import { makeStyles } from '@mui/styles';
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Typography, Divider, Button, Box } from "@mui/material";
import Router from "next/router";
import { contactUs } from "../../data/contact-us-data";

const useStyles = makeStyles(headersStyle);

export default function SectionClients({ ...rest }) {
  const classes = useStyles();
  const routeToAiDetails = () => {
    Router.push("/ai-details");
  }

  const routeToContactUs = () => {
    Router.push("/contact-us");
  }
  return (
    <div className="cd-section" {...rest} >
      <div className={classes.container} >
        <GridContainer style={{ marginBottom: '2rem', marginTop: '4rem' }}>
          <GridItem style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  Clients
            </h1>
          </GridItem>
        </GridContainer>
        <GridContainer style={{ margin: '2rem' }}>
          <GridItem sm={12} md= {6} style={{ textAlign: "center" }}>
            <img src="/img/lsk_imgs/vishudha-client.png" alt="..." style={{ width: "15rem", height: "6rem", textAlign: "center", justifyContent: "center", boxShadow: '0 3px 10px rgb(0 0 0 / 0.5)', borderRadius:"5px" }} />
          </GridItem>
          <GridItem sm={12} md= {6}  style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
            <img src="/img/lsk_imgs/tek-centrix-client.png" alt="..." style={{ width: "15rem", height: "6rem", textAlign: "center", justifyContent: "center", boxShadow: '0 3px 10px rgb(0 0 0 / 0.5)', borderRadius:"5px" }} />
          </GridItem>
        </GridContainer>
      </div>
      <hr/>
    </div >
  );
}
