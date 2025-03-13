const addAllCategories = (categories) => {
    let categoryDiv = document.querySelector("#categories");
    for(let obj of categories) {
        let button = document.createElement("button");
        button.setAttribute("class", "btn hover:bg-[#FF1F3D] hover:text-[white]");
        button.innerText = obj.category
        categoryDiv.appendChild(button);
    }
}

const fetchCatefories = async () => {
    let response = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
    let data = await response.json();
    addAllCategories(data.categories);
}

fetchCatefories()