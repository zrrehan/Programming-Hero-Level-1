import Header from "./Components/Header";
import Cards from "./Components/Cards";
import { Suspense } from "react";

async function fetchPromise(url) {
    let res = await fetch(url);
    return res.json();
}

function Project() {
    let skeleton = <div className="flex justify-between flex-wrap gap-4">
        <div class="skeleton w-[384px] h-[369px]"></div>
        <div class="skeleton w-[384px] h-[369px]"></div>
        <div class="skeleton w-[384px] h-[369px]"></div>
        <div class="skeleton w-[384px] h-[369px]"></div>
    </div>

    let productPromise = fetchPromise("https://fakestoreapi.com/products") ;

    return(
        <div>
            <Header></Header>
            <div className="w-11/12 mx-auto mt-14">
                <Suspense fallback={skeleton}>
                    <Cards productPromise = {productPromise}></Cards>
                </Suspense>
            </div>
        </div>
    );
}

export default Project;