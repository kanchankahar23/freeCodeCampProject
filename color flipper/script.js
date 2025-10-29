const button = document.querySelector("button");
const color = document.getElementById("color")

const colors = [
    "pink",
    "blue",
    "orange",
    "white",
    "black"
]
button.addEventListener("click", () => {
    const random = getrandomnum()
    color.textContent = colors[random]
    document.body.style.backgroundColor = colors[random]
})


function getrandomnum() {
    let number = Math.floor(Math.random() * colors.length)
    return number;
    console.log(number)
}
