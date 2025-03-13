const addAllCategories = (categories) => {
    let categoryDiv = document.querySelector("#categories");
    for(let obj of categories) {
        let button = document.createElement("button");
        button.setAttribute("class", "btn");
        button.setAttribute("id", "btn-"+obj.category_id);
        button.addEventListener("click", function() {
            buttonToggle(obj.category_id);
        });
        button.innerText = obj.category
        categoryDiv.appendChild(button);
    }
}

function buttonToggle(category = "all") {
    showAllVideos(category);
    let prevButton = document.querySelector(".active-button");
    prevButton.setAttribute("class", "btn")
    let newButton = document.querySelector(`#btn-${category}`);
    newButton.setAttribute("class", "btn active-button");

}

const fetchCatefories = async () => {
    let response = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
    let data = await response.json();
    addAllCategories(data.categories);
}

fetchCatefories()

function helloFunc() {
    console.log(123)
}


const showAllVideos = async (category = "all", allVideo = []) => {
    let videos;
    if(category == "all") {
        let response = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos");
        let data = await response.json();
        videos = data.videos
    } else if(category == "custom") {
        videos = allVideo;
    } else {
        let response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${category}`);
        let data = await response.json();
        videos = data.category
    }
    let main = document.querySelector("main");
    main.innerHTML = "";
    if(videos.length == 0) {
        document.querySelector("#nothing").style.display = "block"
    }
    for(let items of videos) {
        document.querySelector("#nothing").style.display = "none"
        let verification = ""; 
        if (items.authors[0].verified) {
            verification = `<div class = "b">
                                <img class = "h-5" src="assets/verified.png" alt="verified">
                            </div>`
        }
        let card = `
        <div class="card bg-base-100 w-96 shadow-sm pb-4" onclick="${items.video_id}.showModal()">
            <figure>
                <img class = "h-[200px] w-full object-cover" src=${items.thumbnail} alt="Thumbnail" />
            </figure>
            <div class = "absolute top-[170px] left-[270px] mr-0 text-center text-white bg-[#26262670] w-24 rounded-lg ">
                ${(parseInt(Math.random() * 25))} : ${(parseInt((Math.random() + 0.15) * 59))}
            </div>
            <div class="flex gap-4 mt-3 ml-5">
                <div class="avatar w-12 h-12">
                    <div class="w-full rounded-full">
                        <img src="${items.authors[0].profile_picture}" />
                    </div>
                </div>
                <div>
                    <h2 class="card-title">${items.title}</h2>
                    <div class = "flex gap-3">
                        <span >${items.authors[0].profile_name}</span>
                        ${verification}
                    </div>
                    <p>${items.others.views} views</p>
                </div>
            </div>
        </div>
        
        <dialog id="${items.video_id}" class="modal">
            <div class="modal-box w-11/12 max-w-5xl">
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-[0px] top-[0px]">✕</button>
                </form>
                <div class="card bg-base-100 image-full w-96 shadow-sm mx-auto">
                <figure>
                    <img
                    src=${items.thumbnail} />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${items.title}</h2>
                    <p>${items.description}</p>
                    
                </div>
                </div>
            </div>
        </dialog>
        `;

        main.innerHTML += card
    }
}

showAllVideos();