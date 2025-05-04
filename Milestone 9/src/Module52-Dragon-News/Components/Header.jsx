import Navbar from "./Navbar";
import HeaderUp from "./HeaderUp";

function Header() {
    return(
        <div className="py-4 text-center">
            <HeaderUp></HeaderUp>
            <Navbar></Navbar>
        </div>
    )
}

export default Header;