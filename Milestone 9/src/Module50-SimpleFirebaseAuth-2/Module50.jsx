import Login from "./Login";
import Register from "./Register";

function Module50() {
    return(
        <div className="tabs tabs-lift w-[500px] mx-auto">
            <label className="tab">
                <input type="radio" name="my_tabs_4" />
                <h1 className="text-2xl font-bold">Login</h1>
            </label>
            <div className="tab-content bg-base-100 border-base-300 p-6">
                <Login></Login>
            </div>

            <label className="tab">
                <input type="radio" name="my_tabs_4" defaultChecked />
                <h1 className="text-2xl font-bold">Register</h1>
            </label>
            <div className="tab-content bg-base-100 border-base-300 p-6">
                <Register></Register>
            </div>
        </div>
    )
}

export default Module50;