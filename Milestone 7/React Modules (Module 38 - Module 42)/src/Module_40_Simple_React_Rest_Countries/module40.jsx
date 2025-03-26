import { Suspense } from "react";
import Countries from "./Components/Countries/Countries";


const countryPromise = fetch("https://restcountries.com/v3.1/all").
                        then((res) => res.json());

function Module40() {
    return(
        <>
            <Suspense fallback = {<h3>Please wait...</h3>}>
                <Countries countryPromise={countryPromise}></Countries>
            </Suspense>
        </>
    );
}

export default Module40;