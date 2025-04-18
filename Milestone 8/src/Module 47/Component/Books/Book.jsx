import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

function Book({ bookInfo }) {
    console.log(bookInfo)
    const { bookId, bookName, author, image, tags, category, rating } = bookInfo;
    return(
        <Link to={`description/${bookId}`}>
            <div className="h-[482px] w-[374px] border p-6 border-[rgba(19,19,19,0.15)] rounded-2xl flex flex-col justify-between">
                {/* ing container */}
                <div className="px-[100px] py-8 bg-[#F3F3F3] rounded-2xl">
                    <div className="h-[166px] w-[124.81px]">
                        <img className="h-full" src={image} />
                    </div>
                </div>

                {/* Tags  */}
                <div className="space-x-3">
                    {
                        tags.map((tag) => <div class="badge badge-soft badge-success">{tag}</div>)
                    }
                </div>

                {/* book info  */}
                <div className="w-[250px] h-[67px] flex flex-col justify-between">
                    <h1 className="header-font font-bold text-2xl">{bookName}</h1>
                    <h3>By: {author}</h3>
                </div>

                <div className="border-t-2 border-dashed border-[rgba(19,19,19,0.15)]"></div>
                <div className="flex justify-between">
                    <p>{category}</p>
                    <div className="flex space-x-3 items-center">
                        <p>{rating}</p>
                        <CiStar />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Book;


// {
//     "bookId": 1,
//     "bookName": "The Great Gatsby",
//     "author": "F. Scott Fitzgerald",
//     "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 192,
//     "rating": 4.5,
//     "category": "Classic",
//     "tags": ["Fiction", "Romance"],
//     "publisher": "Scribner",
//     "yearOfPublishing": 1925
//   },