import { use } from "react";
import { useParams } from "react-router";
import News from "./News";

const dataPromise = fetch("/news.json")
    .then((res) => res.json());

function Category() {
    const newsData = use(dataPromise);
    console.log(newsData);
    window.scrollTo(0, 0);

    const {id} = useParams();
    let filteredNews = [];
    if(id == 0) {
        filteredNews = newsData;
    } else if(id == 1) {
        filteredNews = newsData.filter((news) => news.others.is_today_pick);
    } else {
        filteredNews = newsData.filter((news) => news.category_id == id);
    }
    return(
        <div className="text-center">
            <h1 className="text-xl font-medium">Total - <span className="text-pinkBtn text-2xl font-semibold">{filteredNews.length}</span> News</h1>
            <div>
                {
                    filteredNews.map((newsData) => <News newsData={newsData}></News>)
                }
            </div>
        </div>
    )
}

export default Category;