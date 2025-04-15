import { NavLink, Outlet } from "react-router";

function Header() {
    return(
        <div>
            <div className="space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/users">User Information</NavLink>
                <NavLink to="/posts">All Posts</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );

}

export default Header;