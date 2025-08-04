import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import ExampleTanStack from './ExampleTanStack';


const queryClient = new QueryClient();
function TanstackQuery() {
    return(
        <QueryClientProvider client={queryClient}>
            <ExampleTanStack></ExampleTanStack>
        </QueryClientProvider>
    )
}

export default TanstackQuery;