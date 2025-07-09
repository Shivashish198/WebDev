const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countLabel = document.getElementById("countLabel");


let count = 0;

increase.onclick = function(){
    count++;
    countLabel.textContent=count;
}
decrease.onclick = function(){
    count--;
    countLabel.textContent=count;
}
reset.onclick = function(){
    count=Math.trunc(Math.random()*100);
    countLabel.textContent=count;
}