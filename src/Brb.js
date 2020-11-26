import React, {Fragment} from 'react';
import Product from "./Product";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Brb.css";
import Divider from '@material-ui/core/Divider';




  const supplyCondition = (

        <Fragment>
            <Container className ="container">
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   Size Range
                 </Col>
                 <Col md="6">3mm to 120mm (1/8"- 4-3/4")</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left ">
                 <Col xs lg="3" className="font-weight-bold">
                   Supply Condition
                 </Col>
                 <Col md="8">
                     <ul>
                         <li>Cold Drawn, Centreless Ground, Peeled & Polished</li>
                         <li>Rough Peeled or Smooth Turned bars</li>
                         <li>Surface finish Ra 0.5 μmm to 1.5 μmm max</li>
                         <li>Straightness from 0.5mm /mtr to 1mm/mtr. 240,400,600 Grit Belt Polish</li>
                     </ul>
                 </Col>
               </Row>

               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   Heat Treatment
                 </Col>
                 <Col md="7">Soft Annealing, Solution Annealing, Normalizing, Hardening & Tempering, Oil & Water Quenching</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   Bars End Finish
                 </Col>
                 <Col md="8">Free from Burs, smooth saw cut, one end OR both end chamfered with 45 deg</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left ">
                 <Col xs lg="3" className="font-weight-bold">
                   Specifications
                 </Col>
                 <Col md="8">As per EN, DIN, JIS, ASTM, BS, ASME, GHOST, Nace MRO175/ MRO 103.</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                    Grade
                 </Col>
                 <Col md="7">AISI 201, 202, 301, 302, 303, 304, 304L, 309, 310, 316, 316L,316Ti, 321,  321H, 347, 403, 410, 416, 420, 420B, 420C, 430, 430F, 431, 630, 15-5PH, 17-4PH, 1.4435, 317L, F51, F60, 2205</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   Rough Turned tol.
                 </Col>
                 <Col md="8">DIN 1013, EN 10060</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left ">
                 <Col xs lg="3" className="font-weight-bold">
                   Tolerance
                 </Col>
                 <Col md="8">h8, h9, h11, k11, k12, k13</Col>
               </Row>
               
            </Container>
            
     </Fragment>
          
    


      );


function Brb() {
    return (
        <div>
          
            <Product
             title = "Bright Round Bar"
             image = "https://i.pinimg.com/564x/62/a5/fa/62a5fa2b69688ca5a4c2f5003ec4067b.jpg"
             prod_details = {supplyCondition}
             
            />
        </div>
    )
}

export default Brb;
