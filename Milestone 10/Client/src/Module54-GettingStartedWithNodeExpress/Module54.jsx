import { use, useState } from "react";
import User from "./User";


let dataPromise = fetch("http://localhost:3000/").then((res) => res.json());

function Module54() {
    // const data = use(dataPromise)
    const [data, setData] = useState(use(dataPromise));

    function formHandler(event) {
        event.preventDefault();
        const [name, email] = [event.target.name.value, event.target.email.value]
        const newData = {name, email}

        fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
              },
            body: JSON.stringify(newData)
        }).then((res) => res.json())
            .then(newData => {
                setData(newData)
            })
    }
    return(
        <div>
            <form onSubmit={formHandler} className="flex flex-col gap-4 items-center mt-5">
                <input type="text" placeholder="Name" className="input" name = "name"/>
                <input type="text" placeholder="Email Address" className="input" name = "email"/>
                <button className="btn btn-info w-fit">Add Person</button>
            </form>
            <User data={data}></User>
        </div>
    )
}

export default Module54;