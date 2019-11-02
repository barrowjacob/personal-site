
$(document).ready(function() {
    $('#aboutMe').children().last().hide();

    setTimeout(function () {
        $('#aboutMe').children().last().show("slow");

    }, 1000)


});
