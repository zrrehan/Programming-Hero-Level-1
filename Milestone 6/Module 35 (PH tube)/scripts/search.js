let search = document.querySelector("#search-bar");
search.addEventListener("keyup", async (event) => {
    let letter = event.target.value;
    let response = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos");
    let data = await response.json();
    videos = data.videos
    newData = [];
    console.log(videos);
    for(let vid of videos) {
        if (vid.title.toLowerCase().includes(letter.toLowerCase()) || vid.authors[0].profile_name.toLowerCase().includes(letter.toLowerCase())) {
            newData.push(vid);
        }
    }
    showAllVideos("custom", newData);
})