const DEFAULT_SIZE = 16

const container = document.querySelector('#container');
const subContainer = document.getElementById('sub-container');
const slider = document.getElementById('size-slider')
let rows;
let newSize = slider.onchange = (e) => console.log(e.target.value)

document.documentElement.style.setProperty('--grid-number', DEFAULT_SIZE); 

function createGrid() {
    for (let row = 0; row < DEFAULT_SIZE; row++) {
        for (let col = 0; col < DEFAULT_SIZE; col++) {
            let cell = document.createElement('div');
            cell.className = 'gridCell'; 
            subContainer.appendChild(cell);
        }
    }
}

let isDrawing = false;
document.body.onmousedown = () => (isDrawing = true);
document.body.onmouseup = () => (isDrawing = false);


function defaultGrid() {
    createGrid()

    rows = document.querySelectorAll('.gridCell');

    rows.forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            if(isDrawing) {
                e.target.classList.add('hovered')
                e.preventDefault()
            }
        });
        cell.addEventListener('mousedown', (e) => {
                e.target.classList.add('hovered')
                e.preventDefault()
        });
    });
}

defaultGrid()

console.log(isDrawing)