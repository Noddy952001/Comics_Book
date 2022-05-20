import React, { useEffect, useState } from "react"
import "../Style/dashboard.css"
import "../Style/Home.css"
import axios from "axios"
import {Navbar} from "./navbar"
import { Link } from "react-router-dom"
import { get_cart } from "../Redux/action"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"


export const Home = () => {

    const [data,setData] = useState([]);
    const [pdata , setPdata ] = useState([])
    const [filterData , setfilterData] = useState([])
    const [status, setStatus] = useState(true)
    const [page, setPage] = useState(1);
    const [search , setSearch] = useState()
    var size = 4;


    const dispatch = useDispatch()

    useEffect(()=>{
      getdata()
      setfilterData()
    },[size,page])
    const getdata = ()=>{
      axios.get("https://comicforfun.herokuapp.com/comic" , 
      {
        params:{
            size: size,
            page: page
        }
      }
      
      ).then(function(res){
          setData(res.data.comics)
          setfilterData(res.data)
          console.log("data" , res.data.comics)
      })
      
    }

    const getsearch = () => {

        axios.get(`https://comicforfun.herokuapp.com/comic/search/${search}`).then(function(res){
            setData(res.data)
        })

        console.log(search);
    }

    const AddToCart = (el) => {

        axios.post("https://comicforfun.herokuapp.com/add_cart" , el ).then(function(res){
            // setData(res.data)  
            alert("suuces")
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

             <Navbar/>

                 
                
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

                <span>
                  <input type="text" name="" onChange={(e)=> {
                      setSearch(e.target.value)
                  }} placeholder="Search"  /> 

                  <button  
                    onClick={getsearch}
                  > Seacrch </button>
                </span>    

                {
                    data?.map((el,i)=> {
                        return(
                        <div key={i}>
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

                                        }} 
                                        onClick={ () => {
                                            AddToCart(el)
                                        }}
                                        >add 
                                    </button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>

            <div className="pagination">
                <button className="btn" onClick={() => setPage(page - 1)}>
                  PREV
                </button>
                <button  className="btn"  onClick={() => setPage(page + 1)}>
                    NEXT
                </button >
                <div>Current page: {page}</div>
            </div>
        </div>
    )
}