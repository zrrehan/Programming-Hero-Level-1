import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";

function Layout() {
    return(
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout;