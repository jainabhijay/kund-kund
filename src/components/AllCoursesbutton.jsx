import React from "react";
import Whitebg from "../images/Whitebg.png"
import { Link } from "react-router-dom";

function Allcoursesbutton() {

    return <div >
    <div className="whitebgdiv">
        <img src={Whitebg} alt="bgimgae" className="whitebg"></img>
        <img src={Whitebg} alt="bgimgae" className="whitebg"></img>
    </div>
    
    <div className="allcoursesbarbg">
        
        <Link to="/allcourses" target="_blank">
            <button type="submit" className="allcoursesbutton"> ALL COURSES</button>
        </Link>
       
    </div>
    </div>
}
export default Allcoursesbutton;