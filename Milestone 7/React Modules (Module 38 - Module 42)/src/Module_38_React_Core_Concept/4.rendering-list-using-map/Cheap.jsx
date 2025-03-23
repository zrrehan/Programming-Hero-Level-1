function Cheap({ productInfo }) {
    console.log(productInfo);
    if(productInfo.price <= 1200) {
        return (
            <>
                <hr />
                <h1>{productInfo.name}</h1>
                <h3>Brand: {productInfo.brand}</h3>
                <h3>Price: ${productInfo.price}</h3>
                <h3>Color: {productInfo.color}</h3>
            </>
        );
    }
}

export default Cheap;