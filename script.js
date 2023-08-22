const container = document.querySelector('#container');
const subContainer = document.getElementById('sub-container');
const gridNumber = parseInt(prompt('Enter the size of your sketch in pixels'))
let rows;
let isDrawing = false;

function makeRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {
          let square = document.createElement('div');
          square.className = 'gridRow';
          square.setAttribute('id', 'gridRow')
          subContainer.appendChild(square);
      }
}

function toClone(times) {
    for(let i = 1; i < times; i++ ) {
        let clone = subContainer.cloneNode(true);
        container.appendChild(clone)
    }
}

function defaultGrid() {
    makeRows(gridNumber)
    toClone(gridNumber)

    rows = document.querySelectorAll('.gridRow');

    rows.forEach(row => {
        row.addEventListener('mousedown', () => {
            isDrawing = true;
            row.classList.add('hovered');
        })

        row.addEventListener('mousemove', () => {
            if(isDrawing) {
            row.classList.add('hovered');
            }
        })

        row.addEventListener('mouseup', () => {
            isDrawing = false;
        })

        
    })
}

defaultGrid()