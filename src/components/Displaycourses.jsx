import React from "react";
import Coursecard from "./Coursecard";
import DispayCourseslist from "../Displaycourseslist";

function Displaycourses() {
    return <div className="displaycourses">
        <Coursecard
            img={DispayCourseslist[0].img}
            coursename ={DispayCourseslist[0].coursename}
        />
        <Coursecard
            img={DispayCourseslist[1].img}
            coursename ={DispayCourseslist[1].coursename}
        />
        <Coursecard
            img={DispayCourseslist[2].img}
            coursename ={DispayCourseslist[2].coursename}
        />
        <Coursecard
            img={DispayCourseslist[3].img}
            coursename ={DispayCourseslist[3].coursename}
        />
        <Coursecard
            img={DispayCourseslist[4].img}
            coursename ={DispayCourseslist[4].coursename}
        />
        <Coursecard
            img={DispayCourseslist[5].img}
            coursename ={DispayCourseslist[5].coursename}
        />
        <Coursecard
            img={DispayCourseslist[6].img}
            coursename ={DispayCourseslist[6].coursename}
        />
        <Coursecard
            img={DispayCourseslist[7].img}
            coursename ={DispayCourseslist[7].coursename}
        />
    </div>
}

export default Displaycourses;