async function Users() {
    const res = await fetch("http://localhost:3000/api/users",
        {cache: "force-cache"} // it says use cache data; dont fetch always 
        // and in backend we have to say if someone posted revaldate the path 
        // check out api/users/route.js
    );
    const data = await res.json();
    return(
        <div>
            {
                data.map((singleData) => <li key = {singleData.id}>{singleData.name}</li>)
            }
        </div>
    )
}

export default Users;