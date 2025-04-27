import { NavLink, Outlet } from "react-router";

function Root() {
    return(
        <div>
            <div className="space-x-3">
                <NavLink to = "/login">login</NavLink>
                <NavLink to = "/home">home</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
export default Root;