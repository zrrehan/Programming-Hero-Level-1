import Cheap from "./Cheap.jsx";

function RenderingList() {
    const products = [
        { name: "Xbox Series X", brand: "Microsoft", price: 500, color: "black" },
        { name: "PlayStation 5 Digital Edition", brand: "Sony", price: 450, color: "black" },
        { name: "PlayStation 5 Disc Edition", brand: "Sony", price: 550, color: "black" },
        { name: "Razer Blade 15", brand: "Razer", price: 2200, color: "black" },
        { name: "MacBook Pro 16-inch", brand: "Apple", price: 2500, color: "golden" },
        { name: "Samsung Galaxy S23 Ultra", brand: "Samsung", price: 1200, color: "silver" },
        { name: "Sony WH-1000XM5", brand: "Sony", price: 400, color: "black" },
        { name: "LG C2 OLED TV", brand: "LG", price: 1500, color: "black" },
        { name: "Bose QuietComfort 45", brand: "Bose", price: 330, color: "slver" },
        { name: "SteelSeries Apex Pro", brand: "SteelSeries", price: 200, color: "pink" },
        { name: "Razer DeathAdder V3 Pro", brand: "Razer", price: 150, color: "black" }
    ]

    return(
        <>
            <h1>Products Price range 0 - 1200</h1>
            {
                products.map((productInfo) => {
                    return <Cheap productInfo={productInfo}></Cheap>
                })
            }
        </>
    );
}

export default RenderingList;