import Users from "./FullCycle/Users";


const dataPromise = fetch("http://localhost:3000/users").then((res) => res.json());

function Module55() {
    return(
        <div>
            <Users dataPromise={dataPromise}></Users>
        </div>
    )
}

export default Module55;