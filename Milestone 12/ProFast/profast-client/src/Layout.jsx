import { Outlet } from "react-router";
import Navbar from "./Components/Layout/Navbar";


function Layout() {
    return(
        <div className="max-w-[1500px] w-[90%] mx-auto">
            <Navbar></Navbar>
            <div className="my-16">
                <Outlet></Outlet>
            </div>
            <h1>Footer</h1>
        </div>
    )
}

export default Layout;