function makeDivs() {
for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = 'aqua'
        });
    flexgrid.appendChild(div);
    }
}
makeDivs()
