import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({

  item: {
    color: 'black',
    '&:hover': {
      
      color: 'black',
      textDecoration: 'none',
    },
  },
  button: {
    alignItems: 'center',
    display: 'flex',
    
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      fontWeight: '500',
      
      
    },

   
  }
 
}));
export default function SimpleMenu() {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <p className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Products<ArrowDropDownIcon/>
      </p>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to ="/castbillets" className={classes.item}>Continuous Cast Billets / Blooms</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/forging" className={classes.item}>Forging Quality Ingots</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/rcs" className={classes.item}>Hot Rolled Round Cornered Squares (RCS)</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/hrrb" className={classes.item}>Hot Rolled Round Bars</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/wirerod" className={classes.item}>Wire Rod (HRAP)</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/brb" className={classes.item}>Bright Round Bar</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/sbrb" className={classes.item}>Square & Hexagonal Bright Bars</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/crs" className={classes.item}>Cold Rolled Steel</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/utss" className={classes.item}>Ultra Thin Steel Strips</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/hrs" className={classes.item}>Hot Rolled Steel</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/hrp" className={classes.item}>Hot Rolled Pickled</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/castbillets" className={classes.item}>Cold Rolled Steel</Link></MenuItem>
      </Menu>
    </div>
  );
}
