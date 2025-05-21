import { use, useState } from "react";

function Users({ dataPromise }) {
    // const data = use(dataPromise);
    // console.log(data);
    const [user, setUser] = useState(use(dataPromise));
    console.log(user);

    function submitHandler(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const newUser = {name, email}

        // create user in the db 
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log("data after creating in the DB", data);
                console.log(data);
                newUser._id = data.insertedId;
                setUser([...user, newUser]);
                event.target.reset()
            })
    }

    function handleDelete(id) {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                let newUsers = user.filter((singleData) => singleData._id !== id);
                setUser(newUsers)
            })
    }

    // function handleUpdate(event) {
    //     event.preventDefault();
    //     // const email = event.target.email.value;
    //     // console.log(id);
    //     // // fetch(`http://localhost:3000/users/${user._id}`)
    // }

    function handleUpdate(event, id) {
        event.preventDefault();
        const email = event.target.email.value;
        
        fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify({email})
        })
        .then(res => res.json())
        .then(data => {
            console.log("after PUT:", data);
        })
    }

    return(
        <div>
            {/* add users  */}
            <form onSubmit={submitHandler} className="flex flex-col items-center my-6 gap-5">
                <input type="text" placeholder="Name" className="input" name = "name"/> 
                <input type="text" placeholder="Email" className="input" name = "email"/> 
                <button className="btn btn-primary">Add User</button>
            </form>

            <div>
                {
                    user.map((singleData) => {
                        return <div key = {singleData._id} className="border-2 rounded-2xl my-2 p-2"> 
                            {singleData.name}: {singleData.email}
                            <button onClick={() => handleDelete(singleData._id)} className="btn btn-error">X</button>
                            <br />
                            <form onSubmit={(event) => handleUpdate(event, singleData._id)}>
                                <input type="text" placeholder="Update Email" className="input" name="email" />
                                <button className="btn btn-success">Update</button>
                            </form>
                        </div>

                    })
                }
            </div>
        </div>
    )
}

export default Users;