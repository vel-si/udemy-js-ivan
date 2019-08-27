function modal() {
    'use strict';
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
}
module.exports = modal;