const sun = document.querySelector(".light_mode")
const moon = document.querySelector(".dark_mode")
const hamburger = document.querySelector(".menuMobile")
const menu = document.querySelector(".navBar_items")

const anchors = menu.children


hamburger.addEventListener("click", () =>{
    menu.classList.toggle("inactive")
})

function hideMenu(){
    menu.classList.add("inactive")
}

function updateMenu() {
    if (window.innerWidth < 620) {
    menu.classList.add('inactive');
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener("click", hideMenu)
    }
    } else {
    menu.classList.remove('inactive');
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].removeEventListener("click", hideMenu)
    }
    }
}

updateMenu();
window.addEventListener('resize', updateMenu);

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if(prefersDarkMode){
    document.documentElement.setAttribute("data-theme", "dark");
    moon.classList.add("inactive")
    sun.classList.remove("inactive")
}else{
    document.documentElement.setAttribute("data-theme", "light");
    sun.classList.add("inactive")
    moon.classList.remove("inactive")
}


function toggleToDark(e){
    if (!e.target.className.includes("inactive")) {
        document.documentElement.setAttribute("data-theme", "dark");
    } 
    moon.classList.add("inactive")
    sun.classList.remove("inactive")
}
function toggleToLight(e){
    if (!e.target.className.includes("inactive")) {
        document.documentElement.setAttribute("data-theme", "light");
    } 
    sun.classList.add("inactive")
    moon.classList.remove("inactive")
}




sun.addEventListener("click", toggleToLight)
moon.addEventListener("click", toggleToDark)