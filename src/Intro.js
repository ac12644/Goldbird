import React from 'react'
import "./Intro.css";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import BusinessIcon from '@material-ui/icons/Business';
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({ 
  para: {
    fontSize: 'medium',
    fontWeight: '540',
    marginBottom: '-7px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'small'
      
    }

  }}));


function Intro() {
  const classes = useStyles();
  const theme = useTheme();

    return (
        <div className="intro">
            <p>Welcome to Goldbird</p>
            <div className="icons">
                <div className="child">
                  <p className={classes.para}><BusinessCenterIcon className="material_icons"/>Nature of Business</p>
                  <a>Import-Export</a>

                </div>
                <div className="child">
                  <p className={classes.para}><BusinessIcon className="material_icons"/>Year of Establishment</p>
                  <a>2020</a>

                </div>
                <div className="child">
                  <p className={classes.para}><DescriptionIcon className="material_icons"/>GST No.</p>
                  <a>10AAICG3804D1ZB</a>

                </div>
               
               
               

            </div>

            <div className="about_company">
              <br></br>
              <br></br>
                

            </div>
            
        </div>
    )
}

export default Intro
