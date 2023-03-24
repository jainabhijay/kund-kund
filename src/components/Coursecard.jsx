import React from "react";

function Coursecard(props){
    return <div className="coursecard">
        <img src={props.img} alt="cardimage" className="coursecardimage"></img>
        <div className="coursecarddetails">
            <p>{props.coursename}</p>
        </div>
    </div>
}

export default Coursecard;