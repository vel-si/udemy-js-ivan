let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let req = new XMLHttpRequest();

    // req.open(method, url, async, login, pass);
    req.open('GET', 'js/current.json');
    req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    req.send();

    //status - 200,404..
    //ststusText - not_found
    //responseText/response - answer
    //readyState

    req.addEventListener('readystatechange', function() {
        if(req.readyState === 4 && req.status == 200) {
            let data = JSON.parse(req.response);
            inputUsd.value = inputRub.value/data.usd;
        } else {
            inputUsd.value = "Err!";
        }
    });


}); 