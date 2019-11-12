
$(document).ready(function() {
    $('#aboutMe').children().last().hide();

    setTimeout(function () {
        $('#aboutMe').children().last().show("slow");

    }, 1000)

    $('body').click(function() {
        console.log($(document).scrollTop());
    });

    $('#home1').click(function() {
        $(document).scrollTop(0);
    });
    $('#lang1').click(function() {
        $(document).scrollTop(700);
    });
    $('#proj1').click(function() {
        $(document).scrollTop(1475)
    });
    $('#passion').click(function() {
        $(document).scrollTop(2234);
    });




});
