import React from "react";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import { makeStyles } from '@mui/styles';
import headersStyle from "/styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Typography, Divider, Box, Paper } from "@mui/material";
import Router from "next/router";
import { contactUs } from "../../data/contact-us-data";

const useStyles = makeStyles(headersStyle);

export default function SectionContactUs({ ...rest }) {
  const classes = useStyles();

  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Title Section */}
        <GridContainer sx={{ mb: 4, mt: 6 }}>
          <GridItem md={6}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Montserrat',
                fontWeight: 700,
                color: '#112A46',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Contact Us
            </Typography>
            
          </GridItem>
        </GridContainer>

        {/* Main Content */}
        <GridContainer spacing={4}>
          {/* Left Column */}
          

          {/* Right Column (Card Style) */}
          <GridItem >
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, backgroundColor: '#f9fafc' }}>
              {/* Address */}
              {renderContactItem("/img/resized_imgs/contact-us-office.png", contactUs.address_lines)}

              {/* Email */}
              {renderContactItem("/img/resized_imgs/contact-us-email.png", contactUs.email_ids)}

              {/* Phone */}
              {renderContactItem("/img/resized_imgs/contact-us-call.png", contactUs.phone_no)}
             
            </Paper>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

/* Reusable Contact Item */
function renderContactItem(iconSrc, lines) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <Box
        sx={{
          minWidth: 50,
          minHeight: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: '50%',
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.1)',
          mr: 2
        }}
      >
        <img src={iconSrc} alt="icon" style={{ width: 28, height: 28 }} />
      </Box>
      <Box>
        {lines.map((line, i) => (
          <Typography
            key={i}
            sx={{
              fontFamily: 'Montserrat',
              fontSize: '1rem',
              fontWeight: i === 0 ? 600 : 500,
              color: '#091133',
              lineHeight: 1.4
            }}
          >
            {line}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
