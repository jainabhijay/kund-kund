import React from "react";
import Homepage from "./pages/Homepage";
import {Route,Routes} from "react-router-dom";
import AllCourses from "./pages/AllCourses";

function App() {
    return <div>
       <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/allcourses" element={<AllCourses/>}/>
       </Routes>
        
    </div>
}

export default App;