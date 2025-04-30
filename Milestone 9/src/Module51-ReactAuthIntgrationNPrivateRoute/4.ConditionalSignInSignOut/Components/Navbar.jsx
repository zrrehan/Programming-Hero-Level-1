import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { signOut } from "firebase/auth";

function Navbar() {
    const { user, logOut } = use(AuthContext);
    console.log(user);

    const links = <div className="space-x-4">
        <NavLink className="btn" to = "/"> Home </NavLink>
        <NavLink className="btn" to = "/login"> Login </NavLink>
        <NavLink className="btn" to = "/register"> Register </NavLink>
        <NavLink className="btn" to="/dashboard"> Dashboard </NavLink>
        {
            user && <>
                <NavLink className="btn" to="/orders"> Orders </NavLink>
                <NavLink className="btn" to="/profile"> Profile </NavLink>
            </>
        }
    </div> 
 
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
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <a className="btn" onClick={() => logOut()}>Sign Out</a> : <Link className="btn" to = "/login">Login</Link>
                }
            </div>
        </div>
    )
}

export default Navbar;