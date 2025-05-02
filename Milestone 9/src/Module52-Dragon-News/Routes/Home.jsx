import { Outlet } from "react-router";
import Header from "../Components/Header";
import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";

function Home() {
    return(
        <div className="w-[90%] max-w-[1140px] mx-auto">
            <Header></Header>
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-3">
                    <LeftSide></LeftSide>
                </div>
                <div className="col-span-6">
                    <Outlet></Outlet>
                </div>
                <div className="col-span-3">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    )
}

export default Home;