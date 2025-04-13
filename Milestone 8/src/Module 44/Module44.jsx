import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Recharts from "./components/Recharts";
import { Suspense } from "react";
import Carousel from "./components/Carousel";
import axios from "axios";


// let url = "module44/playerData.json";


// async function getData() {
//     let response = await fetch(url);
//     return response.json();
// }

// let playerData = getData(url);
let playerData = axios("module44/playerData.json")

function Module44() {
    return(
        <div>
            <img src="" alt="" />
            <Header></Header>
            <Pricing></Pricing>

            <Suspense fallback={<div className="flex justify-center mt-28"><span className="loading loading-infinity loading-xl mx-auto"></span></div>}>
                <Recharts playerData={playerData}></Recharts>
            </Suspense>
        </div>
    );
}

export default Module44;