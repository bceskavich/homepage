$(function(){

    // Appends the navbar to the top when scrolled past
    original = $('nav').offset().top
    $(window).scroll(function(){
        var scrollbar = $(document).scrollTop(),
            nav = $('nav').offset().top;

        if (scrollbar >= nav) {
            $('nav').addClass('fixed');
            $('.nav-container').addClass('show');
        }
        if (scrollbar <= original) {
            $('nav').removeClass('fixed');
            $('.nav-container').removeClass('show');
        }
    });

});
