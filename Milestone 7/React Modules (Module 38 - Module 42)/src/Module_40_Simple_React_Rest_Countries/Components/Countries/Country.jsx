import { useState } from "react";
import "./countries.css";

function Country({ info, setCountryCount, countryCount, addInList, deleteFromList }) {
    const [visited, setVisited] = useState(false);
    function addCountry() {
        addInList(info.name.common);
        setCountryCount(countryCount + 1)
    }

    function deleteCountry() {
        deleteFromList(info.name.common);
        setCountryCount(countryCount - 1)
    }

    function vistedHandler() {
        visited ?
            deleteCountry()
            : addCountry()
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