const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closebtn = document.querySelector(".close-btn");


toggle.addEventListener("click", () => {
    console.log("hi")
    // if (sidebar.classList.contains("show-sidebar")) {
    //     sidebar.classList.remove("show-sidebar")
    // }
    // else{
    //     sidebar.classList.add("show-sidebar")
    // }
    sidebar.classList.toggle("show-sidebar")
})

closebtn.addEventListener("click",()=>{
sidebar.classList.remove("show-sidebar")
})