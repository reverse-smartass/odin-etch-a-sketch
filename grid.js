let rgb = [0,0,0];
let random = false;
let grid = document.getElementById("grid");
let input = document.getElementById("num");

document.getElementById("clear").addEventListener("click", () => {
    grid.innerHTML = '';
});

document.getElementById("make").addEventListener("click", () => {
    let nbSide = parseInt(input.value);
    console.log(nbSide);
    makeGrid(nbSide);
});

document.getElementById("red").addEventListener("click", () => {
    random = false;
   setColor(255, 0, 0);
});

document.getElementById("green").addEventListener("click", () => {
    random = false;
   setColor(0, 255, 0);
});

document.getElementById("blue").addEventListener("click", () => {
    random = false;
    setColor(0, 0, 255);
});

document.getElementById("random").addEventListener("click", () => {
    random = true;
    setColor(Math.random() * 255, Math.random() * 255, Math.random() * 255);
});

function setColor(r, g, b){
    rgb[0] = r;
    rgb[1] = g;
    rgb[2] = b;
}

function makeGrid(side) {
    grid.innerHTML = '';

    let caseSide = window.innerHeight / side;

    for (let i = 0; i < side; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("style", `min-height: ${caseSide}px;  max-height: ${caseSide}px; `);
        for (let j = 0; j < side; j++) {
            let cas = document.createElement("div");
            cas.classList.add("case");
            cas.setAttribute("style", `min-height: ${caseSide}px; min-width: ${caseSide}px; max-height: ${caseSide}px; max-width: ${caseSide}px; `);
            cas.addEventListener("mouseenter", () => {
                cas.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
                if(random){
                    setColor(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                }
            });
            row.append(cas);
        }
        grid.append(row);
    }
}