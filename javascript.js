const grid = document.querySelector('.grid');
let newColor = '#000000'

function createGrid() {
for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('cell')
    div.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = newColor
        });
    grid.appendChild(div);
    }
};

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
};

function createUserGrid() {
    let val = prompt('Enter size of grid (eg. "16" is 16x16)', '16');
    if (val > 0 && val <= 100) {
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseenter', function(e) {
            e.target.style.backgroundColor = newColor
    });
    grid.appendChild(div)
  };
} else {
    alert('Error, size must be between 0 and 100')
    createUserGrid()
}
}

const resize = document.querySelector('#resize');
resize.addEventListener('click', function() {
    removeAllChildNodes(grid);
    createUserGrid();
    })
    
function chooseColor() {
    const chooseColor = document.querySelector('#color');
    chooseColor.addEventListener('input', function(){
    newColor = document.getElementById('color').value;
    return newColor;
    })
}
chooseColor()
createGrid()