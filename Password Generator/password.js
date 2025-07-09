const num = document.getElementById("numbers");
const low = document.getElementById("lower");
const up = document.getElementById("upper");
const len = document.getElementById("length");
const gen = document.getElementById("button");
const p = document.getElementById("p");

const lowercase = "qwertyuiopasdfghjklzxcvbnm";
const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const numbers = "1234567890";


gen.onclick = function generate() {
    let allowed = "";
    allowed += num.checked?numbers:"";
    allowed += low.checked?lowercase:"";
    allowed += up.checked?uppercase:"";
    let password="";
    for(let i=0;i<len.value;i++)
    {
        let index = Math.trunc(Math.random()*allowed.length);
        password+=allowed.charAt(index);
    }
    p.textContent = "Your password: "+password;
}