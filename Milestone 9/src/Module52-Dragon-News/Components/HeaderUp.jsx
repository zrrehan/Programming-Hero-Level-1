import logo from "../assets/logo.png";

function HeaderUp() {
    return(
        <div className="text-center">
            <div className="flex justify-center">
                <img src={logo} alt="" />
            </div>
            <h1 className="text-[#706F6F] mt-2">Journalism Without Fear or Favour</h1>
            <h1 className="text-[#706F6F] font-medium"><span className="text-[#403F3F]">Sunday</span>, November 27, 2025</h1>
        </div>
    )
}

export default HeaderUp