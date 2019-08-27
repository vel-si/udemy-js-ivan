function forms() {
    'use strict';
    let message = {
        loading: 'Loading',
        success: 'Thnx we call you',
        failure: 'Problem!'
    };

    let form = document.querySelector('.main-form'),
        contactForm = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
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
}
module.exports = forms;