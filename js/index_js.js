
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
    // anime ({
    //     targets: '#lang',
    //     translateX: 250,
    //     duration: 4000,
    //     direction: 'alternate',
    //     // borderRadius: 50
    //     loop: true
    // });
    anime({
        targets: '.letter',
        opacity: 1,
        translateX: 600,
        rotate: anime.stagger([-360, 360]),
                // duration: 4000,
                // easing: 'easeInExpo',

        scale: anime.stagger([0.7, 1], {from: 'center'}),
        delay: anime.stagger(100, {start: 1000}),
        translateY: -200
    });
});


