function Navbar() {
    return(
        <div className="flex  justify-between items-center my-[20px]">
            <h1 className="text-[28px] font-bold">Book Vibe</h1>
            <div className="space-x-4">
                <button className="btn">Home</button>
                <button className="btn">Listed Books</button>
                <button className="btn">Pages to Read</button>
            </div>
            <div className="space-x-4">
                <button className="btn px-[28px] py-[18px]">Sign In</button>
                <button className="btn px-[28px] py-[18px]">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar;