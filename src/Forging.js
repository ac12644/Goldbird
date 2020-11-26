import React, { Fragment } from 'react';
import Product from "./Product";
import "./table.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Brb.css";
import Divider from '@material-ui/core/Divider';






const myTable = (
    <table>
    <tr>
    <th>Ingot Size(inch)</th>
    <th>Shape</th>
    <th>Ingot Weight (kg)</th>
    </tr>
    <tr>
    <td>8" x 9" x 52"</td>
    <td>Square</td>
    <td>500</td>
    </tr>
    <tr>
    <td>9" x 11" x 52"</td>
    <td>Square</td>
    <td>740</td>
    </tr>
    <tr>
    <td>11" x 12" x 52"</td>
    <td>Square</td>
    <td>1050</td>
    </tr>
    <tr>
    <td>14" x 17" x 72"</td>
    <td>Square</td>
    <td>2400</td>
    </tr>
    <tr>
    <td>16" x 20" x 55"</td>
    <td>Square</td>
    <td>2500</td>
    </tr>
    <tr>
    <td>20" x 24" x 72"</td>
    <td>Square</td>
    <td>4900</td>
    </tr>
    
  </table>
  );

  const supplyCondition = (

        <Fragment>
              <Container className ="container">
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   Supply Condition
                 </Col>

                 <Col md="8">
                     <ul>
                       <li>Spot Grinded or Fully Grinded Condition</li>
                       <li>Free form surface defects/cracks</li>
                       <li>100% tested through handled spectrometer</li>
                       <li>Every piece is marked with heat number, grade, size and weight</li>
                       <li>Free from radioactive elements, mercury, lead contamination </li>
                       <li>Cropped Ends</li>
                       <li>Ingots are supplied with smooth ends</li>
                     </ul>
                 </Col>
               </Row>
               <Divider variant="middle" />
               <Row className="justify-content-md-left">

                {myTable}
               </Row>
              
               
            </Container>
      
     </Fragment>
          
    


      );
      

      

function Forging() {
    return (
        <div className="forging">
            <Product
             title = "FORGING QUALITY INGOTS"
             image = "https://www.gopalgroup.com/wp-content/uploads/2018/10/product-real-Forging-Quality-Ingots1.png"
             prod_details = {supplyCondition}
            
            />


            
        </div>
    )
}

export default Forging;
