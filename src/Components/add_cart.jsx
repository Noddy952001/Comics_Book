import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../Style/addCart.css"
import {Navbar} from "./navbar"
import { useSelector } from "react-redux";



export const AddCart = () => {

    // const [data,setData] = useState([]);
    const [count , setCount] = useState(1)
    const [num , setNum] = useState(0)

    
    
    const cart = useSelector((store) => store.cart)


    
    console.log("cart",cart)
    
    // setData(data.push(cart))
    // console.log("data_main",data )

    console.log("cart",cart)


    const inc = () => {
        setCount(count+1)
    }
    const dec = () => {
        setCount(count-1)
    }

  

    return(

        
        <div>
            <Navbar/>




            <table className="table">
                        <thead>
                            <tr>
                                <th  className="table"> <h1>Item</h1></th>
                                <th  className="table"><h1>Quantity</h1></th>
                                <th  className="table"><h1>Total Price</h1></th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        {/* {   
                            data.map((el,p) => {
                                return( */}

                                    <tr className="table">

                                        {/* <td className="table" > <h1> {p+1}</h1></td> */}

                                        <td className="table">
                                            <div style={{
                                                border: "1px solid black",
                                                width : "100%",
                                                backgroundColor : "teal"
                                            }}>
                                                <img src={cart.image} alt="" width={"100%"} />
                                                <h1>Author :  {cart.Book_name}</h1>
                                                <h1>Price :  {cart.Price}₹</h1>                            
                                            </div>
                                        </td>

                                        <td className="table">
                                            <div
                                                style={{display : "flex"}}
                                            >
                                                <button
                                                    onClick={inc}
                                                >
                                                +
                                                </button>

                                                <p>{count}</p>
                                                <button
                                                    onClick={dec}
                                                >
                                                —
                                                </button>
                                            </div>
                                        </td>

                                        <td className="table">
                                            <div>

                                             <h1>{count*cart.Price}</h1>

                                            </div> 
                                        </td>
                                    </tr>

                                {/* )
                             })
                            } */}
                        </tbody>

                       
                </table>
                
               
       </div>

    )
}


