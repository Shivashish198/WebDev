const exp = document.getElementById("exp");
const calc = document.getElementById("calc");

function update(input) {
    exp.value+=input;
}

function calculate() {
    try{
        exp.value = eval(exp.value);
    }
    catch(e) {
        exp.value = "Syntax Error"
        throw new error("SYNTAX ERROR")
    }
    
}

function clearExp() {
    exp.value = "";
}

let move = 5, y = calc.getAttribute("top"), x = calc.getAttribute("left");

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")) {
        switch(event.key) {
            case "ArrowUp" : 
            y -= move; break;
            case "ArrowDown" : 
            y += move; break;
            case "ArrowLeft" : 
            x -= move; break;
            case "ArrowRight" : 
            x += move; break;
        }
        calc.style.top = `${y}px`;
        calc.style.left = `${x}px`;
    }
})