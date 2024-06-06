$(function(){

    $('input[name=email]').focus(function(){
        resetInvalidField($(this));
    });

    $('form').submit(function(event){
        event.preventDefault();

        var email = $('input[name=email]').val();
        var isValid = true;

        if (email === '') {
            applyFieldInvalid($('input[name=email]'));
            $('#messageError').show();
            isValid = false;
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
            applyFieldInvalid($('input[name=email]'));
            $('#messageError').show();
            isValid = false;
        }

        if (isValid) {
            alert("Sent with success!!!");
            $('form')[0].reset();
        }
    });

    checkScrollbar();

    $(window).resize(function() {
        checkScrollbar();
    });

    function applyFieldInvalid(el){
        el.css('border-color', 'hsl(354, 100%, 66%)');
    }

    function resetInvalidField(el){
        el.css('border-color', 'hsl(223, 87%, 63%)');
        el.css('outline-color', 'hsl(223, 87%, 63%)');
        $(el).parent().find('p').hide();
    }

    function checkScrollbar() {
        if ($(window).height() < $(document).height()) {
            $('body footer').css('margin-top', '80px');
        }
    }
    
});