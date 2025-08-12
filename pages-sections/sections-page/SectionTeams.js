import React, { useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Subject from "@mui/icons-material/Subject";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import CardAvatar from "/components/Card/CardAvatar.js";
import Muted from "/components/Typography/Muted.js";
import { Button, Divider, Typography } from "@mui/material";
import Info from "/components/Typography/Info.js";
import teamsStyle from "/styles/jss/novel-logiks/pages/sectionsSections/teamsStyle.js";
import styles from "/styles/jss/novel-logiks/pages/componentsSections/sectionCards.js";

const useStyles = makeStyles(styles);

// const useStyles = makeStyles(teamsStyle);

export default function SectionTeams({ ...rest }) {
  const classes = useStyles();
  const [activeRotate1, setActiveRotate1] = React.useState("");
  const [activeRotate2, setActiveRotate2] = React.useState("");
  const [activeRotate3, setActiveRotate3] = React.useState("");

  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer style={{ marginBottom: "2rem" }}>
            <GridItem md={6} style={{ color: "#112A46" }}>
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontSize: "2rem",
                  lineHeight: "2rem",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                {" "}
                Meet the Team
              </h1>
            </GridItem>

            <GridItem md={6} style={{ color: "#000" }}></GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} md={4}>
              <div className={classes.rotatingCardContainer}>
                <Card background className={classes.cardRotate}>
                  <div
                    className={classes.front}
                    style={{
                      backgroundImage:
                        "linear-gradient(230deg, #FAD961 0%, #F76B1C 100%)",
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        Sunil
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        CEO
                      </h5>
                    </CardBody>
                  </div>
                  <div
                    className={classes.back}
                    style={{
                      backgroundImage:
                        "linear-gradient(230deg, #FAD961 0%, #F76B1C 100%)",
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        Sunil
                      </h5>
                      <h5
                        sx={{
                          color: "black",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                        style={{
                          color: "black",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        CEO
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                      >
                        He is A Full Stack Developer proficient in a variety of
                        programming languages, frameworks, and technologies,
                        enabling them to handle the complete development
                        process. Expertise in Front-End Development, Back-End
                        Development, Server Management and Deployment, Security
                        Best Practices , Collaboration and Communication.
                      </h5>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </GridItem>
            <GridItem xs={12} md={4}>
              <div className={classes.rotatingCardContainer}>
                <Card background className={classes.cardRotate}>
                  <div
                    className={classes.front}
                    style={{
                      backgroundImage:
                        "linear-gradient(230deg, #F76B1C 0%, #FAD961 100%)",
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        Venkat Raju
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        Cloud Architect
                      </h5>
                    </CardBody>
                  </div>
                  <div
                    className={classes.back}
                    style={{
                      backgroundImage:
                        "linear-gradient(230deg, #F76B1C 0%, #FAD961 100%)",
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        Venkat Raju
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1.25rem",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        Cloud Architect
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: "1.1rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: "1.1rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                      >
                        Venkat Raju is a professional in designing,
                        implementing, and managing an organization's cloud
                        computing architecture. Venkat handles Cloud Strategy /
                        Planning, Architecture Design, Cloud Service
                        Integration, Security and Compliance, Cost Optimization,
                        Migration Planning, Performance Optimization , Disaster
                        Recovery.
                      </h5>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </GridItem>
            <GridItem xs={12} md={4}>
              <div className={classes.rotatingCardContainer}>
                <Card background className={classes.cardRotate}>
                  <div
                    className={classes.front}
                    style={{
                      backgroundImage:
                        "linear-gradient(230deg, #FAD961 0%, #F76B1C 100%)",
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        Farhaan
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        Data Anaylist / Data Science
                      </h5>
                    </CardBody>
                  </div>
                  <div
                    className={classes.back}
                    style={{
                      backgroundImage:
                        "linear-gradient(230deg, #FAD961 0%, #F76B1C 100%)",
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        Farhaan
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1.25rem",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        Data Anaylist / Data Science
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: "1.1rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: "1.1rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                      >
                        Data Scientists leverage advanced statistical and
                        machine learning techniques to extract meaningful
                        insights from complex datasets, while Data Analysts
                        focus on interpreting and visualizing data to support
                        decision-making and business strategies
                      </h5>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </GridItem>
            <GridItem xs={12} md={4}>
              <div className={classes.rotatingCardContainer}>
                <Card background className={classes.cardRotate}>
                  <div
                    className={classes.front}
                    style={{
                      backgroundImage:
                        "linear-gradient(230deg, #F76B1C 0%, #FAD961 100%)",
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        Kumar
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        Front End Lead
                      </h5>
                    </CardBody>
                  </div>
                  <div
                    className={classes.back}
                    style={{
                      backgroundImage:
                        "linear-gradient(230deg, #F76B1C 0%, #FAD961 100%)",
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        Kumar
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1.25rem",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        Front End Lead
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: "1.1rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: "1.1rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                      >
                        Kumar is involved leading and managing the frontend
                        development team responsible for creating the user
                        interface and user experience of a website or
                        application.
                      </h5>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </GridItem>
            <GridItem xs={12} md={4}>
              <div className={classes.rotatingCardContainer}>
                <Card background className={classes.cardRotate}>
                  <div
                    className={classes.front}
                    style={{
                      backgroundImage:
                        "linear-gradient(230deg, #FAD961 0%, #F76B1C 100%)",
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        Shanti
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        Technical Lead
                      </h5>
                    </CardBody>
                  </div>
                  <div
                    className={classes.back}
                    style={{
                      backgroundImage:
                        "linear-gradient(230deg, #FAD961 0%, #F76B1C 100%)",
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        Shanti
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1.25rem",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        Technical Lead
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: "1.1rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: "1.1rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                      >
                        Defines architecture, choose tech stack, ensure
                        scalability.Writing, review, and maintain high-quality
                        code.Guide and upskill developers. Plan, estimate, and
                        ensure timely delivery. Debug and optimize system
                        performance. Bridge between developers and stakeholders.
                        Adopt new technologies and best practices. Ensure secure
                        coding and deployments. Implement automation and cloud
                        solutions. Maintain technical records and share
                        knowledge.
                      </h5>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </GridItem>
            <GridItem xs={12} md={4}>
              <div className={classes.rotatingCardContainer}>
                <Card background className={classes.cardRotate}>
                  <div
                    className={classes.front}
                    style={{
                      backgroundImage:
                        "linear-gradient(230deg, #F76B1C 0%, #FAD961 100%)",
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        Sri Charan
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        Full Stack Developer
                      </h5>
                    </CardBody>
                  </div>
                  <div
                    className={classes.back}
                    style={{
                      backgroundImage:
                        "linear-gradient(230deg, #F76B1C 0%, #FAD961 100%)",
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1.5rem",
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        Sri Charan
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "1rem",
                          lineHeight: "1.25rem",
                          fontWeight: "500",
                          textAlign: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        Full Stack Developer
                      </h5>
                      <h5
                        sx={{
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: "1.1rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                        style={{
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: "1.1rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                      >
                        Sri Charan Oversee all technical, functional, and visual
                        components of the ongoing software development. Ensure
                        the application is compatible with various devices.
                        Optimize software performance. Guarantee that the design
                        integrates seamlessly with the final product's
                        functionality. Stays updated with the latest trends in
                        the IT industry. Continuously enhance programming
                        language proficiency.
                      </h5>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <hr />
    </div>
  );
}
