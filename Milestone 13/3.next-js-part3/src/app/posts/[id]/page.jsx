export async function generateMetadata({ params }) {
    // read route params
    const { id } = await params

    // fetch data
    const singlePostData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json());


    return {
        title: singlePostData.title.slice(0,10),
        description: SinglePost.title
    }
}

async function SinglePost({ params }) {
    const id = params.id;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json());
    return (
        <div className="">
            {JSON.stringify(data)}
        </div>
    )
}

export default SinglePost