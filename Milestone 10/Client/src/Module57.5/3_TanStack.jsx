import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "@tanstack/react-query";

function TanStack() {
    const queryClient = useQueryClient()
    const {isPending, data: user} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            return res.json();
        }
    })

    if(isPending) {
        return <p className="bg-red-300">Loading...</p>
    }


    return(
            <div>
                {
                    user.map(data => <p>{data.name}</p>)
                }
            </div>
    )
}

export default TanStack;