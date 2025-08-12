import React from "react";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import { makeStyles } from "@mui/styles";
import headersStyle from "../../styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import Grid from "@mui/material/Grid";
import { Box, Typography, useMediaQuery } from "@mui/material";
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
                // backgroundColor: "#6B2FED",
                // backgroundImage:
                //   "linear-gradient(45deg, #6B2FED 0%, #71DCE3 100%)",
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
                      color: "#000",
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
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    fontWeight: "500",
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      Master the art of building blazing-fast, high-performance
                      React.js applications.
                    </Grid>
                    <Grid item xs={12}>
                      Become the go-to expert for creating powerful React.js
                      applications.
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
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    fontWeight: "500",
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      Work from anywhere, live on your terms, and earn a
                      6-figure income with React.js.
                    </Grid>
                    <Grid item xs={12}>
                      Skilled React developers are in high demand.
                    </Grid>
                    <Grid item xs={12}>
                      Master the craft of building powerful apps, and your
                      financial freedom is just the beginning.
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
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    fontWeight: "500",
                    textAlign: "left",
                    color: "#000",
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
          <Grid
            item
            xs={12}
            sx={{
              fontFamily: "Poppins",
              fontWeight: 800,
              fontSize: { lg: "3rem", md: "3rem", sm: "2rem", xs: "2rem" },
              lineHeight: { lg: "3.75rem", sm: "3rem", xs: "3rem" },
              display: "inline-block",
              maxWidth: "90%",
              margin: "5rem",
              color: "#00C3CC",
              textAlign: "center",
            }}
          >
            Learning Front-End Development with React taking forever?
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: {
                lg: "1.25rem",
                md: "1.25rem",
                sm: "1rem",
                xs: "1rem",
              },
              lineHeight: { lg: "2rem", sm: "1.5rem", xs: "1.25rem" },
              display: "inline-block",
              maxWidth: "90%",
              color: "#000",
              textAlign: "left",
              px: { lg: "6rem", md: "4rem", sm: "3rem", xs: "2rem" }, // padding on left & right
              mx: "auto", // center horizontally with margin
              marginLeft: "auto",
            }}
          >
            I’ve been there Lost in an endless loop of outdated YouTube
            tutorials, overcomplicated explanations, and Stack Overflow rabbit
            holes. If you’ve made it to page two of Google, you already know…
            it’s bad.
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: {
                lg: "1.25rem",
                md: "1.25rem",
                sm: "1rem",
                xs: "1rem",
              },
              lineHeight: { lg: "1.5rem", sm: "1.5rem", xs: "1.25rem" },
              color: "#000",
              textAlign: "left",
              pr: { xs: 2, sm: 4, md: 6 }, // extra space on the right
            }}
          >
            <Typography>
              Learning React can feel overwhelming—outdated tutorials, constant
              updates, and confusing concepts like Hooks, Context, or Server
              Components.
            </Typography>
            <Typography>
              You waste hours chasing fixes that take just one line of code,
              losing time you could spend on things you enjoy.
            </Typography>
            <Typography>
              It’s no wonder so many beginners give up—I almost did too.
            </Typography>
            <Typography>
              I’ve had moments thinking, “Maybe I’m not cut out for this.”
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: {
                lg: "1.25rem",
                md: "1.25rem",
                sm: "1rem",
                xs: "1rem",
              },
              lineHeight: { lg: "1.5rem", sm: "1.5rem", xs: "1.25rem" },
              color: "#000",
              textAlign: "left",
              pl: { xs: 2, sm: 4, md: 6 }, // extra space on the left
            }}
          >
            <Typography>
              I’d walk away from coding for weeks—not from lack of passion, but
              from mental exhaustion.
            </Typography>
            <Typography>
              What I needed was a clear, structured roadmap—step-by-step
              guidance with modern, working examples for 2025. Something to save
              me months (or years) of frustration.
            </Typography>
            <Typography>
              If you’re stuck in the React learning loop, I’ve been there.
            </Typography>
            <Typography>The way forward starts with the right path.</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: {
                lg: "1.25rem",
                md: "1.25rem",
                sm: "1rem",
                xs: "1rem",
              },
              lineHeight: { lg: "2rem", sm: "1.5rem", xs: "1.25rem" },
              display: "inline-block",
              maxWidth: "90%",
              color: "#000",
              textAlign: "left",
              px: { lg: "6rem", md: "4rem", sm: "3rem", xs: "2rem" }, // padding on left & right
              mx: "auto", // center horizontally with margin
              marginLeft: "auto",
            }}
          >
            <GridContainer>
              <GridItem xs={12} sm={4} md={3}>
                <Box
                  component="img"
                  src="/img/resized_imgs/sunil.png" // replace with your image path  src="/img/resized_imgs/away_from_crowd.jpg"
                  alt="Somebody"
                  sx={{
                    width: "250px", // adjust size
                    height: "250px",
                    borderRadius: "50%", // makes it circular
                    objectFit: "cover", // ensures proper cropping
                    border: "3px solid #ccc", // optional border
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // optional shadow
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={8} md={9}>
                Sunil has over 15 years of extensive experience in Java,
                JavaScript, React.js, Python, and AWS—coupled with hands-on
                implementation across diverse domains and top-tier
                organizations.
                <br />
                I have crafted these courses to deliver clear, practical, and
                impactful learning.
                <br />
                This course is structured to provide in-depth insights into each
                topic, enriched with hands-on exercises, quizzes, and real-world
                examples to help learners gain confidence and mastery with ease.
                <br />
                Every topic is carefully curated to align with the latest
                industry standards.
                <br />
                I specialize in helping developers who struggle with
                understanding complex concepts or face challenges applying them
                effectively in their workplace often leading to missed
                expectations or underperformance. <br />
                I also assist job seekers who find it difficult to crack
                technical interviews and secure their desired roles. <br />
                My goal is to bridge the gap between theory and practical
                application, empowering learners to excel in their careers with
                confidence.
                <br />
              </GridItem>
            </GridContainer>
          </Grid>
        </GridContainer>
      </div>
      <hr />
    </div>
  );
}
