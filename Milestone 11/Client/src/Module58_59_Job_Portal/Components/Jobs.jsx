import { use } from "react";
import { Link } from "react-router";

function Jobs({dataPromise}) {
    const data = use(dataPromise)
    console.log(data);
    return(
        <div className="grid grid-cols-3">
            {
                data.map((info) => {
                    const {_id, company_logo, description, title } = info
                    return <div>
                                <div className="card bg-base-100 w-96 shadow-sm">
                                    <figure>
                                        <img
                                            src={company_logo}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                    <h2 className="card-title">{title}</h2>
                                        <p>{description}</p>
                                        <div className="card-actions justify-end">
                                        <Link to = {`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                           </div>
                })
            }
        </div>
    )
}

export default Jobs;