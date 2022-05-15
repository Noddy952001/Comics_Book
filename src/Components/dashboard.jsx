import React from "react"
import "../Style/dashboard.css"
import { Link } from "react-router-dom"
import {Navbar} from "./navbar"

export const Dashboard = () => {
    return(
        <div>

            <div className="top_div">
                <h1> Read some intrusting Comics</h1>
            </div>

            <div className="div_second">
               <Navbar/>

            
            </div>

            <div className="image_div">
                <img src="https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29taWN8ZW58MHx8MHx8&w=1000&q=80" alt=""  width={"100%"}  height={"500px"} />
            </div>
                <h1
                    style={{textAlign : "center" , fontSize:"50px" , color:"red" , backgroundColor : "black" , margin:"0px"}}
                >MARVEL STUDIO</h1>

            <div>
                <img src="https://s2982.pcdn.co/wp-content/uploads/2021/06/comic-book-plus-logo-header.png.webp" alt="" style={{marginLeft:"30%" , marginTop : "5%"}}/>
            </div>

            <div className="middle_div">
                <div 
                    style={{width:"70%" , height : "400px" }}
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6cauqsVkjLQruxcdh6P_kFkvvc30-OhLbLQ&usqp=CAU" alt=""  width={"100%"} height={"100%"} />
                </div>
                <div style={{backgroundColor : "teal" , color: "white" , textAlign:"center" , padding:"50px" , paddingTop:"200px" }}>
                    <h1 >
                     Our Professional Instructional Designers and Media Specialists are Here to Help.
                    </h1>
                </div>
            </div>

            <div className="middle_div">
                <div style={{backgroundColor : "teal" , color: "white" , textAlign:"center" , padding:"50px" , paddingTop:"200px" }}>
                    <h1 >
                     Our Professional Instructional Designers and Media Specialists are Here to Help.
                    </h1>
                </div>
                <div 
                    style={{width:"70%" , height : "400px" }}
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVBPFCmDh30IfYXNC31vtx7PsMAHj6F8MQEq7JQJ_ixLNnQUB4wXKXLw698czuSsMlCQ&usqp=CAU" alt=""  width={"100%"} height={"100%"} />
                </div>

               
            </div>


                <div className="last_div" >     

                    <h1>Love Comics</h1>

                    <div style={{display:"flex" , justifyContent : "space-between"}}>
                        <div>
                            <h1>About Comics</h1>

                            <p>Who we are</p>
                            <p>Blogs</p>
                            <p>Fan page</p>
                        </div>
                        <div>
                            <h1>For Readers</h1>
                            <p>Marvel Collection </p>
                            <p>Cartoons</p>
                            <p>Chota Bheem</p>
                        </div>
                        <div>
                            <h1>Story</h1>
                            <p>Princes </p>
                            <p>Jungle book </p>

                        </div>

                        <div style={{}}>
                            <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                            <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                        </div>
                    </div>
                </div>

               
        

        </div>
    )
}