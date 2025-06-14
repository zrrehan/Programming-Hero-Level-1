import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
    const {user} = useContext(AuthContext);

    return(
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to = "/"><li><a>Home</a></li></Link>
                    <Link to = "/my-job"><li><a>My Job</a></li></Link>
                </ul>
            </div>
            {
                user ? <a className="btn ml-96">{user}</a> : <div className="navbar-end">
                    <Link to="/auth"><a className="btn">Login</a></Link>
                </div>
            }
        </div>
    )
}
export default Navbar;