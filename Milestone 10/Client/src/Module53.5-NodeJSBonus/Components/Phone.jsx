import { Link } from "react-router";

function Phone({ singlePhone }) {
    console.log(singlePhone)
    return(
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={singlePhone.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{singlePhone.name}</h2>
                <p>{singlePhone.descrition}</p>
                <div className="card-actions justify-end">
                    <Link to={`/phones/${singlePhone.id}`}><button className="btn btn-primary">view more</button></Link>                    
                </div>
            </div>
        </div>
    )
}

export default Phone;