import Header from "./Components/Header";
import Cards from "./Components/Cards";
import { cache, Suspense, useMemo, useState } from "react";

async function fetchPromise(url) {
    let res = await fetch(url);
    return res.json();
}

let productPromise = fetchPromise("https://fakestoreapi.com/products")

function Project() {
    const [cart, setCart] = useState({});
    const [filter, setFilter] = useState("");
    let skeleton = <div className="flex justify-between flex-wrap gap-4">
        <div className="skeleton w-[384px] h-[369px]"></div>
        <div className="skeleton w-[384px] h-[369px]"></div>
        <div className="skeleton w-[384px] h-[369px]"></div>
        <div className="skeleton w-[384px] h-[369px]"></div>
    </div>


    return(
        <div>
            <Header setCart={setCart} setFilter={setFilter}></Header>
            <div className="w-11/12 mx-auto mt-14">
                <Suspense fallback={skeleton}>
                    <Cards productPromise={productPromise} setCart={setCart} filter={filter}></Cards>
                </Suspense>
            </div>
        </div>
    );
}

export default Project;