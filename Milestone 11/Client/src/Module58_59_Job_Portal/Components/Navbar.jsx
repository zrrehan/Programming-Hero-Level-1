import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
    const { user, logoutFirebase } = useContext(AuthContext);

    function logOut() {
        logoutFirebase();
    }
    return(
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Job Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    <NavLink to="/"><a>Home</a></NavLink>
                    <NavLink to = "/find-job"><a>Find Job</a></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
            {
                    !user ? <div className="">
                        <Link to="/auth" className="btn">Login</Link>
                    </div>
                        : <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1">{user}</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li onClick = {logOut}><a>Logout</a></li>
                            </ul>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar;