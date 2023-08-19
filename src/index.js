const changeMode = document.querySelector(".navBar_darkMode ")
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
    changeMode.classList.add("active")
}else{
    document.documentElement.setAttribute("data-theme", "light");
    changeMode.classList.remove("active")
}


function handleMode(){
    if (!changeMode.className.includes("active")) {
        document.documentElement.setAttribute("data-theme", "dark");
        changeMode.classList.toggle("active");
    }else{
        document.documentElement.setAttribute("data-theme", "light");
        changeMode.classList.toggle("active");
    }
}


changeMode.addEventListener("click", handleMode)
