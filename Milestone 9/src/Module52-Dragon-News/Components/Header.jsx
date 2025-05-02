import logo from "../assets/logo.png" ;
import Navbar from "./Navbar";


function Header() {
    return(
        <div className="py-4 text-center">
            <div className="flex justify-center">
                <img src= {logo} alt="" />
            </div>
            <h1 className="text-[#706F6F] mt-2">Journalism Without Fear or Favour</h1>
            <h1 className="text-[#706F6F] font-medium"><span className="text-[#403F3F]">Sunday</span>, November 27, 2025</h1>
            <Navbar></Navbar>
        </div>
    )
}

export default Header;