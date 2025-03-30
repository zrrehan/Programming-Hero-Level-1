
import { manageCartItem } from "../utilities";
function CartCard({ id, name, price, quantity, img, setCart }) {
    return(
        <div className="card py-3 w-[95%] bg-base-100 card-xs shadow-sm mt-7">
            <div className="flex justify-start gap-20 px-8 items-center">
                <div className="h-26 w-[50%]">
                    <img className="h-full" src={img} alt="" />
                </div>
                <div className="w-full">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-soft btn-error hover:text-white" onClick={() => manageCartItem(id, setCart)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCard;