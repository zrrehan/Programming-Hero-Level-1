import { use } from "react";
import SingleCard from "./SingleCard";

function Cards({ productPromise, setCart }) {
    let prodcutData = use(productPromise);
    return(
        <div className="flex flex-wrap justify-between gap-10">
            {
                prodcutData.map((product) => <SingleCard product={product} setCart={setCart}></SingleCard>)
            }
        </div>
    );
}

export default Cards;