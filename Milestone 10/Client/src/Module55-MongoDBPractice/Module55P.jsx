import { use } from "react";


let dataPromise = fetch("http://localhost:3000/getAll").then((res => res.json()));

function Module55P() {
    const data = use(dataPromise);
    function submitHandler(event) {
        event.preventDefault();
        const [name, number] = [event.target.name.value, event.target.number.value];
        fetch("http://localhost:3000/", {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({name, number})
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
        
    }   

    function dataDelete(id) {
        console.log(id);
        fetch("http://localhost:3000/", {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({id})
        }).then(res => res.json())
            .then(data => console.log(data));
    }

    function updateNumber(event, id) {
        event.preventDefault();
        fetch("http://localhost:3000/", {
            method: "PUT", 
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({id, number: event.target.number.value})
        }).then(res => res.json())
            .then(data => console.log(data));
    }
    return(
        <div>
            <form onSubmit = {submitHandler}>
                <input type="text" placeholder="Type here" className="input" name = "name"/>
                <input type="text" placeholder="Type here" className="input" name = "number"/>
                <button className="btn">Add</button>
            </form>

            <div>
                {
                    data.map((single) => <div className="bg-blue-950 my-4 py-7 flex flex-col items-center">
                        Name: {single.name} Number: {single.number} <button className="btn" onClick ={() => dataDelete(single._id)}>Delete</button>
                        <form onSubmit={(event) => updateNumber(event, single._id)}>
                            <input type="text" placeholder="Type here" className="input" name="number" />
                            <button className="btn">Update</button>
                        </form>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Module55P;