const gridContainer = document.getElementById('grid-container')
let color = 'black'

function changeColor(choice) {
    color = choice;
}

function createBoard(gridSize) {
    const containerWidth = 500; 
    gridContainer.style.width = containerWidth + "px";  
    gridContainer.style.height = containerWidth + "px";
    const squareSize = containerWidth / gridSize; 
    
    if (color === "random") {
        color = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div')
        gridSquare.style.width = squareSize + "px";
        gridSquare.style.height = squareSize + "px";
        gridSquare.classList.add("grid-square")
        gridSquare.addEventListener('mouseenter', () => {
            if (color === "colorful") {
                gridSquare.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            } else {
                gridSquare.style.backgroundColor = color;
            }
        })
        gridContainer.appendChild(gridSquare)
    }
}

let input = 16;
function start() {
    gridContainer.innerHTML = ''
    let size = +prompt('Enter a number of squares. Less than 100 so it wont lag', 16)
    input = size
    createBoard(size)
}

function reset() {
    gridContainer.innerHTML = ''
    createBoard(input)
}
createBoard(16)