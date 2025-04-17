function Form({product, setProduct}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;

        let newProduct = {name: name, price: price}
        product = [...product, newProduct];
        setProduct(product)
    }

    return (
        <div>
            <h3 className="text-3xl font-bold">Add a product</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name = "name" className="border-2 mb-2" placeholder="Product Name"/> <br />
                <input type="text" name = "price" className="border-2 mb-2" placeholder="Price" /> <br />
                <button className="btn btn-secondary">Submit</button>
            </form>
        </div>
    );
}

export default Form;