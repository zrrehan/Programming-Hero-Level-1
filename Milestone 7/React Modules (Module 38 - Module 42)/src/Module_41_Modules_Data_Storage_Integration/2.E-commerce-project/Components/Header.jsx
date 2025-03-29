function Header() {
    return(
        <div className = "flex justify-between w-11/12 mx-auto bg-blue-950 h-12 items-center p-2.5 rounded-2xl">
            <h1 className="text-4xl font-bold text-white">E-Commerce.io</h1>

            <div className="drawer drawer-end w-[50px]">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </label>
                </div>
                <div className="drawer-side z-20">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

export default Header;