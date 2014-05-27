$(function(){

    // Makes the navbar visible when the user begins scrolling past the landing
    $(window).scroll(function(){
        var scroll = $(document).scrollTop()

        if (scroll >= 25) {
            $('nav').addClass('fixed');
            $('.nav-container').addClass('show');
        }
        else {
            $('nav').removeClass('fixed');
            $('.nav-container').removeClass('show');
        }
    });

});
