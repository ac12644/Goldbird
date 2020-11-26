import React from 'react'
import "./ContactForm.css";
import CreateIcon from '@material-ui/icons/Create';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';

function ContactForm() {
    return (

<div class="container">
    <p>Tells us what you are looking for ?</p>

    <label for="subject"><CreateIcon/> Describe your requirement in detail:</label>
    <textarea id="subject" name="subject" placeholder="describe here..." ></textarea> 
  
    <label for="name"><PersonIcon/> Your Name: </label>
    <input type="text" id="fname" name="firstname" placeholder="your full name..."/>

    <label for="email"><EmailIcon/> Your E-mail: </label>
    <input type="email" id="email" name="firstname" placeholder="your email address..."/>


    

    <input type="submit" value="Submit"/>

</div>

        
    )
}

export default ContactForm;
