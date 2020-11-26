import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menubar2 from "./Menubar2";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
 
  title: {
    fontWeight: 'bold',
  },
  logo: {
    flexGrow: 1,
    marginRight: '15px',
    fontWeight: "bolder",
    color: 'black',
    '&:hover': {
      color: 'black',
      textDecoration: 'none',
    }
    
  },

  links: {
    display: 'flex',
    alignItems:'center',
    color: 'black',
    fontSize: 'medium',
    justifyContent: 'space-between',
    

    [theme.breakpoints.down('sm')]: {

      fontSize: '14px',
      justifyContent: 'space-evenly',
      marginRight: '-10px',
      marginLeft: '-16px'
      
    },
     link: {
      '&:hover': {
        color: 'black',
        textDecoration: 'none',
      
      },
     }
  },
 
}));

 function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default">
        <Toolbar>
         
         <Link to ="/" className={classes.logo}>
           <Typography variant="h6" className={classes.title} color="black">
            Goldbird
          </Typography>
          </Link> 
         <div className={classes.links}>
         <Link to ="/profile"><p className= {classes.link}> Profile</p></Link>
             <Menubar2/>
             <p className= {classes.link}>Contact Us</p>
      

         </div>
          
          
     
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar;
