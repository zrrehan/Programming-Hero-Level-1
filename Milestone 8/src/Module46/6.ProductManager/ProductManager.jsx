import Table from "./Component/Table";  
import Form from "./Component/Form";  
import { useState } from "react";

function ProductManager() {
    const [product, setProduct] = useState([]);
    console.log(product, "hello")
    return(
        <div>
            <Form product={product} setProduct={setProduct}></Form>
            <Table product = {product}></Table>
        </div>
    )
}

export default ProductManager;