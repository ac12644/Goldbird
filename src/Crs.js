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
             Length
             </Col>
             <Col md="6">Full width coil/sheet or as per customer requirement</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
             Thickness
             </Col>
             <Col md="6">0.01mm to 3mm</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left ">
             <Col xs lg="3" className="font-weight-bold">
             Width
             </Col>
             <Col md="6">
             6mm to 610mm
             </Col>
           </Row>

           <Divider variant="middle" />
           <Row className="justify-content-md-left ">
             <Col xs lg="3" className="font-weight-bold">
               Specification
             </Col>
             <Col md="6">
                ASTM, DIN, IS, JIS, EN, ISO
             </Col>
           </Row>

           <Divider variant="middle" />
           <Row className="justify-content-md-left ">
             <Col xs lg="3" className="font-weight-bold">
             Coil Weight (MT)
             </Col>
             <Col md="6">
             Up to 30 MT (1 to 18 kg/mm width)
             </Col>
           </Row>

           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
                Grades
             </Col>
             <Col md="7">
                <ul>
                     <li>Low Carbon CRCA Grades</li>
                     <li>Super EDD/DD/D, SPCX, SPCEN, SPCD, SPCC, non-aging, IF-High,DC01/DC02/DC04/DC05/DC06,FE410/FE510</li>
                     <li>Strength steel(IF-HSS), High Strength Low Alloy Steel (HSLA), viz., ST -42,ST-45, ST-52, SAPH-400/41O, QSTE 410, QSTE 510, Steel for Porcelain Enamelling</li>
                     <li>Steel for Porcelain Enamelling, Corrosion Resistant Steel, viz., Tin Mill Black Plate (TMBP).</li>
                     <li>Corrosion Resistant Steel, viz., Tin Mill Black Plate (TMBP)</li>
                     <li>ELECTRICAL Grades Elec -I, Elec-n, Elec-nI, Semi Processed Elect. Steel</li>
                 </ul>
             </Col>
           </Row>
          
          
        </Container>
        
 </Fragment>

  );

function Crs() {
    return (
        <div>
            <Product
             title = "Cold Rolled Steel"
             image = "https://5.imimg.com/data5/KM/OZ/SS/SELLER-37774/cold-rolled-steel-500x500.jpg"
             prod_details = {supplyCondition}
             
            />
            
        </div>
    )
}

export default Crs
