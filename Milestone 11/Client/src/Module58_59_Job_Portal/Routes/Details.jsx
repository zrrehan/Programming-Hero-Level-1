import { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";


function Details() {
    let {id} = useParams();
    const [data, setData] = useState({});
    const [load, setLoad] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:3000/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoad(false)
            })
    }, [])

    if(load) {
        return <p>loading...</p>
    }
    
    const { company_logo, description, title, jobType} = data


    function formHandler(event) {
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form)

        const entry = formData.entries();
        const data = Object.fromEntries(entry)
        console.log(data)

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Job applied fakely no DB connection"
          });
    }
    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={company_logo}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">
                        {description}
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={formHandler} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name = "email" />
                            <label className="label">Password</label>
                            <input type="text" className="input" placeholder="LinkedIn" name = "linkedIn"/>
                            <button className="btn btn-neutral mt-4">Apply</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;