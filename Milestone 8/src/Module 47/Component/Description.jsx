import { useLoaderData, useParams } from "react-router";
import { dbAdd } from "../utility.js";

function Description() {
    let {id} = useParams()
    let data = useLoaderData();
    data = JSON.parse(data);
    let specificData = data.find((item) => item.bookId == id);
    const {bookId, image, bookName, author, review, tags, category, totalPages, rating, yearOfPublishing, publisher } = specificData
    return(
        <div className="lg:flex mt-24 justify-start gap-[5%] h-[711px] ">
            {/* image container  */}
            <div className="w-[45%] rounded-2xl h-full bg-[rgba(19,19,19,0.05)] flex justify-center items-center">
                <div className="h-[564px]">
                    <img className="h-full rounded-tl-2xl rounded-br-2xl shadow-2xl" src= {image}/>
                </div>
            </div>

            <div className="w-[50%] flex flex-col justify-between">
                <div>
                    <h1 className="header-font font-bold text-[40px]">{bookName}</h1> 
                    <h3 className="font-semibold">By: {author}</h3>
                </div>   
                <div class="divider"></div>
                <h1 className="text-2xl font-bold text-[rgba(19,19,19,0.6)]">{category}</h1>
                <div class="divider"></div>
                <div className="space-y-4">
                    <p className="text-sm"><b>Review: </b>{review}</p>
                    <div className="space-x-4">
                        {tags.map(tag => <div class="badge badge-soft badge-success">{tag}</div>)}
                    </div>
                </div>
                <div class="divider"></div>
                <table>
                    <tr>
                        <td className="pr-20">Number of Pages:</td>
                        <td><b>{totalPages}</b></td>
                    </tr>
                    <tr>
                        <td>Publisher:</td>
                        <td><b>{publisher}</b></td>
                    </tr>
                    <tr>
                        <td>Year of Publishing:</td>
                        <td><b>{yearOfPublishing}</b></td>
                    </tr>
                    <tr>
                        <td>Rating:</td>
                        <td><b>{rating}</b></td>
                    </tr>
                </table>
                <div className="flex gap-5">
                    <button className="btn" onClick={() => dbAdd("read", bookId)}>Read</button>
                    <button className="btn secondary-btn" onClick={() => dbAdd("wishlist", bookId)}>Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default Description;

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