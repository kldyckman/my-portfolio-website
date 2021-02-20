const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");
const projects = document.querySelector(".projects");
const skills = document.querySelector(".skills");
const education = document.querySelector(".education");
const resume = document.querySelector(".resume");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-bars fa-lg'></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-times fa-lg'></i>";
    }
}
 
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
about.addEventListener("click", toggleMenu, true);
projects.addEventListener("click", toggleMenu, true);
skills.addEventListener("click", toggleMenu, true);
education.addEventListener("click", toggleMenu, true);
resume.addEventListener("click", toggleMenu, true);