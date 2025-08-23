import MealSearch from "./components/MealSearch";

async function MealNextJSWay({searchParams}) {
    console.log(searchParams);
    const query = await searchParams;
    console.log(query.search)

    const fetchMealsData = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
        const data = await res.json();
        return data;
    }

    const meals = await fetchMealsData();
    console.log(meals)
    return(
        <div>
            <MealSearch />
            <div className="grid grid-cols-3">
                {
                    meals?.meals?.map((singleData) => {
                        return <div key={singleData.idMeal} className="card bg-base-100 w-96 col-span-1 shadow-sm">
                            <figure>
                                <img
                                    src={singleData.strMealThumb}
                                    alt="Food Image" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{singleData.strMeal}</h2>
                                <p>{singleData.strInstructions.slice(0, 200)}...see more</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default MealNextJSWay;