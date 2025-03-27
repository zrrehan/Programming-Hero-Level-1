import { use, useState } from "react";
import Country from "./Country";
import "./countries.css"

function Countries({ countryPromise }) {
    let countryInfo = use(countryPromise);
    let [countryCount, setCountryCount] = useState(0);
    let [countryList, setCountryList] = useState([]);

    function addInList(countryName) {
        setCountryList([...countryList, countryName]);
    }
    function deleteFromList(countryName) {
        let newArray = [] 
        for (let country of countryList) {
            if(country != countryName) {
                newArray.push(country);
            }
        }
        setCountryList(newArray);
    }
    return(
        <div>
            <h1>Total Visited: {countryCount}</h1>
            <p>
                {   
                    <ol>
                        {countryList.map((country) => <li>{country}</li>)}
                    </ol>
                }
            </p>
            <div className = "counntry-container">
                {
                    countryInfo.map((country) => <Country info={country} countryCount={countryCount} setCountryCount={setCountryCount} addInList={addInList} deleteFromList={deleteFromList}></Country>)
                }
            </div>
        </div>
    );
}

export default Countries;