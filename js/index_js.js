
$(document).ready(function() {
    $('#aboutMe').children().last().hide();

    setTimeout(function () {
        $('#aboutMe').children().last().show("slow");

    }, 1000);

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
    let newTimeline = anime.timeline({
        targets: '.letter',
        opacity: 1,
        delay: 500,
        easing: 'easeInOutQuad',

    });
    newTimeline .add({
        targets: '#html',
        translateX: 600,
        translateY: -200,
        rotate: 40,
    });
    newTimeline .add({
        targets: '#css',
        translateX: 500,
        translateY: -200,
        rotate: -40,
    },250);
    newTimeline .add({
        targets: '#javascript',
        translateX: 490,
        translateY: -110,
        rotate: 25,

    },500);
    newTimeline .add({
        targets: '#jquery',
        translateX: 510,
        translateY: -185,
        rotate: -38,
    },750);
    newTimeline .add({
        targets: '#sass',
        translateX: 580,
        translateY: -180,
        rotate: 40,
    });
    newTimeline .add({
        targets: '#react',
        translateX: 540,
        translateY: -220,
        rotate: 0,
    },1000);
    newTimeline .add({
        targets: '#java',
        translateX: 480,
        translateY: -160,
        rotate: -90,

    },1250);
    newTimeline .add({
        targets: '#mysql',
        translateX: 540,
        translateY: -160,
        rotate: 0,
    },1500);
    newTimeline .add({
        targets: '#spring',
        translateX: 520,
        translateY: -130,
        rotate: 25,

    },1750);
    newTimeline .add({
        targets: '#bootstrap',
        translateX: 570,
        translateY: -135,
        rotate: -55,
    },2000);
});




