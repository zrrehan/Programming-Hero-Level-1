import { NavLink, Outlet, useNavigation } from "react-router";
function Header() {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return(
        <div>
            <div>
                <NavLink to="route1">route1</NavLink>
                <NavLink to="route2">Route2</NavLink>
            </div>
            {isNavigating && <p>Loading...</p>}
            <Outlet></Outlet>
        </div>
    )
}

export default Header;