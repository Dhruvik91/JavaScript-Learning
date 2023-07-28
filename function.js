let cou = 1;
let timer;
let timeout;
function hello() {

    document.getElementById("demo1").innerHTML = cou++;
}



function wrap(arg) {

    clearInterval(timer);

    clearTimeout(timeout);

    timer = setInterval(() => hello(), 1000);

    timeout = setTimeout(() => {
        clearInterval(timer)
    }, arg * 1000);

};


