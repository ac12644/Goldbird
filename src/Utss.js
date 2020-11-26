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
               Features
             </Col>
             <Col md="auto">
                 <ul>
                     <li>Durable finish standards</li>
                     <li>High resistance to oxidation</li>
                     <li>Repellent to corrosive agents</li>
                 </ul>
               
            </Col>
           </Row>
           
           
        </Container>
        
 </Fragment>
      



  );

function Utss() {
    return (
        <div>
            
            <Product
             title = "Ultra Thin Steel Strips"
             image = "https://2.imimg.com/data2/XO/JO/MY-/13-250x250.jpg"
             prod_details = {supplyCondition}
             
            />
        </div>
    )
}

export default Utss;
