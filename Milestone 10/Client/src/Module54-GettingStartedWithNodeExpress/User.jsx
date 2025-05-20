function User({ data }) {
    console.log(data);
    return(
        <div>
            {
                data.map((person) => <h1>{person.name} - {person.email}</h1>)
            }
        </div>
    )
}

export default User;