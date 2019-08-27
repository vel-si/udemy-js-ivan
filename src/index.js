window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let calc = require('./js/calc.js'),
        forms = require('./js/forms.js'),
        modal = require('./js/modal.js'),
        slider = require('./js/slider.js'),
        tabs = require('./js/tabs.js'),
        timer = require('./js/timer.js');

    calc();
    forms();
    modal();
    slider();
    tabs();
    timer();  
});