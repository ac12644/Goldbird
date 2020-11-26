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
                 <Col md="6">16mm - 120mm</Col>
               </Row>
              
               
            </Container>
           
     </Fragment>
          
    


      );

function Hrrb() {
    return (
        <div className="hrrb">
             <Product
             title = "Hot Rolled Round Bars"
             image = "https://www.gopalgroup.com/wp-content/uploads/2018/08/product-real-Hot-Rolled-Round-Bars-1.png"
        
             prod_details = {supplyCondition}
             
            />
            
        </div>
    )
}

export default Hrrb;
