"use client";
import { useRouter } from "next/navigation";

 
function AddUsers() {
    const router = useRouter();
    async function submitHandler(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const res = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            body: JSON.stringify({name}), 
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await res.json();
        console.log(result);
        router.push("/users")
        // use router will be use for csr 
        // redirect will be use for ssr (google it)
    }
    return(
        <form className="join" onSubmit={submitHandler}>
            <input className="input join-item" placeholder="Name" name = "name" />
            <button className="btn join-item rounded-r-full">ADD User</button>
        </form>
    )
}

export default AddUsers