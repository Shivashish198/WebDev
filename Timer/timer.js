let p = document.getElementById("p");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let stop = document.getElementById("stop");

let time = document.getElementById("time");

let total=0;
let interval=null;

function display(){
        let h = Math.floor(total/3600).toString().padStart(2,"0");
        let m = Math.floor((total-h*3600)/60).toString().padStart(2,"0");
        let s = (total-h*3600-m*60).toString().padStart(2,"0");
        p.textContent = `${h}:${m}:${s}`;
}

function tick() {
    if(total>0)
    {
        total--;
        display();
    }
    else {
        clearInterval(interval);
        interval = null;
    }
}

start.onclick = function start() {
        if(interval) return;
        if(total===0) {
        let val = time.value || "00:00:00";
        val = val.split(":").map(Number);
        total = val[0]*60*60+val[1]*60+val[2];
        if(total===0) return;
        display();
        }
        interval=setInterval(tick,1000);
}

stop.onclick = function stop() {
        clearInterval(interval);
        interval=null;
}

reset.onclick = function reset() {
        clearInterval(interval);
        interval=null;
        let val = time.value || "00:00:00";
        val = val.split(":").map(Number);
        total = val[0]*60*60+val[1]*60+val[2];
        display();
}




