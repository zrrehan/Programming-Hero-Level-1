import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import "../Module47.css"

function Root() {
    return(
        <div className="w-11/12 max-w-[1170px] mx-auto common-font">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Root;