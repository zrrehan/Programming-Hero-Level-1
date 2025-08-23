import Link from "next/link";

function Navbar() {
    return(
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">NextJS 3/4</a>
            </div>
            <div className="navbar-center ">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href = "/">Home</Link></li>
                    <li><Link href = "/posts">Posts</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWY_mMM_LWawCBnbKrSFOYrHEo9ixbvRKbA&s" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div> 
    )
}

export default Navbar;