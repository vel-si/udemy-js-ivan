let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


function calcCurrency(elem) {
    elem.addEventListener('input', function() {
        function getCurrValue() {
            return new Promise(function(resolve, reject) {
                let req = new XMLHttpRequest();
                req.open('GET', 'js/current.json');
                req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                req.onreadystatechange = function() {
                    if(req.readyState === 4 && req.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }    
                };
                req.send();
                // let data = JSON.parse(req.response);
            });
        }
        
        getCurrValue()
                    .then(() => inputUsd.value = inputRub.value/(JSON.parse(req.response).usd))
                    .catch(() => inputUsd.value = "Err!")
    });
}

calcCurrency(inputRub);




//     req.addEventListener('readystatechange', function() {
//         if(req.readyState === 4 && req.status == 200) {
//             let data = JSON.parse(req.response);
//             inputUsd.value = inputRub.value/data.usd;
//         } else {
//             inputUsd.value = "Err!";
//         }
//     });


// }); 