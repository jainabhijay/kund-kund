import React from "react";

function Navbar() {
    return <div >
        <div className="navbarbg">
            <img src="https://kundkund.com/wp-content/uploads/2021/05/1.png" alt="logohere" className="logo"></img>
            <div className="navbarmenubuttons">
                <button className="navbarmenu"> COURSES</button>
                <button className="navbarmenu"> FEATURES</button>
                <button className="navbarmenu"> BLOG</button>
                <button className="navbarmenu"> GALERY</button>
                <button className="navbarlogin"> LOGIN</button>
            </div>
            
        </div>
        
        <div className="yellow-line"></div>
    </div>
}

export default Navbar;