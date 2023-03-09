const sun = document.querySelector(".light_mode")
const moon = document.querySelector(".dark_mode")

function toggleToDark(e){

    // if (e.target.classList == "inactive") {
    //     document.documentElement.setAttribute("data-theme", "dark");
    // } else {
    //     document.documentElement.setAttribute("data-theme", "light");
    // }
    if (!e.target.className.includes("inactive")) {
        document.documentElement.setAttribute("data-theme", "dark");
    } 

    moon.classList.add("inactive")
    sun.classList.remove("inactive")
    console.log( document.documentElement)
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