const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list")


arrows.forEach((arrow,index) => {
    const itemLength = movieLists[index].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth /333);
        clickCounter++;
        if(itemLength-(4+clickCounter) + (4-ratio) >= 0) {
            movieLists[index].style.transform = `translateX(${movieLists[index].computedStyleMap().get("transform")[0].x.value - 365}px)`
        } else {
            movieLists[index].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    })
})



// TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .sidebar-icons");
const toggle = document.querySelector(".toggle");


toggle.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    })
    toggle.classList.toggle("active");
    ball.classList.toggle("active");
})
