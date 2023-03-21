import React from "react";
import Coursecardimage from "./Coursecardimage";
import Coursecarddetails from "./Coursecarddetails";

function Coursecard(){
    return <div className="coursecard">
        <Coursecardimage/>
        <Coursecarddetails/>
    </div>
}

export default Coursecard;