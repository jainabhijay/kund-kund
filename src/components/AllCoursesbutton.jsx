import React from "react";
import Whitebg from "../images/Whitebg.png"

function Allcoursesbutton() {
    return <div >
    <img src={Whitebg} alt="bgimgae" className="whitebg"></img>
    <div className="allcoursesbarbg">
        
        <button type="submit" className="allcoursesbutton"> ALL COURSES</button>
       
    </div>
    <div className="yellow-line"></div>
</div>
}
export default Allcoursesbutton;