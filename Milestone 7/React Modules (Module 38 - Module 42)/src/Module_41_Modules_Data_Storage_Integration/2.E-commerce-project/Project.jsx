import Header from "./Components/Header";
import Cards from "./Components/Cards";
import { cache, Suspense, useMemo, useState } from "react";

async function fetchPromise(url) {
    let res = await fetch(url);
    return res.json();
}

function Project() {
    const [cart, setCart] = useState({});
    let skeleton = <div className="flex justify-between flex-wrap gap-4">
        <div className="skeleton w-[384px] h-[369px]"></div>
        <div className="skeleton w-[384px] h-[369px]"></div>
        <div className="skeleton w-[384px] h-[369px]"></div>
        <div className="skeleton w-[384px] h-[369px]"></div>
    </div>

    let productPromise = useMemo(() => {
        return fetchPromise("https://fakestoreapi.com/products") 
    }, []);
    console.log(productPromise)

    return(
        <div>
            <Header setCart={setCart}></Header>
            <div className="w-11/12 mx-auto mt-14">
                <Suspense fallback={skeleton}>
                    <Cards productPromise={productPromise} setCart={setCart}></Cards>
                </Suspense>
            </div>
        </div>
    );
}

export default Project;