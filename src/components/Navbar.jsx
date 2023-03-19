import React from "react";

function Navbar() {
    return <div >
        <div className="navbarbg">
            <img src="https://kundkund.com/wp-content/uploads/2021/05/1.png" alt="logohere" className="logo"></img>
            <div className="navbarmenubuttons">
                <p className="navbarmenu"> COURSES</p>
                <p className="navbarmenu"> FEATURES</p>
                <p className="navbarmenu"> BLOG</p>
                <p className="navbarmenu"> GALERY</p>
                <p className="navbarlogin"> LOGIN</p>
            </div>
            
        </div>
        
        <div className="yellow-line"></div>
    </div>
}

export default Navbar;