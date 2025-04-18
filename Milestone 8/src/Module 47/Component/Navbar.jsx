import { NavLink } from "react-router";

function Navbar() {
    return(
        <div className="flex  justify-between items-center my-[20px]">
            <h1 className="text-[28px] font-bold">Book Vibe</h1>
            <div className="space-x-4">
                <NavLink to = "/"><button className="btn">Home</button></NavLink>
                <NavLink to = "/listed-books"><button className="btn">Listed Books</button></NavLink>
                <NavLink to = "/pages-to-read"><button className="btn">Pages to Read</button></NavLink>
            </div>
            <div className="space-x-4">
                <button className="btn px-[28px] py-[18px]">Sign In</button>
                <button className="btn px-[28px] py-[18px]">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar;