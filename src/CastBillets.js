import React, { Fragment } from 'react'
import Product from "./Product";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./table.css";
import "./Brb.css";
import Divider from '@material-ui/core/Divider';



    const myTable = (
        <table>
        <tr>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Size&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wt/Mtr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        </tr>
        <tr>
        <td>80mm x 80mm</td>
        <td>Square</td>
        <td>45</td>
        </tr>
        <tr>
        <td>100mm x 100mm</td>
        <td>Square</td>
        <td>75</td>
        </tr>
        <tr>
        <td>120mm x 120mm</td>
        <td>Square</td>
        <td>113</td>
        </tr>
        <tr>
        <td>140mm x 140mm</td>
        <td>Square</td>
        <td>152</td>
        </tr>
        <tr>
        <td>160mm x 160mm</td>
        <td>Square</td>
        <td>200</td>
        </tr>
        <tr>
        <td>200mm x 200mm</td>
        <td>Square</td>
        <td>314</td>
        </tr>
        
      </table>
      
      );
      
      const supplyCondition=(

        <Fragment>
          <Container className ="container">
            
               <Row className="justify-content-md-left">
                 <Col xs lg="3" className="font-weight-bold">
                   Supply Condition
                 </Col>

                 <Col md="8">
                     <ul>
                       <li>Length upto 9 meter</li>
                       <li>Spot grind or fully grind condition</li>
                       <li>Suitable for forging, Re-rolling, Ring Rolling & Up-setting</li>
                       <li>Marked with heat number, grade & size</li>
                       <li>Standard ASTM, ASME, EN, DIN</li>
                       <li>Free from radioactive elements & mercury, lead contamination</li>
                       <li>Saw end cuts</li>
            
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

    function CastBillets() {
    return (
        <div className="castbillets">
         
            <Product
              title = "CONTINUOUS CAST BILLETS / BLOOMS"
              image = "https://www.gopalgroup.com/wp-content/uploads/2018/08/product-real-Continuous-Cast-Billets-Blooms-1.png"
              prod_details = {supplyCondition}
         
             
            />

        </div>
    )
}

export default CastBillets;
