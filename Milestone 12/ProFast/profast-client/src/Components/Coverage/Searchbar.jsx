import { FaSearch } from "react-icons/fa";

function Searchbar() {
    return(
        <div>
            <label className="flex items-center gap-2 bg-[#f4f4f4] h-12 rounded-[50px] w-[571px] pl-7">
                <FaSearch size = {24}></FaSearch>                
                <input type="search" required placeholder="Search here ..." className="focus:outline-0 w-full"/>
                <span className="btn text-lg rounded-[50px] bg-[#CAEB66] px-10 h-full">Search</span>
            </label>
        </div>
    )
}

export default Searchbar;