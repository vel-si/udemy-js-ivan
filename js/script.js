window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    // func to hide tabs    
    function hideTabContent(first) {
        for (let i = first; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');           
        }
    }    
    //onload hide all tabs except first
    hideTabContent(1);

    // func to show exact tab if it hide
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    // listen an event and show tab whith the same index as menu element
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    //timer

    let deadLine = '2019-08-21';

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

    //modal
    let more = document.querySelector('.more'),
        sliderBtn = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        showModal();
    });
    
    sliderBtn.forEach(function(event) {
        event.addEventListener('click', function() {
            showModal();
        });
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = ''; 
    });

    function showModal() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    //2 form

    let message = {
        loading: 'Loading',
        success: 'Thnx we call you',
        failure: 'Problem!'
    };

    let form = document.querySelector('.main-form'),
        contactForm = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        // contactInput = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

   

    //promise    
    function sendForm(elem) {
    elem.addEventListener('submit', function(event) {
        event.preventDefault();
        elem.appendChild(statusMessage);
        let formData = new FormData(elem);

        function postData(data) {
            return new Promise(function(resolve, reject) {
                let req = new XMLHttpRequest();
                req.open('POST', 'server.php');
                // req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); - php-server
                req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                
                req.onreadystatechange = function() {
                    if(req.readyState < 4) {
                        resolve();
                    } else if(req.readyState === 4 && req.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                };
                let obj = {};
                data.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
                req.send(json);
            });
        }// end postData

        function inputCleaner() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(inputCleaner)
        });    
    }
    sendForm(form);
    sendForm(contactForm);

    // contactForm.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     contactForm.appendChild(statusMessage);

    //     let req = new XMLHttpRequest();
    //     req.open('POST', 'server.php');
    //     req.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //     let formData = new FormData(contactForm);
    //     let obj = {};
    //     formData.forEach(function(value,key) {
    //         obj[key] = value;
    //     });
    //     console.log(obj);
    //     let json = JSON.stringify(obj);
    //     req.send(json);
    //     req.addEventListener('readystatechange', function() {
    //         if(req.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (req.readyState === 4 && req.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });
    //     inputCleaner(contactInput);
    // });
   
});