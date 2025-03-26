import { useState } from "react";
import "./countries.css";

function Country({ info, setCountryCount, countryCount }) {
    const [visited, setVisited] = useState(false);
    function vistedHandler() {
        visited ?
            setCountryCount(countryCount - 1)
            : setCountryCount(countryCount + 1)
        setVisited(!visited);
    }

    return(
        <div className={`country ${visited ? "visited": "not-visited"}`}>
            <h1>Name: {info.name.common}</h1>
            <img src={info.flags.png} alt = {`${info.name.common} Flag`} />
            <h2>Independent: {info.independent ? "Free" : "Not Free"}</h2>
            <button onClick={vistedHandler}>{visited ? "Not Visited": "Visited"}</button>
        </div>
        
    );
}

export default Country;