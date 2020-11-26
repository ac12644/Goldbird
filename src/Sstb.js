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
               Condition
             </Col>
             <Col md="auto">Cold Drawn, Threading</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">Grades</Col>
             <Col md="auto">304, 304L, 316, 316L, B8, B8M, A2, A4</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
               Diameter
             </Col>
             <Col md="auto">Metric M6 to M48, Inches- 1/4" to 2"</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
               Threading Method
             </Col>
             <Col md="auto">Thread Rolling</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
               Threading Condition
             </Col>
             <Col md="auto">Fully Threaded</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
                Thread Type
             </Col>
             <Col md="auto">Class-1 & Class-2 (low and high tensile threaded rod)</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
               Length
             </Col>
             <Col md="7">2mtr, 3mtr, 4mtr, 6mtr & 12ft.</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
               Length Tolerance
             </Col>
             <Col md="7">-0/+200mm(-0"/+8")</Col>
           </Row>
           
           
        </Container>
        
 </Fragment>
      



  );

function Sstb() {
    return (
        <div>
            <Product
             title = "Stainless steel threaded bars"
             image = "https://5.imimg.com/data5/GM/JL/KC/SELLER-1232556/stainless-steel-threaded-rod-500x500.jpg"
             prod_details = {supplyCondition}
             
            />
        </div>
    )
}

export default Sstb
