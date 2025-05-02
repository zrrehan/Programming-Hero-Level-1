import Marquee from "react-fast-marquee";
import userDemoPic from "../assets/user.png"

function Navbar() {
    return(
        <div>
            <div className="flex bg-[#F3F3F3] p-4">
                <p className="bg-pinkBtn text-white px-6 py-2 w-fit rounded-lg">Latest</p>
                <Marquee>
                    <p className="text-[#403F3F] font-semibold">Match Highlights: Germany vs Spain — as it happened   !</p>
                    <p className="text-[#403F3F] font-semibold">Match Highlights: Germany vs Spain — as it happened   !</p>
                </Marquee>
            </div>

            <div className="flex justify-end gap-3 mt-3">
                <div className="bg-red-300">
                    <img src={userDemoPic} alt="User's Profile Picture" />
                </div>
                <button className="btn bg-blackBtn text-white px-6"> Login </button>
            </div>
        </div>
        
    )
}

export default Navbar