import React from "react";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import { makeStyles } from "@mui/styles";
import headersStyle from "../../styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import Grid from "@mui/material/Grid";
import { Box, Typography, useMediaQuery } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const useStyles = makeStyles(headersStyle);

// Reusable bullet point with icon
const BulletPoint = ({ children }) => (
  <Box sx={{ display: "flex", alignItems: "flex-start", gap: "0.25rem", mb: 1.5 }}>
    <CheckCircleIcon sx={{ color: "#28a745", fontSize: "1.5rem", mt: "2px" }} />
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: { lg: "1.25rem", md: "1.25rem", sm: "1rem", xs: "1rem" },
        lineHeight: { lg: "2rem", sm: "1.5rem", xs: "1.25rem" },
        display: "inline-block",
        color: "#000",
        textAlign: "left",
        px: 0,
      }}
    >
      {children}
    </Typography>
  </Box>
);

export default function SectionAboutUsDetails({ ...rest }) {
  const classes = useStyles();
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        <GridContainer>
          {/* Card 1 */}
          <GridItem xs={12} sm={4} md={4}>
            <Card blog sx={{ minHeight: "25rem", height: "25rem" }}>
              <CardBody>
                <GridItem sx={{ textAlign: "center" }}>
                  <img
                    src="/img/resized_imgs/away_from_crowd.jpg"
                    alt="Away from crowd"
                    style={{ width: "4rem", height: "4rem" }}
                  />
                </GridItem>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  <Grid container style={{color: "#000"}}>
                    <Grid item xs={12}>
                      Master the art of building blazing-fast, high-performance React.js applications.
                    </Grid>
                    <Grid item xs={12} >
                      Become the go-to expert for creating powerful React.js applications.
                    </Grid>
                  </Grid>
                </Typography>
              </CardBody>
            </Card>
          </GridItem>

          {/* Card 2 */}
          <GridItem xs={12} sm={4} md={4}>
            <Card blog sx={{ minHeight: "25rem", height: "25rem" }}>
              <CardBody>
                <GridItem sx={{ textAlign: "center" }}>
                  <img
                    src="/img/resized_imgs/high_pay.jpg"
                    alt="High pay"
                    style={{ width: "4rem", height: "4rem" }}
                  />
                </GridItem>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  <Grid container style={{color: "#000"}}>
                    <Grid item xs={12}>
                      Work from anywhere, live on your terms, and earn a 6-figure income with React.js.
                    </Grid>
                    <Grid item xs={12}>
                      Skilled React developers are in high demand.
                    </Grid>
                    {/* <Grid item xs={12}>
                      Master the craft of building powerful apps, and your financial freedom is just the beginning.
                    </Grid> */}
                  </Grid>
                </Typography>
              </CardBody>
            </Card>
          </GridItem>

          {/* Card 3 */}
          <GridItem xs={12} sm={4} md={4}>
            <Card blog sx={{ minHeight: "25rem", height: "25rem" }}>
              <CardBody>
                <GridItem sx={{ textAlign: "center" }}>
                  <img
                    src="/img/resized_imgs/high_demand.jpg"
                    alt="High demand"
                    style={{ width: "4rem", height: "4rem" }}
                  />
                </GridItem>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  <Grid container style={{color: "#000"}}>
                    <Grid item xs={12}>Focus </Grid>
                    <Grid item xs={12}>Discipline</Grid>
                    <Grid item xs={12}>Dedicate & Respect Time</Grid>
                    <Grid item xs={12}>Setting up Targets</Grid>
                    <Grid item xs={12}>Continuous Learning</Grid>
                  </Grid>
                </Typography>
              </CardBody>
            </Card>
          </GridItem>

          {/* Headline */}
          <Grid item xs={12} sx={{
            fontFamily: "Poppins",
            fontWeight: 800,
            fontSize: { lg: "3rem", md: "3rem", sm: "2rem", xs: "2rem" },
            lineHeight: { lg: "3.75rem", sm: "3rem", xs: "3rem" },
            textAlign: "center",
            margin: "5rem auto",
            color: "#000"
          }}>
            Learning Front-End Development with React taking forever?
          </Grid>

          {/* About Sunil */}
          <Grid item xs={12} sx={{ px: { lg: "6rem", md: "4rem", sm: "3rem", xs: "2rem" } }}>
            <GridContainer>
              <GridItem xs={12} sm={4} md={3}>
                <Box
                  component="img"
                  src="/img/resized_imgs/sunil.png"
                  alt="Sunil"
                  sx={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #ccc",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={8} md={9}>
                <BulletPoint>Sunil has over 15 years of extensive experience in Java, JavaScript, React.js, Python, and AWS—coupled with hands-on implementation across diverse domains and top-tier organizations.</BulletPoint>
                <BulletPoint>I have crafted these courses to deliver clear, practical, and impactful learning.</BulletPoint>
                <BulletPoint>This course is structured to provide in-depth insights into each topic, enriched with hands-on exercises, quizzes, and real-world examples to help learners gain confidence and mastery with ease.</BulletPoint>
                <BulletPoint>Every topic is carefully curated to align with the latest industry standards.</BulletPoint>
                <BulletPoint>I specialize in helping developers who struggle with understanding complex concepts or face challenges applying them effectively in their workplace often leading to missed expectations or underperformance.</BulletPoint>
                <BulletPoint>I also assist job seekers who find it difficult to crack technical interviews and secure their desired roles.</BulletPoint>
                <BulletPoint>My goal is to bridge the gap between theory and practical application, empowering learners to excel in their careers with confidence.</BulletPoint>
              </GridItem>
            </GridContainer>
          </Grid>
        </GridContainer>
      </div>
      <hr />
    </div>
  );
}
