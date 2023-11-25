const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu")
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', culose);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = 0;
    closeMenu.style.color = "#fff"
}

function culose(){
    mainMenu.style.top =  '-150%'
}

function Closed(){
    culose();
}

window.addEventListener("scroll", function(){
    var nav = document.querySelector("header");
    nav.classList.toggle("sticky", window.scrollY > 0)
})