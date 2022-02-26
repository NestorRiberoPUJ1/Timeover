function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    var seconds= document.querySelector("#seconds");
    seconds.style.transform="rotate("+(180+(time*6))+"deg)";
    var minutes= document.querySelector("#minutes");
    minutes.style.transform="rotate("+(180+(time*6/60))+"deg)";
    var hour= document.querySelector("#hour");
    hour.style.transform="rotate("+(180+(((time*30)/60)/60))+"deg)";
}, 1000);