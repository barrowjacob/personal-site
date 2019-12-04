
$(document).ready(function() {
    $(this).scrollTop(0);

    /*****************************/
    //hide elements upon page load
    /*****************************/

    $('.cardOne').hide();
    $('#aboutMe').children().last().hide();

    /*****************************/
    // change roles on landing page
    /*****************************/

    setTimeout(function () {
        $('#aboutMe').children().last().show("slow");
    }, 1000);
    setTimeout(() => {
        $('#role').html(`husband`);
    }, 2000);
    setTimeout(() => {
        $('#role').html(`musician`);
    }, 2700);
    setTimeout(() => {
        $('#role').html(`problem-solver`);
    }, 3400);
    setTimeout(() => {
        $('#role').html(`dreamer`);
    }, 4100)


    /**********************************************/
    // animejs timeline for animating language icons
    /**********************************************/

    function talkingHead() {
        let newTimeline = anime.timeline({
            targets: '.letter',
            opacity: 1,
            delay: 500,
            easing: 'easeInOutQuad',
        });
        newTimeline.add({
            targets: '#html',
            keyframes: [
                {translateX: 500},
                {translateX: 800, translateY: -260},
            ],
            rotate: 40,
            scale: 2.4
        });
        newTimeline.add({
            targets: '#css',
            keyframes: [
                {translateX: 500},
                {translateX: 500, translateY: -260},
            ],
            rotate: -40,
            scale: 2.4
        }, 250);
        newTimeline.add({
            targets: '#javascript',
            keyframes: [
                {translateX: 500},
                {translateX: 650, translateY: -290}
            ],
            rotate: 0,
            scale: 2.4
        }, 500);
        newTimeline.add({
            targets: '#jquery',
            keyframes: [
                {translateX: 500},
                {translateX: 590, translateY: -170}
            ],
            rotate: 0,
            scale: 2.4
        }, 750);
        newTimeline.add({
            targets: '#react',
            keyframes: [
                {translateX: 500},
                {translateX: 720, translateY: -170}
            ],
            rotate: 0,
            scale: 2.4
        }, 1000);
        newTimeline.add({
            targets: '#java',
            keyframes: [
                {translateX: 500},
                {translateX: 650, translateY: 40}
            ],
            rotate: 0,
            scale: 2.4
        }, 1250);
        newTimeline.add({
            targets: '#mysql',
            keyframes: [
                {translateX: 500},
                {translateX: 520, translateY: 60}
            ],
            rotate: -40,
            scale: 2.4
        }, 1500);
        newTimeline.add({
            targets: '#spring',
            keyframes: [
                {translateX: 500},
                {translateX: 590, translateY: 150}
            ],
            rotate: 0,
            scale: 2.4
        }, 1750);
        newTimeline.add({
            targets: '#bootstrap',
            keyframes: [
                {translateX: 500},
                {translateX: 720, translateY: 150}
            ],
            rotate: 0,
            scale: 2.6
        }, 2000);
        newTimeline.add({
            targets: '#sass',
            keyframes: [
                {translateX: 500},
                {translateX: 780, translateY: 60}
            ],
            rotate: 40,
            scale: 2.4
        }, 2250);
    }

    /****************************************/
    // make head animate upon scroll position
    /****************************************/

    var i = 0;
    $(window).on('scroll', function () {
        let scrollPosition = $(this).scrollTop();
        if (scrollPosition >= 600 && i < 1) {
            $(talkingHead()), $(moveHead());
            i++;
        }
    });

    /***********************************************/
    // make project cards appear upon scroll position
    /***********************************************/

    var j = 0;
    $(window).on('scroll', function () {
        let scrollPosition = $(this).scrollTop();
        if (scrollPosition >= 960 && j < 1) {
            $('.cardOne').fadeIn(1000);
        }
    });

    /*******************/
    //animate moving head
    /*******************/

    function moveHead() {
        let rotateChin = anime({
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

    /******************/
    //make navbar sticky
    /******************/

    var stickyNavTop = $('#navbar').offset().top;
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('#navbar').addClass('sticky');
        } else {
            $('#navbar').removeClass('sticky');
        }
    };
    stickyNav();
    $(window).scroll(function () {
        stickyNav();
    });

    /*******************************/
    //click projects to go to github
    /*******************************/

    $('#coffeeCard').on('click', () => {
        window.open("https://github.com/barrowjacob/Uno-Project/tree/master");
    });
});
//NIXED IDEAS:

/*****************************************************/
// functionality for checking current scroll position
/*****************************************************/
//
// $('body').click(function() {
//     console.log($(document).scrollTop());
// });

/***************************/
//navbar links for scrolling
/***************************/

//THIS DOESN'T WORK ON MOBILE OR FIREFOX==SCRATCH IT
// $('#home1').click(function() {
//     $(document).scrollTop(0);
// });
// $('#lang1').click(function() {
//     var elmnt = document.getElementsByTagName("html");
//     elmnt.scrollTop(1500);
// });
// $('#proj1').click(function() {
//     $(document).scrollTop(1475)
// });
// $('#contact1').click(function() {
//     $(document).scrollTop(2295);
// });






