"use client"
import { useEffect, useState } from "react";

function MealReactWay() {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState("");
    
    async function fetchMeals() {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data = await res.json();
        setMeals(data?.meals || []);
    }

    useEffect(() => {
        fetchMeals();
    }, [search])
    return (
        <div > 
            <div className="flex justify-center my-10">
                {
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                    </label>
                }
            </div>
            <div className="grid grid-cols-3">
                {
                    meals.map(singleData => <div className="card bg-base-100 w-96 col-span-1 shadow-sm">
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
                    </div>)
                }
            </div>
        </div>
    )
}  

export default MealReactWay;