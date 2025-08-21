async function SinglePost({params}) {
    const id = params.id;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then(res => res.json());
    return(
        <div className="">
            {JSON.stringify(data)}
        </div>
    )
}

export default SinglePost