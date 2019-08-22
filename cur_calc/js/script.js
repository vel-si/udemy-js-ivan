let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {    
        function getCurrValue() {
            return new Promise(function(resolve, reject) {
                let req = new XMLHttpRequest();
                req.open('GET', 'js/current.json');
                req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                req.send();
                req.onload = function() {
                    if(req.readyState === 4 && req.status == 200) {
                        resolve(this.response);
                    } else {
                        reject();
                    }    
                };
                
                // let data = JSON.parse(req.response);
            });
        }
        
        getCurrValue()
                    .then(response => inputUsd.value = inputRub.value/(JSON.parse(response).usd))
                    .catch(() => inputUsd.value = "Err!")
    });





//     req.addEventListener('readystatechange', function() {
//         if(req.readyState === 4 && req.status == 200) {
//             let data = JSON.parse(req.response);
//             inputUsd.value = inputRub.value/data.usd;
//         } else {
//             inputUsd.value = "Err!";
//         }
//     });


// }); 