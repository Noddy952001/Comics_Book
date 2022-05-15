import React, { useEffect, useState } from "react"
import "../Style/dashboard.css"
import "../Style/Home.css"
import axios from "axios"
import { Link } from "react-router-dom"

export const Home = () => {

    const [data,setData] = useState([]);
    const [status, setStatus] = useState(true)

    useEffect(()=>{
      getdata()
    },[])
    const getdata = ()=>{
      axios.get("http://localhost:3001/data").then(function(res){
          setData(res.data)
          console.log("data" , res.data)
      })
      
    }


    function handel_Acc(){
        let All_data = data  
      
        if(status == true){
            All_data.sort( function (a,b){
              return Number(a.Price) - Number(b.Price);
            })
            setStatus(false)
        }
       
        setData(All_data);
      
        console.log("asaa",All_data)
    }

    const Handel_dec = () => {      
        let All_data = data

        if(status == false){
            All_data.sort( function (a,b){
                return  Number(b.Price)-Number(a.Price);
            })
            setStatus(true)
        }
        setData(All_data);


    }

    return(
        <div>

            <div className="top_div">
                <h1> Read some intrusting Comics</h1>
            </div>

            <div className="div_second">
                <div className="nav_div">
                    <Link to="/">Dashboard</Link>
                    <Link to="/home">Home</Link>
                </div>

                <div>
                   <span>
                        <img src="https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29taWN8ZW58MHx8MHx8&w=1000&q=80" alt=""  width={"10%"} style={{borderRadius:"100%" , marginTop:"2%" , marginLeft:"90%"  }}   />
                   </span>
                </div>
            </div>

            <div className="image_div">
                <img src="https://acegif.com/wp-content/gifs/gif-marvel-53.gif" alt=""  width={"100%"}  height={"500px"} />
            </div>
                <h1
                    style={{textAlign : "center" , fontSize:"50px" , color:"red" , backgroundColor : "black" , margin:"0px"}}
                >MARVEL STUDIO</h1>


            <div>

                <button
                    onClick={handel_Acc}
                >
                     Price Low to Heigh
                </button>

                <button
                    onClick={Handel_dec}
                >
                   Price Heigh to Low
                </button>

                {
                    data?.map((el)=> {
                        return(
                        <div>
                                <div style={{

                                    width:"80%",
                                    height:"400px",
                                    display: "grid",
                                    gridTemplateColumns: "repeat(4, 1fr)",
                                    gridTemplateRow: "repeat(3, 200px)",
                                    marginLeft:"10%",
                                    marginTop:"10%",
                                    borderRadius:"10px",
                                    backgroundColor:"#61d4ff"
                                    }}>

                                    <img src={el.image} alt="" width={"100%"} height={"400px"} 
                                    style={{borderRadius:"10px"}} 
                                    
                                    />
                                    <div style={{
                                        textAlign:"center", 
                                        margin : "0px",
                                        fontSize:"180%",
                                        marginTop : "20%"
                                        }}>Name : {el.Book_name}
                                    </div>

                                    <div style={{
                                        textAlign:"center",
                                        fontSize:"180%",
                                        marginTop : "20%"
                                        }}>Price : {el.Price}
                                    </div>

                                    <button style={{
                                        marginLeft: "150px",
                                        width:"40%", 
                                        height:"10%",
                                        marginTop : "20%"

                                        }}>add 
                                    </button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}