import Login from "./Login";
import Register from "./Register";

function Auth() {
    return(
        < div className = "tabs tabs-border" >
            <input type="radio" name="my_tabs_2" className="tab" aria-label="Login" />
            <div className="tab-content border-base-300 bg-base-100 p-10">
                <Login></Login>
            </div>

            <input type="radio" name="my_tabs_2" className="tab" aria-label="Register" defaultChecked />
            <div className="tab-content border-base-300 bg-base-100 p-10">
                <Register></Register>
            </div>
        </div >
    )
}

export default Auth;