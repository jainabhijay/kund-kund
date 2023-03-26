import React from "react";
import Whitebg from "../images/Whitebg.png"
import { Link } from "react-router-dom";

function Allcoursesbutton() {

    return <div >
    <img src={Whitebg} alt="bgimgae" className="whitebg"></img>
    <div className="allcoursesbarbg">
        
        <Link to="/allcourses">
            <button type="submit" className="allcoursesbutton"> ALL COURSES</button>
        </Link>
       
    </div>
    </div>
}
export default Allcoursesbutton;