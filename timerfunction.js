let timeinterval;
let timeout;

let time_in_minutes;


function main1(abc) {
    if (abc) {

        time_in_minutes = abc;

        hello();

    } else {

        time_in_minutes = document.getElementById("myText").value;

        if (time_in_minutes < 0) {
            alert("PLease enter the correct value");

        } else {
            hello();
        }

    }

    function hello() {
        // let time_in_minutes;
        let current_time = Date.parse(new Date());
        let deadline = new Date(current_time + time_in_minutes * 60 * 1000);


        function time_remaining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date());
            let seconds = Math.floor((t / 1000) % 60);
            let minutes = Math.floor((t / (1000 * 60)) % 60);
            let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            return { 'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds };
        }
        function run_clock(id, endtime) {
            let clock = document.getElementById(id);
            function update_clock() {
                let t = time_remaining(endtime);
                clock.innerHTML = t.days + 'd :' + t.hours + ' : ' + t.minutes + ' : ' + t.seconds;
                if (t.total <= 0) { clearInterval(timeinterval); }


            }
            update_clock(); // run function once at first to avoid delay
            clearInterval(timeinterval);
            clearTimeout(timeout);

            timeinterval = setInterval(() => update_clock(), 1000);

            timeout = setTimeout(() => {
                clearInterval(timeinterval)
            }, (time_in_minutes * 60) * 1000);
        }
        run_clock('demo1', deadline);
    }
};


