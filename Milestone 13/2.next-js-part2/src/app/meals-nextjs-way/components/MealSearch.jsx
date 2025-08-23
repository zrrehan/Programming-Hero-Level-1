"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function MealSearch() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const pathname = usePathname();
    
    useEffect(() => {
        const searchQuery = {search}
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url)
    }, [search])
    return(
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
    )
}

export default MealSearch;