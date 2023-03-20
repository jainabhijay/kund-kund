import React from "react";
import Searchbutton from '../images/Searchbutton.png';

function Searchbar(){
    return <div className="searchbg">
        <p  className="searchtxt">SEARCH</p>
        <img src={Searchbutton} alt="searchicon" className="searchbutton"></img>
    </div>
}

export default Searchbar