import { Link, NavLink, Outlet } from "react-router";
import "../style.css"

function Header() {
    return(
        <div>
            <div className="space-x-6">
                <h1>header</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="mobile">Mobile</NavLink>
                <NavLink to="laptop">laptop</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default Header;