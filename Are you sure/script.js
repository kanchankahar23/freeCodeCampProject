const modaloverlay = document.querySelector(".modal-overlay");
const closebtn = document.querySelector(".close-btn");
const btnmodalbtn = document.querySelector(".btn-modal-btn");

btnmodalbtn.addEventListener("click",()=>{

 console.log("hi")
 console.log(modaloverlay.classList)
 modaloverlay.classList.add("open-modal")
})
closebtn.addEventListener("click",()=>{
    console.log("close")
    modaloverlay.classList.remove("open-modal")
})