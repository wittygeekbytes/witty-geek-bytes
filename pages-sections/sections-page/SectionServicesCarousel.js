/*eslint-disable*/
import React from "react";
import Router from "next/router";
// nodejs library that concatenates classes
import makeStyles from "@mui/styles/makeStyles";
import Carousel from "react-slick";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import featuresStyle from "/styles/jss/novel-logiks/pages/sectionsSections/featuresStyle.js";
import { services } from "../../data/services-data";
import SectionServicesCarousalCard from "./SectionServicesCarousalCard";


const useStyles = makeStyles(featuresStyle);

export default function SectionServicesCarousel() {
  const classes = useStyles();
  console.log("Courses Data : ", services)
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  const showAllCourses = ()=>{
    console.log("Routing to /service-details Page ");
    Router.push("/service-details");
  }

  const routeToContactUs = ()=>{
    console.log("Routing to /contactUs Page ");
    Router.push("/sections#contactUs");
  }
  
  return (
    <>
      <Header
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="info"
        disableGutters={true}
      />
      <div className={classes.container}>
        <Carousel {...settings}>
          {/* <div >
            <GridContainer>
             <SectionServicesCarousalCard index ={0}/>
             <SectionServicesCarousalCard index ={1}/>
             <SectionServicesCarousalCard index ={2}/>
            </GridContainer>
          </div>
          <div >
            <GridContainer>
              <SectionServicesCarousalCard index ={3}/>
             <SectionServicesCarousalCard index ={4}/>
             <SectionServicesCarousalCard index ={5}/>
            </GridContainer>
          </div> */}
           <div >
            <GridContainer>
              {services.map((each,index)=> <SectionServicesCarousalCard index ={index}/>)}
             {/* <SectionServicesCarousalCard index ={0}/> */}
            </GridContainer>
          </div>
       
        </Carousel>
      </div>
    </>
  );
}
