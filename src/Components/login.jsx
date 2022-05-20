import React, { useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import {change_email,change_password, change_token} from "../redux/action"
import { Store } from '../redux/store'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"





export const Login = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email  , setEmail] = useState()
    const [password  , setPassword] = useState()
    const [token  , setToken ]  =  useState()

    const value  = useSelector((store) => store)

    console.log("value",value)



    const hadelSubmit = (event) => {

        event.preventDefault()

        var data = { email,password}

        axios.post("https://comicforfun.herokuapp.com/login" , data ).then(function(res){
            console.log("data",res.data)
           setToken(res.data.token)
        })

        dispatch( change_email(email) )
        dispatch( change_password(password) )
        dispatch( change_token(token) )

    }

    if(token){
        navigate("/")
        alert("login sucsessful")
    }

    return(
        <div>

            <div style={
                {
                    margin : "auto",
                    backgroundColor : "black",
                    width : "450px",
                    height : "300px",
                    borderRadius : "10px"

                }
            }>
                <h1 style={{color : "white" , 
                    textAlign : "center"
                }} >
                     Login
                </h1>

                <form action="">

               

                    

                    <label style={{color : "white" , marginLeft : "20px"}}> User e-mail </label> <br />
                    <input style={{backgroundColor : "black" ,color:"white" , borderColor : "white" , borderRadius : "10px" , width : "80%" ,height:"30px",marginLeft:"20px"}} type="text" 
                    
                    placeholder="enter email" 

                    onChange={(e) => {
                        setEmail(e.target.value)
        
                    }}
                    /> <br /><br />

                    <label style={{color : "white" , marginLeft : "20px"}}>User password </label> <br />
                    <input style={{backgroundColor : "black" ,color:"white" , borderColor : "white" , borderRadius : "10px" , width : "80%" ,height:"30px",marginLeft:"20px"}} type="text" 

                        placeholder="enter password" 
                                    
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    
                    /><br /><br />
                  
                       <button 
                            style={{backgroundColor : "green" , borderColor : "green" ,  color : "white" , borderRadius : "10px" , width : "80%" ,height:"30px",marginLeft:"20px"}}

                            onClick={hadelSubmit}
                        >Login</button>

                       
                </form>

                <Link to={"/signup"}> If user have not account</Link>

            </div>





        </div>
    )
}