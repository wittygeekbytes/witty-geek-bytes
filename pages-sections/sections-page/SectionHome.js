import React from "react";
import { makeStyles } from "@mui/styles";
import headersStyle from "../../styles/jss/novel-logiks/pages/sectionsSections/headersStyle.js";
import { Box, Button, Typography } from "@mui/material";
import Router from "next/router";
import { TypeAnimation } from "react-type-animation";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders(props) {
  const classes = useStyles();

  const routeToAiDetails = () => {
    Router.push("/ai-details");
  };

  return (
    <div className="cd-section" {...props} style={{ marginTop: "5rem" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src="/img/lsk_imgs/business_home.png"
          alt="Background"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -2,
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: -1,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: 2,
          }}
        >
          {/* Animated Gradient Text */}
          <Box
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: { lg: "3.5rem", sm: "2rem", xs: "2rem" },
              lineHeight: { lg: "4.125rem", sm: "3rem", xs: "3rem" },
              backgroundColor: 'white',
              // backgroundImage: 'linear-gradient(180deg, #FFE53B 0%, #FF2525 78%)',
WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              maxWidth: "90%",
              mb: 2,
            }}
          >
            <TypeAnimation
              sequence={[
                "We provide Digital Solutions cutting across Sectors.",
                2000,
                "Transformative AI capabilities helps enterprises gather escape velocity to the future.",
                2000,
                "Propelling business and lives like never before.",
                2000,
                () => {}, // loop reset
              ]}
              speed={40}
              repeat={Infinity}
              deletionSpeed={30}
              wrapper="span"
            />
          </Box>
          <Button
            variant="contained"
            onClick={routeToAiDetails}
            sx={{
              textTransform: "none",
              color: "#FFFFFF",
              borderRadius: "5px",
              fontSize: "1.25rem",
              height: "2.5rem",
              fontWeight: 600,
              width: { lg: "10rem", xs: "12.5rem" },
              background: "linear-gradient(135deg, #F4D03F 0%, #FF8008 100%)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                background:
                  "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.25)",
              },
            }}
          >
            Explore
          </Button>
        </Box>
      </Box>
    </div>
  );
}
