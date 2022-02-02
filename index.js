setInterval(function () {
    const d = new Date();
    hrs = d.getHours();
    mins = d.getMinutes();
    sec = d.getSeconds();

    time = `${hrs}:${mins}:${sec}`;
    document.getElementById("time").innerHTML = time;

    day = d.getDay();
    month = d.getMonth();
    year = d.getFullYear();

    date = `${day}/${month}/${year}`;
    document.getElementById("date").innerHTML = date;

}, 1000)
