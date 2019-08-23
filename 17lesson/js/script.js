$(document).ready(function() {
    $('.main_btn').on('click', function() {
        $('.overlay').fadeIn();
        $('.modal').slideDown();
    });
    $('.close').on('click', function() {
        $('.overlay').fadeOut();
        $('.modal').slideUp();
    });
});