let currentPenColor = 'green';
let currentSize = 16;
let rainbowEnabled = false
const container = document.querySelector('.container');


function makeGrid(size=16){
    if(size<=0 || size >100){alert('Size out of range.'); return;}
    currentSize = size;
    container.innerHTML= "";
    for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.style.width = (200 / size) + 'px';
    square.style.height = (200 / size) + 'px';
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        setPenColor(square);
    });
    container.appendChild(square);
    }
}

function setPenColor(element, color=currentPenColor){
    if (rainbowEnabled) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
        element.style.backgroundColor = currentPenColor;
    }
}


function clearGrid(){
    makeGrid(currentSize);
}



makeGrid()
rainbow(rainbowEnabled)