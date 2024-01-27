//clock


const date = () => {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    minute = checktime(minute);
    second = checktime(second);

    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
}
setInterval(date, 1000);

function checktime(m) {
    if (m < 10) { m = "0" + m }
    return m;
}






// slider
let slideindex = 1;
let images = document.getElementsByClassName("slide0");
let i = images.length - 1;

function afterprev(n) {
    show(slideindex += n);
}

function show(n) {
    let j;
    for (j = 0; j < images.length; j++) {
        images[j].style.display = "none";
    }
    if (n < 0) {
        slideindex = i;
    }
    if (n > i) { slideindex = 0; }

    images[slideindex].style.display = "block";
}