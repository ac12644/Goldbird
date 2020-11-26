import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Banner.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from 'react-bootstrap/Button';

function Banner () {
    return (
        <div className="banner">
           <CssBaseline />
      <Container fixed>
      <Typography component="div" style={{   marginTop: '0px', marginBottom:'0px', justifyContent:'center', boxShadow:'0 10px 10px rgba(0,0,0,0.6)' }}>
          <Carousel>
             
             <Carousel.Item>
            
            
                  <img
                   className="d-block mw-100 mh-100 "
                   src="https://www.steelgroup.com/wp-content/uploads/2018/04/steelgroup_header_mab_products.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="banner_heading">
              <h5>First slide label</h5>
              <Button className="info_button"variant="info">Get Quote</Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            
            
            <img
             className="d-block mw-100 mh-100 "
             src="https://www.steelgroup.com/wp-content/uploads/2018/04/steelgroup_header_mab_products.jpg"
        alt="First slide"
      />
      <Carousel.Caption className="banner_heading">
        <h5>First slide label</h5>
        <Button className="info_button"variant="info">Get Quote</Button>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
            
            
            <img
             className="d-block mw-100 mh-100 "
             src="https://www.steelgroup.com/wp-content/uploads/2018/04/steelgroup_header_mab_products.jpg"
        alt="First slide"
      />
      <Carousel.Caption className="banner_heading">
        <h5>First slide label</h5>
        <Button className="info_button"variant="info">Get Quote</Button>
      </Carousel.Caption>
    </Carousel.Item>
  
  
</Carousel> 
</Typography>
</Container>      
        </div>
    )
}

export default Banner;
