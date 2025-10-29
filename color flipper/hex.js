const color = document.getElementById("color");
const btn = document.querySelector("button");

// Valid hex color characters
const colors = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

btn.addEventListener("click", () => {
    let hexvalue = "#";
    for (let i = 0; i < 6; i++) {
        hexvalue += colors[randomnum()];
    }
    color.textContent = hexvalue;
    document.body.style.backgroundColor = hexvalue;
});

function randomnum() {
    return Math.floor(Math.random() * colors.length);
}
