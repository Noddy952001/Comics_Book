import React from "react";
import { Link } from "react-router-dom";





export const Checkout = () => {
    
    const payment = () => {
        alert("Payment sucessful")
    }


    return(

        <div style={{
           
        }}>
            <div style={
                {
                    margin : "auto",
                    backgroundColor : "black",
                    width : "450px",
                    height : "450px",
                    borderRadius : "10px"

                }
            }>
                <h1 style={{color : "white" , 
                    textAlign : "center"
                }} >
                     CREDIT CARD CHECKOUT
                </h1>

                <form action="">

                    <label style={{color : "white" , marginLeft : "20px"}}> Cardholder Name</label> <br />
                    <input style={{backgroundColor : "black" , color:"white", borderColor : "white" , borderRadius : "10px" , width : "80%" ,height:"30px",marginLeft:"20px"}} type="text" name="" id="" /> <br /><br />

                    <label style={{color : "white" , marginLeft : "20px"}}>Account Number</label> <br />
                    <input style={{backgroundColor : "black" , color:"white", borderColor : "white" , borderRadius : "10px" , width : "80%" ,height:"30px",marginLeft:"20px"}} type="text" name="" id="" /><br /><br />
                  
                    <label style={{color : "white" , marginLeft : "20px"}}> Expiration Date </label> <br />
                    <input style={{backgroundColor : "black" , color:"white", borderColor : "white" , borderRadius : "10px" , width : "80%" ,height:"30px",marginLeft:"20px"}} type="text" name="" id="" /><br /><br />

                    <label style={{color : "white" , marginLeft : "20px"}}> CVV No</label> <br />
                    <input style={{backgroundColor : "black" , color:"white", borderColor : "white" , borderRadius : "10px" , width : "80%" ,height:"30px",marginLeft:"20px"}} type="text" name="" id="" /><br /><br />

                       <Link to="/home"><button 
                            style={{backgroundColor : "green" , borderColor : "green" ,  color : "white" , borderRadius : "10px" , width : "80%" ,height:"30px",marginLeft:"20px"}}

                            onClick={payment}
                        >Place Order</button></Link> 
                </form>
            </div>
        </div>
       
    )
}


