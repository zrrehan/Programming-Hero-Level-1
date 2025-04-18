import { createBrowserRouter } from "react-router";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import Description from "./Component/Description";
import ListedBooks from "./Pages/ListedBooks";
import PageToRead from "./Pages/PageToRead";
import Error from "./Pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index:true, Component: Home},
            {path: "listed-books", Component: ListedBooks},
            { 
                path: "pages-to-read",
                loader: () => fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"),
                Component: PageToRead
            },
            {
                path: "description/:id",
                loader: () => fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"), 
                Component: Description
            },
            {
                path: "*",
                Component: Error,
            }
        ]
    }
])

export default router;