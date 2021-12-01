$(document).on('.register-form', function(evnt){
    evnt.preventDefault();

});
$(document).on('.login-form', function(evnt){
    evnt.preventDefault();

});


$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });