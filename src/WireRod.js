import React, {Fragment} from 'react';
import Product from "./Product";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./table.css";
import "./Brb.css";




  const supplyCondition = (

        <Fragment>
             <Container className ="container">
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   <p>Supply Condition</p>
                 </Col>

                 <Col md="8">
                     <ul>
                        <li>Length upto 8 meters</li>
                        <li>100 % Ultrasonically tested</li>
                        <li>Free of surfae defects/cracks</li>
                        <li>100% tested through handled spectrometer</li>
                        <li>Free from radioactive elements, mercury, lead contamination </li>
                        <li>Hot rolled (black) surface</li>
                        <li>Spot grinded or fully grinded surface</li>
                        <li>Cold Sawable</li>
                      
                     </ul>
                 </Col>
               </Row>
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   Size
                 </Col>
                 <Col md="6">35mm, 40mm, 45mm, 50mm, 63mm, 75mm, 85mm, 100mm, 120mm</Col>
               </Row>
              
               
            </Container>
            
           
     </Fragment>
          
    


      );

function WireRod() {
    return (
        <div>
            <Product
             title = "Wire Rod (HRAP)"
             image = "https://5.imimg.com/data5/DA/YL/HX/SELLER-26509977/hot-rolled-annealed-pickled-wire-rods-hrap-condition-500x500.jpg"
            
             prod_details = {supplyCondition}
             
            />
        </div>
    )
}

export default WireRod;
