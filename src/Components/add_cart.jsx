import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../Style/addCart.css"
import {Navbar} from "./navbar"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {Store} from "../Redux/store"
import { useParams } from "react-router-dom";



export const AddCart = () => {

    const [count , setCount] = useState(1)
    const [data , setData] = useState([])
    const [filterData , setfilterData] = useState([])
    const [num , setNum] = useState(0)

    
    useEffect(() => {
        getdata()
    },[])
    
    
    const getdata = () => {
        axios.get("https://comicforfun.herokuapp.com/add_cart").then(function (res){
            setData(res.data)
            console.log(res.data)
        })
    }

    const deletedata = (el) => {

        axios.delete(`https://comicforfun.herokuapp.com/add_cart/${el}`).then(function(res){
            alert("delete sucessful")
            getdata()
            console.log(res)
        })
    }




    const inc = (el) => {

        setCount(count+1)


        console.log("price", el )
    }
    const dec = () => {
        setCount(count-1)
    }

    var sum = 0
    for(var i=0; i<data.length; i++){
        sum +=  Number(data[i].Price)
    }
    console.log(sum)

    return(
        
        <div>
            <Navbar/>

           
                        <table className="table">
                        <thead>
                            <tr>
                                <th  className="table"> <h1>Item</h1></th>
                                <th  className="table"><h1>Quantity</h1></th>
                                <th  className="table"><h1>Total Price</h1></th>
                                <th  className="table"><h1>Remove </h1></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        
                        {
                            data?.map((el , i) => {
                                return(
                                    <tr className="table" key={i}>
                                        <td className="table">
                                            <div style={{
                                                border: "1px solid black",
                                                width : "100%",
                                                backgroundColor : "teal"
                                            }}>
                                                <img src={el.image} alt="" width={"100%"} />
                                                <h1>Author :  {el.Book_name}</h1>
                                                <h1>Price :  {el.Price}₹</h1>                            
                                            </div>
                                        </td>

                                        <td className="table">
                                            <div
                                                style={{display : "flex"}}
                                            >
                                                <button

                                                
                                                    onClick={() => {
                                                        inc(el.Price)  
                                                    }}
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
                                                <h1>{count*el.Price}</h1>
                                            </div> 
                                        </td>

                                        <td>
                                            <div>
                                                <button 

                                                  onClick={() => {
                                                      deletedata(el._id)
                                                  }}
                                                >   
                                                    Remove
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                </table>

                    <span style={{display : "flex",
                        marginLeft : "45%"
                    }}>

                        <h1>Total Prize : {sum} ₹</h1>
                        <Link to="/checkout"> <button>Checkout
                        </button></Link>  

                    </span>
       </div>

    )
}


