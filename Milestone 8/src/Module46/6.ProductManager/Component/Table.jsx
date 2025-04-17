function Table({ product }) {
    console.log(product);
    return(
        <div>
            <h1>Cart</h1>
            {
                product.map((item) => {
                    console.log(item.name, "HELLO")
                    return <h1>{item.name} = {item.price}</h1>
                })
            }
        </div>
    );
}

export default Table;