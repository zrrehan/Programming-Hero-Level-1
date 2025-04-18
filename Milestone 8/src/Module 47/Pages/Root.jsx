import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import "../Module47.css"
import Footer from "../Component/Footer";

function Root() {
    return(
        <div>
            <div className="w-11/12 max-w-[1170px] mx-auto common-font">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default Root;