import { Link } from "react-router";

function Error() {
    return(
        <div className="text-center space-y-7">
            <h1 className="text-9xl">404 Not Found</h1>
            <h1 className="text-5xl">OOPS! You are lost! Return to Home</h1>
            <Link to = "/"><button className="btn green-btn py-6 px-16 rounded-3xl text-3xl">Go To Home</button></Link>
        </div>
    )
}

export default Error;