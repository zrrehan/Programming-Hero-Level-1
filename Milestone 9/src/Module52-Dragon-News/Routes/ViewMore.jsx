import { use } from "react";
import { Link, useParams } from "react-router";
import RightSide from "../Components/RightSide";
import HeaderUp from "../Components/HeaderUp";

function ViewMore({ dataPromise }) {
    let params = useParams();
    const data = use(dataPromise);
    const { id } = params;
    const filtered = data.find((news) => news.id == id);
    const { thumbnail_url, title, details, category_id } = filtered
    return(
        <div>
            <HeaderUp></HeaderUp>

            <div className="grid grid-cols-12 gap-5 w-[90%] mx-auto max-w-[1140px] mt-8">
                <div className="col-span-9 space-y-4 ">
                    <div className="rounded-2xl flex justify-center w-full">
                        <img className="rounded-2xl w-full" src={thumbnail_url} alt="Thumbnail Picture" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <p>{details}</p>
                    </div>
                    <Link to={`/category/${category_id}`}><button className="btn btn-secondary bg-pinkBtn hover:bg-pink-700">All news in this category</button></Link>
                </div>
                <div className="col-span-3">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    )
}

export default ViewMore;