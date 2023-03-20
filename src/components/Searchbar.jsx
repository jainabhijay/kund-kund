import React from "react";
import Searchbutton from '../images/Searchbutton.png';

function Searchbar(){
    return <div className="searchbg">
        {/* <p  className="searchtxt underline-offset-1">SEARCH</p>*/}

        {/* <form action="submit.php" method="post">
  <input type="image" src="submit-button.png" alt="Submit">
</form> */}
        <input type="text" placeholder="Search" className="searchbar"/>
        <img src={Searchbutton} alt="searchicon" className="searchbutton"></img>
    </div>
}

export default Searchbar