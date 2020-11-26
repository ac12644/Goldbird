import React from 'react';
import "./Product.css";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';




function Product({title,image,prod_details,table,text}) {
    return (
        <div className= "product">
          <div className="checkoutProd">
            <p className ="checkoutProd_title"><ArrowRightIcon className="arrow_icon"/>{title}</p>
            <img className="checkoutProd_image" src={image} alt=""/>
            <div className="checkoutProd_info">
               
               <p className="checkoutProd_details">
                   
                  {prod_details}
                  
                </p>
                
                <p> {table}</p>

           
            </div>
        </div>
                              
            
        </div>
    )
}

export default Product;
