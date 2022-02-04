const grid = document.querySelector('.grid');

function createGrid() {
for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('cell')
    div.addEventListener('click', function(e) {
        e.target.style.backgroundColor = 'black'
        });
    grid.appendChild(div);
    }
};

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function createUserGrid() {
    let val = prompt('Enter size of grid (eg. "10" is 10x10)');
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('click', function(e) {
            e.target.style.backgroundColor = 'black'
    });
    grid.appendChild(div)
}
}


const reset = document.querySelector('#reset');
reset.addEventListener('click', function() {
    removeAllChildNodes(grid);
    createUserGrid();
    })
    

createGrid()
