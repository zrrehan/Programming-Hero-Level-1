import axios from "axios";

function Axios() {
    function getClicked() {
        axios.get("http://localhost:3000/")
            .then((data) => {
                console.log(data) // returns a object that has a lots if things
            })
    }


    function postClicked() {
        axios.post("http://localhost:3000/", {name: "rehan", profession: "SWE"})
            .then((data) => {
                console.log(data);
            })
    }
    return(
        <div>
            <button onClick={getClicked} className="btn btn-primary">Get Button</button>
            <button onClick = {postClicked} className="btn btn-accent">Post Button</button>
        </div>
    )
}

export default Axios