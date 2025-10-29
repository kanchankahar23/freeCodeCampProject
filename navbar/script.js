// classlist - shows/gets all classes
// contains = checks classlist for specific classes
// add -add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click",()=>{
    console.log("hi")
    console.log(links.classList.contains("random"))

    // if(links.classList.contains('show-links')){
    //     links.classList.remove("show-links");
    // }

    // else{
    //     links.classList.add("show-links")
    // }
    links.classList.toggle("show-links")
})