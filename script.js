const body = document.querySelector('body');
body.setAttribute('style', 'background-color: khaki; margin: 0; padding: 0; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;');

sketchDiv = document.createElement('div');

sketchDiv.setAttribute('style', 'display: grid; border: solid 3px gray; border-radius: 8px; background-color: white; width: 600px; height: 600px; box-shadow: 0px 0px 5px 5px gray, 0px 0px 10px 10px #191919;');

body.appendChild(sketchDiv);

let optionsBox = document.createElement('div');
optionsBox.style = 'margin-left: 100px; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0px 0px 5px 5px gray, 0px 0px 10px 10px #191919; padding: 10px;';

let randomColor = false;

let palette = document.createElement('div');
palette.style = "margin-bottom: 10px; display: flex"

let paletteBlack = document.createElement('div');
paletteBlack.style = "background-color: black; width: 50px; height: 50px; border-radius: 50%; margin-left: 5px;";
paletteBlack.onclick = function() {
    paletteColor = "black";
    randomColor = false;
}

let paletteRed = document.createElement('div');
paletteRed.style = "background-color: red; width: 50px; height: 50px; border-radius: 50%; margin-left: 5px;";
paletteRed.onclick = function() {
    paletteColor = "red";
    randomColor = false;
}

let paletteGreen = document.createElement('div');
paletteGreen.style = "background-color: green; width: 50px; height: 50px; border-radius: 50%; margin-left: 5px;"
paletteGreen.onclick = function() {
    paletteColor = "green";
    randomColor = false;
}

let paletteRandom = document.createElement('div');
paletteRandom.style = "background: linear-gradient(90deg, red, blue); width: 50px; height: 50px; border-radius: 50%; margin-left: 5px;"
paletteRandom.onclick = function() {
    randomColor = true;
}

palette.appendChild(paletteBlack);
palette.appendChild(paletteRed);
palette.appendChild(paletteGreen);
palette.appendChild(paletteRandom);

optionsBox.appendChild(palette);


let eraserButton = document.createElement('button');
eraserButton.textContent = "True Eraser";
eraserButton.onclick = function() {
    paletteColor = "white";
    randomColor = false;
}


optionsBox.appendChild(eraserButton);

let gridCreateNumber = document.createElement('input');
gridCreateNumber.type = "number";

optionsBox.appendChild(gridCreateNumber)

let gridCreateButton = document.createElement('button');
gridCreateButton.textContent = "Create";

let gridClearButton = document.createElement('button');
gridClearButton.textContent = "reset";


let buttonsBox = document.createElement('div');
buttonsBox.style = "display: flex; justify-content: space-between;"

buttonsBox.appendChild(gridCreateButton);
buttonsBox.appendChild(gridClearButton);

optionsBox.appendChild(buttonsBox);

body.appendChild(optionsBox);

let innerGridNumber = 10;


createGrid(innerGridNumber);

let paletteColor = "black"


function createGrid(number) {
    sketchDiv.innerHTML = '';
    for (let i = 1; i <= number * number; i++) {
        let innerGrid = document.createElement('div');
        innerGrid.setAttribute('style', 'border: solid 1px black;');
        innerGrid.id = `innerbox${i}`;
        innerGrid.addEventListener('mouseover', colorGrid);
        sketchDiv.appendChild(innerGrid)
    }
    let gridTemplate = ''
    for (let k = 1; k <= number; k++) {
        gridTemplate += "auto "
    }
    sketchDiv.style = `display: grid; border: solid 3px gray; border-radius: 8px; background-color: white; width: 600px; height: 600px; grid-template-rows: ${gridTemplate}; grid-template-columns: ${gridTemplate}; box-shadow: 0px 0px 5px 5px gray, 0px 0px 10px 10px #191919;`
}

function clearGrid() {
    for (let l = 1; l <= innerGridNumber * innerGridNumber; l++) {
        let eachGrid = document.querySelector(`#innerbox${l}`);
        eachGrid.setAttribute('style', 'border: solid 1px black; background-color: none;');
    }
    paletteColor = "black";
    randomColor = false;
}

function colorGrid(e) {
    e.target.style = `border: solid 1px ${paletteColor}; background-color: ${paletteColor}`;
    if (randomColor == true) {
    let color = "";
    for (let j = 0; j < 3; j++) {
        let two = Math.floor(Math.random() * 256).toString(16);
        color += (two.length == 1 ? "0" + two : two);
    }
    paletteColor = "#" + color;
}
}


gridClearButton.onclick = clearGrid;


gridCreateButton.onclick = userGridCreate

function userGridCreate() {
    if (gridCreateNumber.value > 0){
        innerGridNumber = gridCreateNumber.value;
        createGrid(innerGridNumber)
    }
}