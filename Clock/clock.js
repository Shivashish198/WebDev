function time() {
    const date = new Date();
    let hr = date.getHours() %12;
    let mer = hr<12?"AM":"PM";
    hr = hr.toString().padStart(2,0);
    let min = date.getMinutes().toString().padStart(2,0);
    let sec = date.getSeconds().toString().padStart(2,0);
    const p = document.getElementById("p");
    p.textContent = `${hr}:${min}:${sec} ${mer}`;
                   }

time();
setInterval(time,1000);