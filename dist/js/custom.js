$(document).ready(function(){
    $(".search-here").click(function(){
        $(".header-form").slideToggle();
    });
    $(".ti-close").click(function(){
        $(".header-form").slideUp();
    });
    $(".form").click(function() {
        $('html, body').animate({
            scrollTop: $(".registration-area").offset().top - 80
        }, 2000);
    });
});