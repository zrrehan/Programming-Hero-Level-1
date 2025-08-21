function Layout({children}) {
    return(
        <div className="grid grid-cols-12">
            <div className="col-span-3 bg-red-800 text-white">
                <li>user list</li>
            </div>

            <div className="col-span-9">
                {children}
            </div>
        </div>
    )
}

export default Layout;