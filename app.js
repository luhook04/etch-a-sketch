// create variables
const container = document.querySelector('.container');
const btn = document.querySelector('#clear');
let gridSize;
let rows;

//fucntion to create grid with specified number of rows
function createGrid() {
  let gridNumber = parseInt(
    prompt('How many rows would you like to have?')
  );
  gridSize = gridNumber * gridNumber;
  container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
  for (i = 0; i < gridSize; i++) {
    rows = document.createElement('div');
    container.appendChild(rows);
  }
  let entireGrid = document.querySelectorAll('div');
  entireGrid.forEach((square) => {
    square.addEventListener('mouseover', changeColor);
  });
}

// changes color of each individual square
function changeColor(e) {
  const selectedGrid = e.target;
  selectedGrid.style.backgroundColor = 'black';
}

// changes all square colors back to white
function resetGrid() {
  let entireGrid = document.querySelectorAll('div');
  entireGrid.forEach((square) => {
    square.style.backgroundColor = 'aqua';
  });
}

btn.addEventListener('click', resetGrid);

createGrid();
