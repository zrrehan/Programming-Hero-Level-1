import { useEffect, useState } from "react";
import Map from "../Components/Coverage/Map";
import Searchbar from "../Components/Coverage/Searchbar";

function Coverage() {
    const [position, setPosition] = useState([23.8041, 90.4152]);
    const [zoom, setZoom] = useState(7);
    const [mapRef, setMapRef] = useState(null);
    
    

    return(
        <div>
            <h1 className="font-extrabold text-[50px] text-[#03373D] mb-7">We are available in 64 districts</h1>
            <Searchbar mapRef={mapRef} setMapRef = {setMapRef} setPosition={setPosition} setZoom = {setZoom}></Searchbar>
            <Map setMapRef={setMapRef} position={position} zoom = {zoom}></Map>
        </div>
    )
}

export default Coverage;