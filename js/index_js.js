
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

    function talkingHead() {
    let newTimeline = anime.timeline({
        targets: '.letter',
        opacity: 1,
        delay: 500,
        easing: 'easeInOutQuad',

    });
    newTimeline .add({
        targets: '#html',
        keyframes: [
            {translateX: 500},
            {translateX: 800, translateY: -260},
        ],
        rotate: 40,
        scale: 2.4
    });
    newTimeline .add({
        targets: '#css',
        keyframes: [
            {translateX: 500},
            {translateX: 500, translateY: -260},
            ],
        rotate: -40,
        scale: 2.4

    },250);
    newTimeline .add({
        targets: '#javascript',
        keyframes: [
            {translateX: 500},
            {translateX: 650, translateY: -290}
            ],
        rotate: 0,
        scale: 2.4


    },500);
    newTimeline .add({
        targets: '#jquery',
        keyframes: [
            {translateX: 500},
            {translateX: 590, translateY: -170}
            ],
        rotate: 0,
        scale: 2.4

    },750);

    newTimeline .add({
        targets: '#react',
        keyframes: [
            {translateX: 500},
            {translateX: 720, translateY: -170}
            ],
        rotate: 0,
        scale: 2.4

    },1000);
    newTimeline .add({
        targets: '#java',
        keyframes: [
            {translateX: 500},
            {translateX: 650, translateY: 40}
            ],
        rotate: 0,
        scale: 2.4


    },1250);
    newTimeline .add({
        targets: '#mysql',
        keyframes: [
            {translateX: 500},
            {translateX: 520, translateY: 60}
            ],
        rotate: -40,
        scale: 2.4

    },1500);
    newTimeline .add({
        targets: '#spring',
        keyframes: [
            {translateX: 500},
            {translateX: 590, translateY: 150}
            ],
        rotate: 0,
        scale: 2.4

    },1750);
    newTimeline .add({
        targets: '#bootstrap',
        keyframes: [
            {translateX: 500},
            {translateX: 720, translateY: 150}
            ],
        rotate: 0,
        scale: 2.6

    },2000);
    newTimeline .add({
        targets: '#sass',
        keyframes: [
            {translateX: 500},
            {translateX: 780, translateY: 60}
        ],
        rotate: 40,
        scale: 2.4

    },2250);
    }
    var i = 0;
    $(window).on('scroll', function() {
        scrollPosition = $(this).scrollTop();
        if (scrollPosition >= 600 && i < 1)  {
            $(talkingHead()), $(moveHead());
            i++;

        }
    });
function moveHead(){

  let rotateChin = anime ({
      targets: '#chin',
      easing: 'easeInOutQuad',
      rotate: 20,
      translateY: 20
  });
  let rotateHead = anime({
      targets: '#noChin',
      easing: 'easeInOutQuad',
      rotate: -20,

  });

}
});





