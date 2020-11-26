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
             Thickness
             </Col>
             <Col md="6">1.6mm to 8mm</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left ">
             <Col xs lg="3" className="font-weight-bold">
             Width
             </Col>
             <Col md="6">
                7mm to 1700mm (Max)
             </Col>
           </Row>

           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
             Coil Weight (MT)
             </Col>
             <Col md="6">Up to 30 MT (1 to 18 kg/mm width)</Col>
           </Row>
           <Divider variant="middle" />
           
           <Row className="justify-content-md-left ">
             <Col xs lg="3" className="font-weight-bold">
               Specifications
             </Col>
             <Col md="8">As per JIS/BIS/ ASTM/EN Standards</Col>
           </Row>
           <Divider variant="middle" />
           <Row className="justify-content-md-left">
             <Col xs lg="3" className="font-weight-bold">
                Grade
             </Col>
             <Col md="7">
                <ul>
                     <li>Low Carbon CRCA Grades</li>
                     <li>Super EDD/DD/D, SPCX, SPCEN, SPCD, SPCC, non-aging, IF-High, DC01 / DC02 /DC04, ST12-14,Fe-410,Fe510.</li>
                     <li>Strength steel(IF-HSS), High Strength Low Alloy Steel (HSLA), viz., ST -42,ST-45, ST-52, SAPH-400/41O, QSTE 320, QSTE 420, QSTE 500, QSTE 540,</li>
                     <li>Steel for Porcelain Enamelling, Corrosion Resistant Steel, viz., Tin Mill Black Plate (TMBP).</li>
                     <li>ELECTRICAL Grades Elec –I, Elec-n, Elec-nI, Semi Processed Elect. Steel.</li>
                 </ul>
             </Col>
           </Row>
          
          
         
           
        </Container>
        
 </Fragment>
      



  );

function Hrs() {
    return (
        <div>
            <Product
             title = "Hot Rolled Steel"
             image = "https://pooiasteel.com/hlimage/pooiasteel1397-8-19-9-4-41.jpg"
            
             prod_details = {supplyCondition}
             
            />
        </div>
    )
}

export default Hrs
