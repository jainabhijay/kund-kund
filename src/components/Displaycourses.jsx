import React from "react";
import Coursecard from "./Coursecard";
import DispayCourseslist from "../Displaycourseslist";
import { Link } from 'react-router-dom';

function Displaycourses() {
    return <div className="displaycourses">
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[0].img}
                coursename ={DispayCourseslist[0].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[1].img}
                coursename ={DispayCourseslist[1].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[2].img}
                coursename ={DispayCourseslist[2].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[3].img}
                coursename ={DispayCourseslist[3].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[4].img}
                coursename ={DispayCourseslist[4].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[5].img}
                coursename ={DispayCourseslist[5].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[6].img}
                coursename ={DispayCourseslist[6].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[7].img}
                coursename ={DispayCourseslist[7].coursename}
            />
        </Link>
    </div>
}

export default Displaycourses;