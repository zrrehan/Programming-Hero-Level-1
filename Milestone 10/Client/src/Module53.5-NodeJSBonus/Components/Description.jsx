import { useLoaderData } from "react-router";

function Descrition() {
    let data = useLoaderData();
    console.log(data);
    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={data.image}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{data.name}</h1>
                    <p className="text-2xl">
                        {data.description}
                    </p>
                    <p className="text-3xl my-3">${data.price}</p>
                    <button className="my-6 btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Descrition;