let menuBtn = document.getElementById("menu-button");
let mavList = document.getElementsByClassName("nav-list");

menuBtn.addEventListener('click', () => {
    mavList.classList.toggle("active")
})

