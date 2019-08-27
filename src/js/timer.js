function timer() {
    'use strict';
    let deadLine = '2019-09-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor(t/(1000*60*60));
        // hours = Math.floor((t/(1000*60*60)) % 24),
        // days = Math.floor(t/(1000*60*60*24)

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

           
        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total < 0 ) {
                clearInterval(timeInterval);
            }
             if (Date.parse(new Date()) >= Date.parse(deadLine)) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
             }
        }    
    }
    setClock('timer', deadLine);
}

module.exports = timer;