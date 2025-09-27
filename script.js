const gridContainer = document.querySelector(".grid-container");
const sizeInput = document.getElementById("grid-size-input");
const gridText = document.querySelector(".grid-text");
let color = "red";

sizeInput.addEventListener("input", () => {
   const desiredSize = sizeInput.value;
   gridText.textContent = `${sizeInput.value} x ${sizeInput.value}`;
   createGrid(desiredSize);
});

function getRandomColor() {
   const h = Math.floor(Math.random() * 360);
   const s = Math.floor(Math.random() * 100);
   const l = Math.floor(Math.random() * 100);
   return `hsl(${h}, ${s}%, ${l}%)`;
}

function createGrid(size) {
   gridContainer.innerHTML = "";
   gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

   for (let i = 0; i < size * size; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square")
      
      gridSquare.addEventListener("mouseenter", () => {
         if (color === "rainbow") {
            gridSquare.style.backgroundColor = getRandomColor();
         } else {
            gridSquare.style.backgroundColor = color;
         }
      });

      gridContainer.appendChild(gridSquare);
   }
}
createGrid(16);

function changeColor(newColor) {
   color = newColor;
}

const rainbow = document.querySelector(".rainbow");
const random = document.querySelector(".random");
const white = document.querySelector(".white");
const black = document.querySelector(".black");
const eraser = document.querySelector(".eraser");
const userChoice = document.querySelector("#favcolor");
const clear = document.querySelector(".clear");

rainbow.addEventListener("click", () => changeColor("rainbow"));
random.addEventListener("click", () => changeColor(getRandomColor()));
white.addEventListener("click", () => changeColor("white"));
black.addEventListener("click", () => changeColor("black"));
eraser.addEventListener("click", () => changeColor("red"));
userChoice.addEventListener("input", () => changeColor(userChoice.value));

clear.addEventListener("click", () => {
   document.querySelectorAll(".grid-square").forEach(square => {
      square.style.backgroundColor = "red";
   });
});
