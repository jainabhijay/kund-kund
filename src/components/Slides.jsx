import React from "react";

import Test from '../images/Slide1text.png';
function Slides(){
    return <div className="slidebg">
        
        <img src={Test} className="slide1" alt="slide1"></img>
        <div className="yellow-line"></div>
    </div>
}

export default Slides;