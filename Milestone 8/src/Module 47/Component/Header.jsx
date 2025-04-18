import img from "../Asset/hero-img.png"
function Header() {
    return(
        <div className="flex justify-between px-[116px] py-[80px] items-center mt-[56px] mb-[92px] bg-[rgba(19,19,19,0.05)] rounded-3xl">
            <div className="w-[526px] space-y-12">
                <h1 className="header-font text-[56px] font-bold">Books to freshen up your bookshelf</h1>
                <a href="#bookList"><button className="btn px-[28px] py-[21px] green-btn">View The List</button></a>
            </div>

            <div className="w-[318px]">
                <img className="w-full" src={img} />
            </div>
        </div>
    )
}

export default Header;