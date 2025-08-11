/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import styles from "/styles/jss/novel-logiks/pages/componentsSections/sectionCards.js";
import Footer from "/components/Footer/Footer.js";
const useStyles = makeStyles(styles);

export default function AiDetails() {
  const classes = useStyles();

  return (
    <>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <div className={classes.container} style={{ marginTop: "5.5em" }}>
        <GridContainer style={{ marginBottom: '.25rem' }}>
          <GridItem md={12} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46',
              backgroundColor: "#FFFFFF",
              marginTop: "1.5rem"
            }}>  Witty Geek Bytes in Front End Development
            </h1>
          </GridItem>
        </GridContainer>

        <GridContainer style={{ marginBottom: "2rem", color: '#112A46', background: '#FFF' }}>
          <GridItem md={12} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '1.5rem',
              lineHeight: '1.5rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  The Fastest Path to React.js Mastery.

            </h1>
          </GridItem>
        </GridContainer>

        <GridContainer xs={12}>
          <GridItem xs={12} style={{ marginBottom: "2rem", color: '#112A46' }}>
            <h4 style={{
              fontSize: '1rem', lineHeight: '1.25em', fontWeight: '500'
            }}>
              At Witty Geek Bytes, we’re passionate about demystifying the magic behind Generative Artificial Intelligence (AI) and showing you how it works. Generative AI is
              a groundbreaking technology that enables computers to not only process data
              but also create entirely new content, ranging from text and images to music and
              even more.
            </h4>
            <ul>
              <li>
                <h4 style={{
                  fontSize: '1rem', lineHeight: '1.25em', fontWeight: '500'
                }}> Build High-Performance, Real-World Applications that work seamlessly across devices and platforms</h4></li>
              <li><h4 style={{
                fontSize: '1rem', lineHeight: '1.25em', fontWeight: '500'
              }}>
                Think Like a Modern Front-End Architect , mastering component-driven design, hooks, state management, and scalability.</h4></li>

              <li><h4 style={{
                fontSize: '1rem', lineHeight: '1.25em', fontWeight: '500'
              }}>Confidently Tackle Any Project — from startup MVPs to enterprise-grade solutions.
              </h4></li>

              <li><h4 style={{
                fontSize: '1rem', lineHeight: '1.25em', fontWeight: '500'
              }}>Become an In-Demand Developer in a job market hungry for React.js talent.</h4></li>

              <li><h4 style={{
                fontSize: '1rem', lineHeight: '1.25em', fontWeight: '500'
              }}>Future-Proof Your Skills with the latest 2025 React features, ecosystem tools, and best practices.</h4></li>

             
            </ul>
          </GridItem>
        </GridContainer>
        {/* //FOOTER */}
        <Footer
          className={classes.footer}
          content={
            <div>
              {/* <Divider /> */}
              <div className={classes.container}>
                <GridContainer style={{ alignItems: "baseline" }}>
                  <GridItem md={12}>
                    <h4
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "0.75rem",
                        fontWeight: "500",
                        color: "#000",
                      }}
                    >
                      ©2025 novellogiks.com
                    </h4>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
}
