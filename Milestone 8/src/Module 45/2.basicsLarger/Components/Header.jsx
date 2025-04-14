import { Outlet } from "react-router";

function Header() {
    return(
        <div>
            <h1>header</h1>
            <Outlet></Outlet>
        </div>
    )
}

export default Header;