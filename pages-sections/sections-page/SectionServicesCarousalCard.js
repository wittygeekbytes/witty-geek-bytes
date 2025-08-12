/*eslint-disable*/
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardFooter from "/components/Card/CardFooter.js";
import Button from "/components/CustomButtons/Button.js";
import { services } from "../../data/services-data";
import { Typography } from "@mui/material";


const SectionServicesCarousalCard = (props)=> { 
    console.log("props Passed to Carousal Card : ",props);
    const {index} = props
    console.log("props Passed to Carousal Card : ",index);
    return (
        <GridItem xs={12} sm={6} md={4}>
            <Card plain blog>
                <CardHeader plain image>
                    <img src={services[index].serviceImageUrl} alt="..." style={{ height: "15rem"}} />
                </CardHeader>
                <CardBody plain style={{marginBottom: "0.1rem"}}>
                    <Typography style={{
                        fontFamily: 'Poppins',
                        fontSize: '1.125rem',
                        lineHeight: '1.5rem',
                        fontWeight: '600',
                        textAlign: "left",
                        color: '#212121',
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        marginBottom:"0.25rem"
                    }}>
                        {services[index].serviceTitle}
                    </Typography>
                    <Typography style={{
                        fontFamily: 'Poppins',
                        fontSize: '1rem',
                        lineHeight: '1.5rem',
                        fontWeight: '500',
                        textAlign: "left",
                        color: '#212121',
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                    }}>
                        {services[index].serviceOneLiner}
                    </Typography>
                </CardBody>
                <CardFooter>
                    <Button  style={{width : "100%", background:"#00C3CC" ,fontSize:"1rem", fontWeight:"400", borderRadius:"0.5rem"}} disabled = {!services[index].serviceTitle.startsWith("Front") }>KNOW MORE</Button>
                </CardFooter>
            </Card>
        </GridItem>
    );
}

export default SectionServicesCarousalCard

