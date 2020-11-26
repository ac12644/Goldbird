import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Link } from "react-router-dom";
import "./Home.css";
import { makeStyles, useTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({ 
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    paddingBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      
    }

  }}));


function Home() {
  const classes = useStyles();
  const theme = useTheme();
    return (
        <div className="home">
            <div className="home_heading">
            <p>Industrial Steel Products</p>

            </div>
            

            <div className={classes.root}>
               <div className="grid-item">
                
              <Link to ="/castbillets"><p><ArrowRightIcon/>Continuous Cast Billets / Blooms</p></Link>
              
               </div>

               <div className="grid-item">
                
               <Link to ="/forging"><p><ArrowRightIcon/>Forging Quality Ingots</p></Link>

               </div>

                <div className="grid-item">
                
                <Link to ="/rcs"><p><ArrowRightIcon/>Hot Rolled Round Cornered Squares (RCS)</p></Link>

               </div> 
               <div className="grid-item">
                
               <Link to ="/hrrb"><p><ArrowRightIcon/>Hot Rolled Round Bars</p></Link>
             </div> 
             <div className="grid-item">
                
                <Link to ="/wirerod"><p><ArrowRightIcon/>Wire Rod (HRAP)</p></Link>
              </div> 
              <div className="grid-item">
                
                <Link to ="/brb"><p><ArrowRightIcon/>Bright Round Bar</p></Link>
              </div> 

              <div className="grid-item">
                
                <Link to ="/hrrb"><p><ArrowRightIcon/>Hot Rolled Round Bars</p></Link>
              </div> 

              <div className="grid-item">
                
                <Link to ="/sbrb"><p><ArrowRightIcon/>Square & Hexagonal Bright Bars</p></Link>
              </div>

              <div className="grid-item">
                
                   <div class="dropdown">
                    <p><ArrowRightIcon/>Cold Rolled Steel</p>
                    <div class="dropdown-content">
                      <Link to ="/utss" className="link">Ultra Thin Steel Strips</Link>
                      <Link to ="/hrs"className="link">Hot Rolled Steel</Link>
                      <Link to ="/hrp"className="link">Hot Rolled Pickled</Link>
                      <Link to ="/crs"className="link">Cold Rolled Steel</Link>
                    </div>
                  </div>
              </div>

           

            </div>
            
            


        </div>
    )
}

export default Home;
