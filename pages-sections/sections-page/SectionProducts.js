/* eslint-disable */
import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Icon from "@mui/material/Icon";
// @mui/icons-material
import { Divider } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TuneIcon from '@mui/icons-material/Tune';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import Dashboard from "@mui/icons-material/Dashboard";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import Badge from "/components/Badge/Badge.js";

import projectsStyle from "/styles/jss/novel-logiks/pages/sectionsSections/projectsStyle.js";

const useStyles = makeStyles(projectsStyle);

export default function SectionProducts({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container} >
        <GridContainer >
          <GridItem md={12} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '1.75rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  Products
            </h1>
            
          </GridItem>
        </GridContainer>
            <GridContainer>
              <GridItem
                xs={12}
                sm={12}
                md={12}
                className={
                  classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                }
              >
                <h5 className={classes.description} style={{fontSize:"1.5rem", lineHeight : "2rem",fontWeight:"600", fontFamily:"Montserrat", color : "black"}}>
                  We understood Who’s target buyer?what they need and What are their pain points? and we came up with a solution.
                </h5>
                <div className={classes.sectionSpace} />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} className={classes.mrAuto}>
                <InfoArea
                  className={classes.info4} style={{
                    fontFamily: 'Montserrat',
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    fontWeight: '500',
                    textAlign: "left",
                    color: '#000',
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem"
                  }}
                  title="E-Commerce Application"
                  description={
                    <span className={classes.infoDescription}>
                      We've created the design of the website using modern Tech Stack
                    </span>
                  }
                  // description="We've created the design of the website using modern Tech Stack"
                  icon={ShoppingCartCheckoutIcon}
                  iconColor="warning"
                />
                <InfoArea
                  className={classes.info4} style={{fontSize:"0.85rem", fontWeight:"500", color:"#000"}}
                  title="Saves Time"
                  description={
                    <span className={classes.infoDescription}>
                      I would save lot of time of the customer by just relaxing and ordering the Groceries needed to any where 
                    </span>
                  }
                  icon={QueryBuilderIcon}
                  iconColor="warning"
                />
                <InfoArea
                  className={classes.info4} style={{fontSize:"0.85rem", fontWeight:"500", color:"#000"}}
                  title="Free Shipping"
                  description={
                    <span className={classes.infoDescription}>
                      Deliver Goods on Time and handle the goods with Care
                    </span>
                  }
                  icon={LocalShippingIcon}
                  iconColor="warning"
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info4} style={{ 
                    fontFamily: 'Montserrat',
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    fontWeight: '500',
                    textAlign: "left",
                    color: '#000',
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem"
                  }}
                  title="Admin Panel"
                  description={
                    <span className={classes.infoDescription}>
                     Admin Panel for accessing all the modules in Vishudha Ecommerce Business
                    </span>
                  }
                  // description="Admin Panel for accessing all the modules in Vishudha Ecommerce Business"
                  icon={AdminPanelSettingsIcon}
                  iconColor="warning"
                />
                <InfoArea
                  className={classes.info4} style={{fontSize:"0.85rem", fontWeight:"500", color:"#000"}}
                  title="Analytics Integrated"
                  description={
                    <span className={classes.infoDescription}>
                    Fully Integrated with Analytics to track the Sales
                    </span>
                  }
                  icon={AnalyticsIcon}
                  iconColor="warning"
                />
                <InfoArea
                  className={classes.info4} style={{fontSize:"0.85rem", fontWeight:"500", color:"#000"}}
                  title="Intuitive Dashboard "
                  description={
                    <span className={classes.infoDescription}>
                    Intuitive Dashboard based on the Roles
                    </span>
                  }
                  icon={Dashboard}
                  iconColor="warning"
                />
                <InfoArea 
                  className={classes.info4} style={{fontSize:"0.85rem", fontWeight:"500", color:"#000"}}
                  title="Configure "
                  description={
                    <span className={classes.infoDescription}>
                    Can Configure all the Categories, Sub categories, Products, Prices, Discounts and Taxes details
                    </span>
                  }
                  icon={TuneIcon}
                  iconColor="warning"
                />
              </GridItem>
            </GridContainer>
            <hr />
          
      </div>
    </div>);
}
