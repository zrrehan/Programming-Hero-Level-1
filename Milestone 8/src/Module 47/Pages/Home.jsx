import Header from "../Component/Header";
import Books from "../Component/Books/Books";
import { Suspense } from "react";

async function getData(url) {
    let response = await fetch(url);
    return response.json();
} 

let dataPromise = getData("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json");


function Home() {
    return(
        <div>
            <Header></Header>
            <Suspense fallback = {<p>Loading</p>}>
                <Books dataPromise = {dataPromise}></Books>
            </Suspense>
        </div>
    )
}

export default Home;