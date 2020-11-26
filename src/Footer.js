import React from 'react'
import "./Footer.css";
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Divider from '@material-ui/core/Divider';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
    return (
        <div className="footer">
             <div className="contact_heading">
            <button>Contact Us</button>

            </div>
            <div className ="contact_section">
               <div className="contact_details">
                <p className="name">Om Veer Singh Rana (Director)</p>
                <p>Goldbird Export Import Pvt.Ltd.</p>
                <p>203 B- Block, Vishnu Plaza Appt</p>
                <p>Roadno.16, Gardanibagh, Patna-800002, Bihar </p>
                <p>India</p>
                <br/>
                <p className="call_section"><CallIcon className="call_icon"/> (+91)-8987381906</p>
                <p className="call_section"><MailOutlineIcon className="call_icon"/><a href="mailto:name@rapidtables.com"> goldbirdimportexport@gmail.com</a></p>

              </div>

           

            </div>
            
            <br/>
            <Divider variant="middle" />
            <br/>
            <div className="copyright_section">
                <p><CopyrightIcon/> <strong>GOLDBIRD EXPORT IMPORT PVT LTD.</strong>  All Rights Reserved (Terms of Use)</p>

            </div>
            
        </div>
    )
}

export default Footer;
