import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Brb.css";
import Product from "./Product";




  const supplyCondition = (

        <Fragment>
             <Container className ="container">
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   Supply Condition
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

function Rcs() {
    return (
        <div className ="rcs">
            <Product
             title = "Hot Rolled Round Cornered Squares (RCS)"
             image = "https://www.gopalgroup.com/wp-content/uploads/2018/10/product-real-Hot-Rolled-Round-Corner-Squares1.png"
            
             prod_details = {supplyCondition}
             
            />
            
        </div>
    )
}

export default Rcs
