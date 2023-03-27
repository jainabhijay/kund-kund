import React from "react";

 import Im1 from '../images/Slide1text.png';
 import Im2 from '../images/Slide2text.png';
 import Im3 from '../images/Slide3text.png';
function Slides(){

    // function Slideshow(){
    //     document.getElementById('radio' + counter).checked = true;
    //     counter++;
    //     if(counter > 3){
    //       counter = 1;
    //     }
    //   };

    return <div className="slidebg">
        <img src={Im1} className="slide1"></img>
        {/* <div className="slides">

            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>

            <div className="slide first">
                <img src={Im1} alt="slide first"/>
            </div>
            <div className="slide">
                <img src={Im2} alt="slide second"/>
            </div>
            <div className="slide">
                <img src={Im3} alt="slide thrid"/>
            </div>

            <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>

            </div>


            <div class="navigation-manual">
                <label for="radio1" className="manual-btn"></label>
                <label for="radio2" className="manual-btn"></label>
                <label for="radio3" className="manual-btn"></label>
        
            </div>
        </div> */}
    </div>
}

export default Slides;