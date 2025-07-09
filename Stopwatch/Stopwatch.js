const start = document.getElementById("start");
const reset = document.getElementById("reset");
const Stop = document.getElementById("Stop");
let p = document.querySelector("p");

let startTime = Date.now();
let interval=null;
let running = false;

function Start(){
    if(running) return;
    startTime = Date.now();
    running = true;
    interval = setInterval(update,10);
}

function stop(){
    clearInterval(interval);
    interval = null;
    running = false;
}

function Reset(){
    clearInterval(interval);
    interval = null;
    running = false;
    p.textContent = `00:00:00:00`;
}

function update(){
    if(!running) return;
    let newTime = Date.now()-startTime;
    let h = Math.floor(newTime/(1000*60*60)).toString().padStart(2,"0");
    let m = Math.floor((newTime/(1000*60))%60).toString().padStart(2,"0");
    let s = Math.floor((newTime/1000)%60).toString().padStart(2,"0");
    let ms = Math.floor((newTime%1000)/10).toString().padStart(2,"0");
    console.log(`${h}:${m}:${s}:${ms}`);
    p.textContent = `${h}:${m}:${s}:${ms}`;
}