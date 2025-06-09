import { Suspense } from "react";
import Hero from "../Components/Hero";
import Jobs from "../Components/Jobs";


const dataPromise = fetch("http://localhost:3000/").then((res) => res.json());

function Home() {
    return(
        <div>
            <Hero></Hero>
            <Suspense fallback = {<p>Loading....</p>}>
                <Jobs dataPromise = {dataPromise}></Jobs>
            </Suspense>
        </div>
    )
}

export default Home;