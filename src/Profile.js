import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from './ContactForm';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '30px',
      marginLeft: '20px',
      marginRight: '20px',
  
    },
   
    heading: {
    
      color: '#324856',
      font: 'bold',
      marginBottom: '30px',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '10px',
    }
      

    },
    h6: {
    
        color: '#ffff',
        font: 'bold',
        background: 'grey',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '5px',
        paddingBottom: '5px',
      
        borderRadius: '5px 5px 0 0',
        width: '90%',
        [theme.breakpoints.down('sm')]: {
           width: '100%'
        }
  
      },
    para: {
      flexGrow: 1,
      textAlign: 'justify',
      fontSize: '14px',
    
   
      color: 'black',
      '&:hover': {
        color: 'black',
        textDecoration: 'none',
      }
      
    },
  
    table: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'black',
 
    
  
      
    },
    container: {
        justifyContent: 'flex-start',
        '&:hover': {
      
            color: 'black',
           
            pointerEvents: 'none',
          },
        
        
    }
   
  }));


function Profile() {
    const classes = useStyles();
    return (
        <div className={classes.root} >

            <h5 className={classes.heading}>Profile</h5>
            <p className={classes.para}>
                Established in the year of <strong>2020</strong>, we "<strong>Goldbird ExIm Limited</strong>" are overwhelmed among the esteemed companies of the industry actively occupied in <strong>manufacturing, exporting and supplying</strong> a far-flung collection of <strong>Industrial Steel Products</strong>. Offered assemblage of products consists of <strong>Hot Dip Galvanize Steel, Cold Rolled Steel - CRCA and Stainless Steel Strips</strong>. These products are widely acclaimed in the market for excellent functionality, specific controls system, and high load bearing capacity with maintenance-free possibilities. 
                To produce these products in full compliance with the set production standards, our experts consider only premium grade raw material provided by the trusted and authenticated suppliers of the industry.
                We are a consumer-focused company in this domain including cutting-edge infrastructure system. To please our customers in most efficient manner, we are giving these products in accordance to their particular conditions. We have financed all the modern technology based machines and tools needed for the fabrication of our offered products. We have appointed a team of adroit experts to build our business operations as per the contemporary industry norms and standards. Prior to their supply, all the fabricated products are transferred through the credible quality assurance inspections to assure that product is as per the accepted quality norms. We export our products to <strong>UAE, Abu Dhabi, Germany, Singapore, Dubai, Italy, Belgium, Vietnam</strong>.
                </p>

            <h5 className={classes.heading}>Company Profile</h5>

            <div className = {classes.table}>
            <h6 className={classes.h6}>Basic Information</h6>
           
               
                <Container className ={classes.container}>
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Nature of business
                 </Col>
                 <Col md="6">Exporter</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Additional Business
                 </Col>
                 <Col md="6"><ul><li>Exporter</li><li>Trader</li></ul></Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Company CEO
                 </Col>
                 <Col md="6">Vivek K. Chauhan</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Registered Address
                 </Col>
                 <Col md="6">203 B- Block, Vishnu Plaza Appt, Roadno.16, Gardanibagh, Patna-800002, Bihar</Col>
               </Row>
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Industry
                 </Col>
                 <Col md="6">Trading of Industrial Steel Products</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Total Number of Employees
                 </Col>
                 <Col md="6">1-10 people</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Year of Establishment
                 </Col>
                 <Col md="6">2020</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Legal Status of Firm
                 </Col>
                 <Col md="6">Private Limited</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Promoter
                 </Col>
                 <Col md="6">Vivek K. Chauhan</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Annual Turnover
                 </Col>
                 <Col md="6">50lacs- 1crore</Col>
               </Row>
               <Divider variant="middle" />

                 </Container>


            </div>

            <div className = {classes.table}>
            <h6 className={classes.h6}>Trade & Market</h6>
            <Container className ={classes.container}>
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Export Percentage
                 </Col>
                 <Col md="6">upto 20%</Col>
               </Row>
               </Container>

            </div>
            <div className = {classes.table}>
            <h6 className={classes.h6}> Infrastructure</h6>
            <Container className ={classes.container}>
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Location Type
                 </Col>
                 <Col md="6">URBAN</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Building Infrastructure
                 </Col>
                 <Col md="6">Permanent</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Size of Premises
                 </Col>
                 <Col md="6">1045 sq.ft.</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Space Around
                 </Col>
                 <Col md="6">Front Porch</Col>
               </Row>
               </Container>

            </div>
            <div className = {classes.table}>
            <h6 className={classes.h6}>Company USP</h6>
            <Container className ={classes.container}>
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Quality Measures / Testing Facilities
                 </Col>
                 <Col md="6">Yes</Col>
               </Row>
               </Container>

            </div>

            <div className = {classes.table}>
            <h6 className={classes.h6}>Statutory Profile</h6>
            <Container className ={classes.container}>
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 TAN No.
                 </Col>
                 <Col md="6">PTNG06683F</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 GST No.
                 </Col>
                 <Col md="6">10AAICG3804D1ZB</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                  CIN No.
                 </Col>
                 <Col md="6">U52609BR2020PTC046760</Col>
               </Row>
               
               </Container>

            </div>
            <div className = {classes.table}>
            <h6 className={classes.h6}>Packaging/Payment and Shipment Details</h6>
            <Container className ={classes.container}>
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                 Payment Mode
                 </Col>
                 <Col md="6">
                     <ul>
                         <li>Cash</li>
                         <li>Cheque</li>
                         <li>Credit Card</li>
                         <li>DD</li>
                         <li>Online</li>
                     </ul>
                    </Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                  Shipment Mode
                 </Col>
                 <Col md="6"> 
                       <ul>
                         <li>By Road</li>
                         <li>By Air</li>
                    
                     </ul></Col>
               </Row>
               </Container>

            </div>
            <div className = {classes.table}>
            <h6 className={classes.h6}>Quality Assurance</h6>
            <Container className ={classes.container}>
               <Row className="justify-content-md-left">
               Our firm is focused in delivering its customers a range of products which is remarkably efficient and are produced by using raw materials which are acquired from authorized vendors. When it comes in quality we don’t reconcile with any requirements and hence are very regular in our performance. The products which we make are especially checked by the quality controllers who are proficient enough and maintain the industry parameters in every product.
               </Row>
               </Container>

            </div>
            <div className = {classes.table}>
            <h6 className={classes.h6}>Our Team</h6>
            <Container className ={classes.container}>
               <Row className="justify-content-md-left">
               We have a team of hard working professionals who stringently manage to bring finishing in each given product. They rigorously observe and examine all the offered products starting from the first phase of production till the final delivery to our clients. Further, they establish that all the provided products are manufactured in accordance with the globally affirmed standards established by the market. We have in our team, production engineers, quality experts, warehousing agents, sales and marketing professionals, and R&D experts. With the collaboration of our employees, we have been capable of meeting the discrete requirements of our customers efficiently as per their distinct demands and needs.

               </Row>
               </Container>

            </div>

            <div className = {classes.table}>
            <h6 className={classes.h6}>Why Us?</h6>
            <Container className ={classes.container}>
               <Row className="justify-content-md-left">
                  We are new company in market with skilled and experienced staff members. As a new company, it's important for us to gain trust of our clients. So, we compare produced quality from from five manufactures and provide the best among them to our clients. We believe in long term business relations.
               </Row>
               </Container>

            </div>

            <ContactForm/>
        </div>
    )
}

export default Profile
