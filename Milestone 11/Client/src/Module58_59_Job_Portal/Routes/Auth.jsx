import Login from "../Components/Login"
import Register from "../Components/Register"

function Auth() {
    return(
        <div className="tabs tabs-border">
            <input type="radio" name="my_tabs_2" className="tab" aria-label="Login" defaultChecked />
            <div className="tab-content border-base-300 bg-base-100 p-10">
                <Login></Login>
            </div>

            <input type="radio" name="my_tabs_2" className="tab" aria-label="Register" />
            <div className="tab-content border-base-300 bg-base-100 p-10">
                <Register></Register>
            </div>

            
        </div>
    )
}

export default Auth