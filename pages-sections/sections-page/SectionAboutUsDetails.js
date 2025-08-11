import React from "react";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import { makeStyles } from "@mui/styles";
import headersStyle from "../../styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@mui/material";
const useStyles = makeStyles(headersStyle);

export default function SectionAboutUsDetails({ ...rest }) {
  const classes = useStyles();

  // Use Material-UI useMediaQuery hook to determine screen size
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <div className="cd-section" {...rest}>
      <div
        className={classes.container}
        // style={{ marginTop: isLargeScreen ? "2rem" : "1rem" }}
      >
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <Card
              blog
              style={{
                minHeight: "15rem",
                height: "15rem",
                backgroundColor: "#FBDA61",
                backgroundImage:
                  "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)",
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
                      src="/img/resized_imgs/mission.png"
                      alt="..."
                      style={{
                        width: "2rem",
                        height: "2rem",
                        textAlign: "center",
                        justifyContent: "center",
                        color: "white",
                        backgroundColor: "transparent",
                      }}
                    />
                  </a>
                </GridItem>
                <h6
                  className={classes.cardCategory}
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "1.25rem",
                    lineHeight: "1.25rem",
                    fontWeight: "600",
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Vision
                </h6>
                <h4
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "1rem",
                    lineHeight: "1.15rem",
                    fontWeight: "500",
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      To contribute to the overall wellbeing of the communities
                      we operate our business.
                    </Grid>
                  </Grid>
                </h4>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            {/* <Card blog style={{ backgroundColor: "transparent", minHeight:"15rem", height:"15rem" }}> */}
            <Card
              blog
              style={{
                minHeight: "15rem",
                height: "15rem",
                backgroundColor: "#4158D0",
                backgroundImage:
                  "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                // backgroundColor: '#FBDA61',
                // backgroundImage: 'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)'
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
                      src="/img/resized_imgs/mission.png"
                      alt="..."
                      style={{
                        width: "2rem",
                        height: "2rem",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    />
                  </a>
                </GridItem>
                <h6
                  className={classes.cardCategory}
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "1.25rem",
                    lineHeight: "1.25rem",
                    fontWeight: "600",
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  {" "}
                  Mission
                </h6>
                <h4
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "1rem",
                    lineHeight: "1.15rem",
                    fontWeight: "500",
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      To inspire people and improve lives through technology
                      delivered by us.
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
                minHeight: "15rem",
                height: "15rem",
                backgroundColor: "#FBDA61",
                backgroundImage:
                  "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)",
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
                      src="/img/resized_imgs/mission.png"
                      alt="..."
                      style={{
                        width: "2rem",
                        height: "2rem",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    />
                  </a>
                </GridItem>
                <h6
                  className={classes.cardCategory}
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "1.25rem",
                    lineHeight: "1.25rem",
                    fontWeight: "600",
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  {" "}
                  Values
                </h6>
                <h4
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "1rem",
                    lineHeight: "1.15rem",
                    fontWeight: "500",
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      With oneness in heart, trust in purpose, humour in
                      journey, and integrity in action — we strive not just to
                      survive, but to truly thrive.
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
