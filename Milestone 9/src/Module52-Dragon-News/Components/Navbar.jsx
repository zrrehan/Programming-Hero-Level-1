import Marquee from "react-fast-marquee";
import userDemoPic from "../assets/user.png"
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
    let { userImage } = useContext(AuthContext);
    console.log(userImage)

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
                <div className="h-10 w-10 rounded-full">
                    {
                        userImage ? 
                            <img className="h-full w-full object-cover rounded-full" src={userImage} alt="User's Profile Picture" />
                            : <img src={userDemoPic} alt="User's Profile Picture" />
                    }
                </div>
                <Link to = "/auth/login">
                    {
                        userImage ?
                            <button className="btn bg-blackBtn text-white px-6"> Logout </button>
                            : <button className="btn bg-blackBtn text-white px-6"> Login </button>
                    }
                </Link>
            </div>
        </div>
        
    )
}

export default Navbar