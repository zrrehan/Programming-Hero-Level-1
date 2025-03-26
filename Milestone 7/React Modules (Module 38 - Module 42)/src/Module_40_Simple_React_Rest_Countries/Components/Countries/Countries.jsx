import { use } from "react";
import Country from "./Country";
function Countries({ countryPromise }) {
    let countryInfo = use(countryPromise);
    // let countryInfo = countryPromise.then((res) => console.log(res,1))
    console.log(countryInfo);
    return(
        <div>
           {
            countryInfo.map((country) => <Country info = {country}></Country>)
           }
       </div>
    );
}

export default Countries;