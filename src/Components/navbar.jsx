import React from "react";
import { Link } from "react-router-dom";
import "../Style/navbar.css"

export const Navbar = () => {
    return(

        <div className="div_second">
            <div className="nav_div">
                <Link to="/">Dashboard</Link>
                <Link to="/home">Home</Link>
                <Link to="/add_cart">Add cart</Link>
            </div>
            <div>
                <span>
                    <img src="https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29taWN8ZW58MHx8MHx8&w=1000&q=80" alt=""  width={"10%"} style={{borderRadius:"100%" , marginTop:"2%" , marginLeft:"90%"  }}   />
                </span>
            </div>

        </div>

    )
}