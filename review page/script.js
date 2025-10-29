const reviews = [
    {
        id: 1,
        name: "sunidhi",
        role: "UX designer",
        image: "https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
        des: "loremmmmmm mdksjskl sjnkln csnlslsn csncnln,nx, csnn,nshls s,mkjlknl cknaa caknklcnlnlnck nlkln  slkjal  lss snkl n kllsn  klnskl zsk scn lnc nkjcsj kjs  kjjl jkljl  dfkfjeic   yiow  zkl "
    },
    {
        id: 2,
        name: "ruhi",
        role: "web designer",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
        des: " mdksjskl sjnkln csnlslsn csncnln,nx, csnn,nshls s,mkjlknl cknaa caknklcnlnlnck nlkln  slkjal  lss snkl n kllsn  klnskl zsk scn lnc nkjcsj kjs  kjjl jkljl  dfkfjeic   yiow  zkl "
    },
    {
        id: 3,
        name: "maria",
        role: "frontend developer",
        image: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
        des: "  sjnkln csnlslsn csncnln,nx, csnn,nshls s,mkjlknl cknaa caknklcnlnlnck nlkln  slkjal  lss snkl n kllsn  klnskl zsk scn lnc nkjcsj kjs  kjjl jkljl  dfkfjeic   yiow  zkl "
    },
    {
        id: 4,
        name: "kanchan",
        role: "software development engineer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
        des: "sn csncnln,nx, csnn,nshls s,mkjlknl cknaa caknklcnlnlnck nlkln  slkjal  lss snkl n kllsn  klnskl zsk scn lnc nkjcsj kjs  kjjl jkljl  dfkfjeic   yiow  zkl "
    },

    {
        id: 5,
        name: "ria",
        role: "backend developer",
        image: "https://plus.unsplash.com/premium_photo-1669824376679-268d3739acf3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
        des: "asadd loremmmmmm mdksjskl sjnkln csnlslsn csncnln,nx, csnn,nshls s,mkjlknl cknaa caknklcnlnlnck nlkln  slkjal  lss snkl n kllsn  klnskl zsk scn lnc nkjcsj kjs  kjjl jkljl  dfkfjeic   yiow  zkl "
    },

]
const personimg = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevbtn = document.querySelector(".prev-btn")
const next = document.querySelector(".next-btn")
let currentindex = 0;

window.addEventListener("DOMContentLoaded", () => {
    console.log("jo")
    showcard(currentindex)
})

function showcard(person) {
    const item = reviews[currentindex]
    personimg.src = item.image
    author.textContent = item.name
    job.textContent = item.role
    info.textContent = item.des
}

next.addEventListener("click", () => {

    currentindex++;
    // console.log(currentindex)
    console.log(reviews.length)
    if (currentindex > reviews.length - 1) {
        currentindex = 0;
        console.log("hi")
    }
    showcard(currentindex)


})
prevbtn.addEventListener("click", () => {
      currentindex--;
      if(currentindex < 0){
        currentindex = reviews.length - 1 
      }

    showcard(currentindex)
})