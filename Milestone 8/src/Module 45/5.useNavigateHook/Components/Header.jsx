import { Outlet, useNavigate } from "react-router";
function Header() {
    const navigate = useNavigate(); 
    return (
        <div>
            <div>
                <button className="btn" onClick={() => navigate("/1")}>Route1</button>
                <button className="btn" onClick={() => navigate("/2")}>Route2</button>
                <button className="btn" onClick={() => navigate(-1)}>Back</button>
            </div>
            <Outlet></Outlet>
        </div>
    );
}
export default Header;