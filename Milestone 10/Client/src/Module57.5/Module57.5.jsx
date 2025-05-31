import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Axios from "./1_Axios";
import TanStackWithout from "./2_TanStackWithout";
import TanStack from "./3_TanStack";

const queryClient = new QueryClient()

function Module57_5() {
    return(
        <div>
            <h1 className="divider">Axios</h1>
            <Axios></Axios>

            <h1 className="divider">Without TanStack Query</h1>
            <TanStackWithout></TanStackWithout>

            <h1 className="divider">With TabStack Query</h1>
            <QueryClientProvider client={queryClient}>
                <TanStack></TanStack>
            </QueryClientProvider>
        </div>
    )
}

export default Module57_5;