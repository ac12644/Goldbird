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
                   Square Size Range
                 </Col>
                 <Col md="auto">5mm to 70mm</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">Hex Size Range</Col>
                 <Col md="auto">5mm to 50mm</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   Length
                 </Col>
                 <Col md="auto">3 to 6 meters</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   Tolerances
                 </Col>
                 <Col md="auto">h11, h12, h13</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   Surface Finish
                 </Col>
                 <Col md="auto">Cold Draw, Shot Blast & Drawn, 240 Grit Belt Polished</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                    Heat Treatment
                 </Col>
                 <Col md="auto">Annealed & Solution Annealed</Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   Bars End Finish
                 </Col>
                 <Col md="7">Free from Burs, smooth saw cut, One End or both end chamfered with 45 deg.</Col>
               </Row>
               
               
            </Container>
            
     </Fragment>
          
    


      );


function Sbrb() {
    return (
        <div>
        
            <Product
             title = "Square & Hexagonal Bright Bars"
             image = "https://www.venuswires.com/wp-content/uploads/2018/04/aluminumroundbar.jpg"
             prod_details = {supplyCondition}
             
            />
        </div>
    )
}

export default Sbrb
