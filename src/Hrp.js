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
             Type
             </Col>
             <Col md="6">Coil and Sheets</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
             Thickness
             </Col>
             <Col md="6">0.05 - 3.20 mm</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left ">
             <Col xs lg="3" className="font-weight-bold">
             Width
             </Col>
             <Col md="6">
                   5mm - 1560 mm
             </Col>
           </Row>

           <Divider variant="middle" />
           <Row className="justify-content-md-left ">
             <Col xs lg="3" className="font-weight-bold">
             Inner diameter
             </Col>
             <Col md="6">
                 325,400,508 mm
             </Col>
           </Row>

           <Divider variant="middle" />
           <Row className="justify-content-md-left ">
             <Col xs lg="3" className="font-weight-bold">
             Outer diameter
             </Col>
             <Col md="6">
             1900 mm max
             </Col>
           </Row>

           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
             Thickness Tolerance
             </Col>
             <Col md="6">+/- 0.5% of Nominal Thickness at centre line for 98.5% of the coil length</Col>
           </Row>
           <Divider variant="middle" />
           
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
                Grade
             </Col>
             <Col md="7">
                IS513(O, D, DD, EDD), JISG3141 (SPCC, SPCD, SPCE, SPECEN), BS1499 (CR4, CR3, CR2, CR1), DIN1623 (St12, St13, St14), ASTM(CQ, DQ, EDQQ), EN10130 (FEP01, FEP03, FEP04, FEP05)
             </Col>
           </Row>
          
          
         
           
        </Container>
        
 </Fragment>
      



  );

  
function Hrp() {
    return (
        <div>
             <Product
             title = "Hot Rolled Pickled"
             image = "https://4.imimg.com/data4/QT/XM/MY-3759165/hot-rolled-pickled-and-oiled-steel-coil-500x500.jpg"
             prod_details = {supplyCondition}
             
            />
        </div>
    )
}

export default Hrp
