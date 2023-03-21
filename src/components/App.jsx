import React from "react";
import Navbar from "./Navbar";
import Slides from "./Slides";
import Searchbar from "./Searchbar";
import Allcoursesbutton from "./AllCoursesbutton";
import Displaycourses from "./Displaycourses";
import Musicbar from "./Musicbar";
import Statsbar from "./Statsbar";
import Topcategory from "./Topcategory";

function App() {
    return <div>
        <Navbar/>
        <Slides/>
        <Searchbar/>
        
        <Allcoursesbutton/>
        <Statsbar/>
        <Displaycourses/>


        <Musicbar/>
        <Topcategory/>
        
    </div>
}

export default App;