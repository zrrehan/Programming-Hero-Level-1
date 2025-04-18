import { createBrowserRouter } from "react-router";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import Description from "./Component/Description";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index:true, Component: Home},
            {path: "listed-books", element: <div>listed Books</div>},
            { path: "pages-to-read", element: <div>pages to read</div>},
            {
                path: "description/:id",
                loader: () => fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"), 
                Component: Description
            }
        ]
    }
])

export default router;