function SingleCard({ product }) {
    return(
        <div className="card w-96 shadow-sm bg-blue-950">
            <figure className="bg-white">
                <img className=" h-[183px] object-cover"
                    src={product.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{product.title}</h2>
                <p className="text-xl font-bold text-white">Price - ${product.price}</p>
                <div className="card-actions justify-end">
                    <button className="btn ">Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default SingleCard;