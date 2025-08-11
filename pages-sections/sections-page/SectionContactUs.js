import React from "react";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import { makeStyles } from '@mui/styles';
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Typography, Divider, Button, Box } from "@mui/material";
import Router from "next/router";
import { contactUs } from "../../data/contact-us-data";

const useStyles = makeStyles(headersStyle);

export default function SectionContactUs({ ...rest }) {
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
        <GridContainer style={{ marginBottom: '2rem' ,marginTop: '4rem' }}>
          <GridItem md={6} style={{ color: '#112A46' }}>
            <h1 style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              lineHeight: '2rem',
              fontWeight: '600',
              textAlign: "left",
              color: '#112A46'
            }}>  Contact Us
            </h1>
            {/* <Divider style={{
              backgroundColor: '#FFFFFF',
              color: '#FFFFFF',
              border: '#FFFFFF',
              borderRadius: '5px',
              borderTop: '0.25rem solid #112A46',
              width: '40%'
            }}></Divider> */}
          </GridItem>
        </GridContainer>
        <GridContainer style={{ margin: '2rem' }}>
          <GridItem md={6} style={{ color: '#091133' }}>
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                textAlign: "left",
                color: '#091133',
                fontSize: {
                  lg: '1.2rem',
                  md: '1.2rem',
                  sm: '1.25rem',
                  xs: '1.25rem'
                }
              }}
              style={{
                lineHeight: '1.313rem',
                textAlign: "left",
                fontWeight: "400",
                marginBottom: "3rem"
              }}
            >  {contactUs.points[0]}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                textAlign: "left",
                color: '#091133',
                fontSize: {
                  lg: '1.2rem',
                  md: '1.2rem',
                  sm: '1.25rem',
                  xs: '1.25rem'
                }
              }}
              style={{
                lineHeight: '1.313rem',
                textAlign: "left",
                fontWeight: "400",
                marginBottom: "3rem"
              }}
            >  {contactUs.points[1]}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                textAlign: "left",
                color: '#091133',
                fontSize: {
                  lg: '1.2rem',
                  md: '1.2rem',
                  sm: '1.25rem',
                  xs: '1.25rem'
                }
              }}
              style={{
                lineHeight: '1.5rem',
                textAlign: "left",
                fontWeight: "600",
                marginBottom: "3rem"
              }}
            >  {contactUs.points[2]}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                textAlign: "left",
                color: '#091133',
                fontSize: {
                  lg: '1.2rem',
                  md: '1.2rem',
                  sm: '1.25rem',
                  xs: '1.25rem'
                }
              }}
              style={{
                lineHeight: '1.5rem',
                textAlign: "left",
                fontWeight: "600",
                marginBottom: "3rem"
              }}
            >  {contactUs.points[3]}
            </Typography>
          </GridItem>
          <GridItem md={6} style={{ color: '#091133' }}>
            <GridContainer style={{ marginBottom: "2rem" }}>
              <GridItem md={3} sm={3} style={{ textAlign: "center" }}>
                <img src="/img/resized_imgs/contact-us-office.png" alt="..." style={{ width: "1.75rem", height: "1.75rem", textAlign: "center", justifyContent: "center" }} />
              </GridItem>
              <GridItem md={9} sm={9}>
                <GridItem>
                  <Typography
                   sx={{
                    textAlign: {
                      lg: 'left',
                      md: 'left',
                      sm: 'left',
                      xs: 'center'
                    },
                    fontSize: {
                      lg: '1rem',
                      md: '1rem',
                      sm: '1rem',
                      xs: '1.1rem'
                    }
                  }}
                  style={{
                    fontFamily: 'Montserrat',
                    lineHeight: '1.5rem',
                    fontWeight: '600',
                    color: '#091133',
                  }}
                  >  {contactUs.address_lines[0]}
                  </Typography>
                </GridItem>
                <GridItem>
                  <Typography
                   sx={{
                    textAlign: {
                      lg: 'left',
                      md: 'left',
                      sm: 'left',
                      xs: 'center'
                    },
                    fontSize: {
                      lg: '1rem',
                      md: '1rem',
                      sm: '1rem',
                      xs: '1.1rem'
                    }
                  }}
                  style={{
                    fontFamily: 'Montserrat',
                    lineHeight: '1.5rem',
                    fontWeight: '500',
                    color: '#091133',
                  }}
                  >   {contactUs.address_lines[1]}
                  </Typography>
                </GridItem>
                <GridItem>
                  <Typography
                   sx={{
                    textAlign: {
                      lg: 'left',
                      md: 'left',
                      sm: 'left',
                      xs: 'center'
                    },
                    fontSize: {
                      lg: '1rem',
                      md: '1rem',
                      sm: '1rem',
                      xs: '1.1rem'
                    }
                  }}
                  style={{
                    fontFamily: 'Montserrat',
                    lineHeight: '1.5rem',
                    fontWeight: '500',
                    color: '#091133',
                  }}
                  >  {contactUs.address_lines[2]}
                  </Typography>
                </GridItem>
                <GridItem>
                  <Typography
                     sx={{
                      textAlign: {
                        lg: 'left',
                        md: 'left',
                        sm: 'left',
                        xs: 'center'
                      },
                      fontSize: {
                        lg: '1rem',
                        md: '1rem',
                        sm: '1rem',
                        xs: '1.1rem'
                      }
                    }}
                    style={{
                      fontFamily: 'Montserrat',
                      lineHeight: '1.5rem',
                      fontWeight: '500',
                      color: '#091133',
                    }}
                  >  {contactUs.address_lines[3]}
                  </Typography>
                </GridItem>
              </GridItem>
            </GridContainer>

            {/* Email Section */}
            <GridContainer style={{ marginBottom: "2rem" }}>
              <GridItem md={3} sm={3} style={{ textAlign: "center", margin: "auto" }}>
                <img src="/img/resized_imgs/contact-us-email.png" alt="..." style={{ width: "1.75rem", height: "1.75rem", textAlign: "center", justifyContent: "center" ,boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}} />
              </GridItem>
              <GridItem md={9} sm={9}>
                <GridItem>
                  <Typography
                     sx={{
                      textAlign: {
                        lg: 'left',
                        md: 'left',
                        sm: 'left',
                        xs: 'center'
                      },
                      fontSize: {
                        lg: '1rem',
                        md: '1rem',
                        sm: '1rem',
                        xs: '1.1rem'
                      }
                    }}
                    style={{
                      fontFamily: 'Montserrat',
                      lineHeight: '1.5rem',
                      fontWeight: '500',
                      color: '#091133',
                    }}
                  >  {contactUs.email_ids[0]}
                  </Typography>
                </GridItem>
                <GridItem>
                  <Typography
                    sx={{
                      textAlign: {
                        lg: 'left',
                        md: 'left',
                        sm: 'left',
                        xs: 'center'
                      },
                      fontSize: {
                        lg: '1rem',
                        md: '1rem',
                        sm: '1rem',
                        xs: '1.1rem'
                      }
                    }}
                    style={{
                      fontFamily: 'Montserrat',
                      lineHeight: '1.5rem',
                      fontWeight: '500',
                      color: '#091133',
                    }}
                  > {contactUs.email_ids[1]}
                  </Typography>
                </GridItem>
              </GridItem>
            </GridContainer>

            {/* Phone No Section */}
            <GridContainer style={{ marginBottom: "2rem" }}>
              <GridItem md={3} sm={3} style={{ textAlign: "center", margin: "auto" }}>
                <img src="/img/resized_imgs/contact-us-call.png" alt="..." style={{ width: "1.75rem", height: "1.75rem", textAlign: "center", justifyContent: "center" ,boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}} />
              </GridItem>
              <GridItem md={9} sm={9}>
                <GridItem>
                  <Typography
                     sx={{
                      textAlign: {
                        lg: 'left',
                        md: 'left',
                        sm: 'left',
                        xs: 'center'
                      },
                      fontSize: {
                        lg: '1rem',
                        md: '1rem',
                        sm: '1rem',
                        xs: '1.1rem'
                      }
                    }}
                    style={{
                      fontFamily: 'Montserrat',
                      lineHeight: '1.25rem',
                      fontWeight: '500',
                      color: '#091133',
                      padding:"1rem"
                    }}
                  >   {contactUs.phone_no[0]}
                  </Typography>
                </GridItem>
              </GridItem>
            </GridContainer>

            {/* Working Hours Section */}
            <GridContainer style={{ marginBottom: "2rem" }}>
              <GridItem md={3} sm={3} style={{ textAlign: "center", margin: "auto" }}>
                <img src="/img/resized_imgs/contact-us-timing.png" alt="..." style={{ width: "1.75rem", height: "1.75rem", textAlign: "center", justifyContent: "center" , boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}} />
              </GridItem>
              <GridItem md={9} sm={9}>
                <GridItem>
                  <Typography
                     sx={{
                      textAlign: {
                        lg: 'left',
                        md: 'left',
                        sm: 'left',
                        xs: 'center'
                      },
                      fontSize: {
                        lg: '1rem',
                        md: '1rem',
                        sm: '1rem',
                        xs: '1.1rem'
                      }
                    }}
                    style={{
                      fontFamily: 'Montserrat',
                      lineHeight: '1.25rem',
                      fontWeight: '500',
                      color: '#091133',
                      padding:"1rem"
                    }}
                  >  {contactUs.working_hours}
                  </Typography>
                </GridItem>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div >
  );
}
