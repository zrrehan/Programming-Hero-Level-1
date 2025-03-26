import { use, useState } from "react";
import Country from "./Country";
import "./countries.css"

function Countries({ countryPromise }) {
    let countryInfo = use(countryPromise);
    let [countryCount, setCountryCount] = useState(0);

    return(
        <div>
            <h1>Total Visited: {countryCount}</h1>
            <div className = "counntry-container">
                {
                    countryInfo.map((country) => <Country info={country} countryCount={countryCount} setCountryCount={setCountryCount}></Country>)
                }
            </div>
        </div>
    );
}

export default Countries;