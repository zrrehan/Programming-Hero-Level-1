import button from "daisyui/components/button";
import { getCart, buyAll } from "../utilities";
import CartCard from "./cartCard";

function Header({ setCart, setFilter }) {
    let cartItems = getCart();
    let cartSelected = true;
    if(JSON.stringify(cartItems) === "{}"){
        cartSelected = false
    }
    return(
        <div className= "flex justify-between w-11/12 mx-auto bg-gradient-to-r from-blue-950 via-purple-500 to-indigo-500 h-12 items-center p-8 rounded-2xl">
            <h1 className="text-4xl font-bold text-white">E-Commerce.io</h1>

            <label className="input rounded-4xl">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                <input type="search" placeholder="Search" onChange={(event) => setFilter(event.target.value)}/>
            </label>

            <div className="drawer drawer-end w-[50px]">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </label>
                </div>
                <div className="drawer-side z-20">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-[600px] p-4">
                        {/* Sidebar content here */}
                        {/* <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li> */}
                        <h1 className="text-center font-bold text-4xl">Your Cart</h1>
                        <br />
                        <hr />
                        {
                            cartSelected ? 
                                Object.keys(cartItems).map((id) => <CartCard id={id} setCart={setCart} name={cartItems[id]["name"]} price={cartItems[id]["price"]} quantity={cartItems[id]["quantity"]} img={cartItems[id]["img"]}></CartCard>)
                                : <div className="h-72 flex justify-center"><img className="h-full" src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" /></div>
                        }
                        {
                            cartSelected ? <button className="btn btn-primary mx-auto mt-6" onClick={() => buyAll(setCart)}>Buy All</button>:<h1 className="text-3xl font-semibold text-center">Your Cart Is Empty</h1>
                        }
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

export default Header;