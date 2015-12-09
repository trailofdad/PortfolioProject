$( document ).ready(function() {

    $('#menu').click(function() {
        toggleDropDown();
    });

    $('.close').click(function() {
        toggleDropDown()
    });

    function toggleDropDown() {
        $('#dropdown').toggleClass('open');
        $('body').toggleClass('open');
        $('.nav-wrapper').toggleClass('open');
    }

});