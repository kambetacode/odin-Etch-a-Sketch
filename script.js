const DEFAULT_SIZE = 16

const container = document.querySelector('#container');
const subContainer = document.getElementById('sub-container');
const slider = document.getElementById('size-slider')
const erase = document.getElementById('erase')
const sizeLabel = document.getElementById('size-label')
let rows;

sizeLabel.innerHTML = `${DEFAULT_SIZE} x ${DEFAULT_SIZE}`

slider.onchange = (e) => {
    sizeLabel.innerHTML = `${e.target.value} x ${e.target.value}`
    clearGrid()
    createGrid(e.target.value)

}

erase.onclick = () => {
    clearGrid()
    createGrid(slider.value)
}

function clearGrid() {
    subContainer.innerHTML = ''
}


function createGrid(size) {
    document.documentElement.style.setProperty('--grid-number', size);
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            let cell = document.createElement('div');
            cell.className = 'gridCell'; 
            subContainer.appendChild(cell);
        }
    }
    addingEventListeners()
}

let isDrawing = false;
document.body.onmousedown = () => (isDrawing = true);
document.body.onmouseup = () => (isDrawing = false);


function addingEventListeners() {

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


createGrid(DEFAULT_SIZE)