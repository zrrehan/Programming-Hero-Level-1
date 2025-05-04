import { AiTwotoneStar } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router";

function News({newsData}) {
    const {id,  author, title, image_url, details, rating, total_view } = newsData;
    const ratingStar = [] 
    for(let i = 0; i < rating.number; i++) {
        ratingStar.push(<AiTwotoneStar size={24} />)
    }

    return(
        <div className="mb-3">
            <div className="flex justify-between bg-gray-200 p-3 items-center rounded-t-2xl">
                <div className="flex justify-center items-center gap-2">
                    <div className="w-[40px] h-[40px]">
                        <img className="w-full h-full rounded-full" src={author.img} alt="Author Image" />
                    </div>
                    <div className="text-start">
                        <h1>{author.name}</h1>
                        <h1>{author.published_date.slice(0, 10)}</h1>
                    </div>
                </div>
                <div className="flex gap-2">
                    <CiBookmark size = {24}/>
                    <CiShare2 size={24}/>
                </div>
            </div>

            <div className="p-6 border border-[#E7E7E7] border-t-0 rounded-b-2xl">
                <h1 className="font-bold text-[#403F3F] text-[20px] text-start">{title}</h1>

                <div className="w-full h-[262px] rounded-xl my-4">
                    <img src={image_url} alt="" className="h-full w-full rounded-xl object-cover" />
                </div>

                <div>
                    <p className="text-start">{details.slice(0, 200)} <Link to= {`/view-more/${id}`} className="text-orange-500 font-semibold">Read More</Link></p>
                </div>

                <div class="divider"></div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1">{ratingStar}</div>
                        <p className="text-orange-500 font-semibold text-xl">{rating.number}.0</p>
                    </div>
                    <div className="flex gap-2">
                        <IoEyeOutline size={24} />
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;



// {
//     "id": "bcdefa0123456789bcdefa01",
//     "category_id": 2,
//     "title": "Bangladesh's Export Earnings Show Strong Growth in Q1 2025",
//     "rating": {
//       "number": 4,
//       "badge": "trending"
//     },
//     "total_view": 6789,
//     "author": {
//       "name": "Shirin Akter",
//       "published_date": "2025-04-22T17:00:00.000Z",
//       "img": "https://randomuser.me/api/portraits/women/29.jpg"
//     },
//     "thumbnail_url": "https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg",
//     "image_url": "https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg",
//     "details": "Bangladesh's export sector has demonstrated robust performance in the first quarter of 2025, registering significant growth compared to the same period last year. Key sectors such as readymade garments and leather goods have contributed substantially to this positive trend. The increase in export earnings is attributed to rising global demand and the government's supportive policies aimed at enhancing trade competitiveness. Analysts predict continued growth in the coming quarters, provided that global economic conditions remain favorable and domestic industries maintain their momentum. This positive export performance is expected to have a favorable impact on the country's foreign exchange reserves and overall economic stability.",
//     "tags": ["exports", "economy", "business", "growth", "trade"],
//     "others": {
//       "is_today_pick": true,
//       "is_trending": true
//     },
//     "production": true
//   }