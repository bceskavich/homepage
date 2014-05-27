$(function(){

    // Appends the navbar to the top when scrolled past
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
