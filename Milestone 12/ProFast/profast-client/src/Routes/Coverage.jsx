import Map from "../Components/Coverage/Map";
import Searchbar from "../Components/Coverage/Searchbar";

function Coverage() {
    return(
        <div>
            <h1 className="font-extrabold text-[50px] text-[#03373D] mb-7">We are available in 64 districts</h1>
            <Searchbar></Searchbar>
            <Map></Map>
        </div>
    )
}

export default Coverage;