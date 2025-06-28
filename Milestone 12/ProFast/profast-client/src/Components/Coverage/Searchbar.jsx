import { FaSearch } from "react-icons/fa";
import { warehouse } from "./warehouses";

function Searchbar({ setPosition, setZoom, setMapRef, mapRef }) {
    function formHandler(event) {
        event.preventDefault();
        const search = event.target.search.value;
        const desiredLocation = warehouse.find((singleLocation) => {
            return singleLocation.district.toUpperCase().includes(search.toUpperCase());
        })

        console.log(desiredLocation);
        // setPosition([desiredLocation.latitude, desiredLocation.longitude]);
        // setZoom(13);
        mapRef.setView([desiredLocation.latitude, desiredLocation.longitude], 13)
    }

    function onChangeHandler(event) {
        console.log(event.target.value);
        if (event.target.value == "") {
            // setPosition([23.8103, 90.4125]);
            // setZoom(7);
            mapRef.setView([23.8103, 90.4125], 7)
        }
    }
    return(
        <form onSubmit={formHandler}>
            <label className="flex items-center gap-2 bg-[#f4f4f4] h-12 rounded-[50px] w-[571px] pl-7">
                <FaSearch size = {24}></FaSearch>                
                <input onChange={onChangeHandler} type="search" name = "search" required placeholder="Search here ..." className="focus:outline-0 w-full"/>
                <button className="btn text-lg rounded-[50px] bg-[#CAEB66] px-10 h-full">Search</button>
            </label>
        </form>
    )
}

export default Searchbar;