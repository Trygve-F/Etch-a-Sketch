const grid = document.querySelector('.grid');
let selectedColor = '#000000'

function createGrid() {
for (i = 0; i < 256; i++) {
    let square= document.createElement('div');
    square.classList.add('cell')
    grid.appendChild(square);
    }
};

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
};

grid.addEventListener('mousedown', event =>{ 
    paintGridEvent = paintCell(event, selectedColor);
    if(event.buttons == 1){        
        window.addEventListener('mouseover', (e) => {
            if(selectedColor !== ('#000000')){
                paintCell(e, chooseColor());
            }else{
                paintCell(e, selectedColor);
            }            
        });
    }
});


function paintCell(elem, color){    
    if(elem.buttons == 1){
        if(elem.target.classList == 'cell'){
            let square = elem.target;    
            square.style.backgroundColor = selectedColor;
        }  
    } {
        return;
    }
}


function createUserGrid() {
    let val = prompt('Enter size of grid (eg. "16" is 16x16)', '16');
    if (val > 0 && val <= 100) {
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const square = document.createElement('div');
        square.classList.add('cell');
        grid.appendChild(square)
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
    selectedColor = document.getElementById('color').value;
    return selectedColor;
    })
}
chooseColor()
createGrid()