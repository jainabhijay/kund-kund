import React from "react";
import Musicicon from '../images/Musicicon.png';


function Musicbar() {
    return <div > 
        <div className="musicbarbg">
            <img src={Musicicon} alt="logohere" className="musicicon"></img>
            <p className="musicbartxt"> 
            भजन और पूजा संग्रह<br></br>
            पक्तियाँ भजन पूजा गाथा श्लोक आदि ढूँढे</p>
        </div>
        <div className="yellow-line"></div>

        </div>
}

export default Musicbar;