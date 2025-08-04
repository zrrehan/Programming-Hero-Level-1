import { useQuery } from "@tanstack/react-query";

function ExampleTanStack() {
    const {data, isPending, isError, error} = useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/comments");
            return res.json();
        }
    })

    if(isPending) {
        return <p className="bg-red-400">Loading....</p>
    }

    if(isError) {
        return <p>{error.message}</p>
    }
    
    
    return(
        <div>
            {
                data?.map((singleData) => <p>{singleData.email}</p>)
            }
        </div>
    )
}

export default ExampleTanStack;