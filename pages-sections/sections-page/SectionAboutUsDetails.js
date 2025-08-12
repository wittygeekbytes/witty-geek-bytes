import React from "react";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import { makeStyles } from "@mui/styles";
import headersStyle from "../../styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import Grid from "@mui/material/Grid";
import { Box, useMediaQuery } from "@mui/material";
const useStyles = makeStyles(headersStyle);

export default function SectionAboutUsDetails({ ...rest }) {
  const classes = useStyles();

  // Use Material-UI useMediaQuery hook to determine screen size
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <Card
              blog
              style={{
                minHeight: "20rem",
                height: "20rem",
                backgroundColor: "#6B2FED",
                backgroundImage:
                  "linear-gradient(45deg, #6B2FED 0%, #71DCE3 100%)",
              }}
            >
              <CardBody>
                <GridItem
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      width: "2rem",
                      height: "2rem",
                      textAlign: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    <img
                      src="/img/resized_imgs/away_from_crowd.jpg"
                      alt="..."
                      style={{
                        width: "4rem",
                        height: "4rem",
                        textAlign: "center",
                        justifyContent: "center",
                        color: "white",
                        backgroundColor: "transparent",
                      }}
                    />
                  </a>
                </GridItem>
                
                <h4
                  style={{
                    fontFamily: "Montserrat",
                   fontSize: "1rem",
                    lineHeight: "1.5rem",
                    fontWeight: "600",
                    textAlign: "left",
                    color: "#FFFFFF",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      Master the art of building blazing-fast, high-performance React.js applications.
                    </Grid>
                    <Grid item xs={12}>
                      Become the go-to expert for creating powerful React.js applications.
                    </Grid>
                  </Grid>
                </h4>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card
              blog
              style={{
                minHeight: "20rem",
                height: "20rem",
                backgroundColor: "#71DCE3",
                backgroundImage:
                  "linear-gradient(45deg, #71DCE3 0%, #6B2FED 100%)",
              }}
            >
              <CardBody>
                <GridItem
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      width: "2rem",
                      height: "2rem",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="/img/resized_imgs/high_pay.jpg"
                      alt="..."
                      style={{
                        width: "4rem",
                        height: "4rem",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    />
                  </a>
                </GridItem>
                <h4
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    fontWeight: "600",
                    textAlign: "left",
                    color: "#FFFFFF",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      Work from anywhere, live on your terms, and earn a 6-figure income with React.js. 
                    </Grid>
                    <Grid item xs={12}>
                      Skilled React developers are in high demand.
                    </Grid>
                    <Grid item xs={12}>
                      Master the craft of building powerful apps, and your financial freedom is just the beginning.
                    </Grid>
                  </Grid>
                </h4>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card
              blog
              style={{
                minHeight: "20rem",
                height: "20rem",
                backgroundColor: "#6B2FED",
                backgroundImage:
                  "linear-gradient(45deg, #6B2FED 0%, #71DCE3 100%)",
              }}
            >
              <CardBody>
                <GridItem
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      width: "2rem",
                      height: "2rem",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="/img/resized_imgs/high_demand.jpg"
                      alt="..."
                      style={{
                        width: "4rem",
                        height: "4rem",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    />
                  </a>
                </GridItem>
                <h4
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    fontWeight: "600",
                    textAlign: "left",
                    color: "#FFFFFF",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      Focus & Discipline 
                    </Grid>
                    <Grid item xs={12}>
                      Dedicate & Respect Time
                    </Grid>
                    <Grid item xs={12}>
                      Setting up Targets
                    </Grid>
                    <Grid item xs={12}>
                      Continuous Learning
                    </Grid>
                  </Grid>
                </h4>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <hr />
    </div>
  );
}
