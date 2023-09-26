let dropdownicon = document.querySelector('.city-selection-list-input-image');
let dropdownlist = document.querySelector('.city-selection-list-option');
var scrollmap = document.querySelector('.main-hero-section-map');
var bhuneswarx = 1.2;
var bhuneshwary = 1.2;
var delhix = 0.8;
var delhiy = 0.55;
var Luckx = 0.9;
var Lucky = 0.75;
//add more locations-do mapping according to backend criteria,search for new locations manually ,adjust in case of resizing
console.log(scrollmap);

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var scrollmap = document.querySelector('.main-hero-section-map');
        var scrollLeft = scrollmap.scrollWidth / 2 - window.innerWidth / 2;
        var scrollTop = scrollmap.scrollHeight / 2 - window.innerHeight / 2;
        console.log(scrollLeft);
        console.log(scrollTop);

        // Ensure the element exists
        if (scrollmap) {
            smoothScroll(scrollmap, scrollLeft, scrollTop, 2000);
        }
    }, 2000); // Delay

    setTimeout(function () {
        var scrollmap = document.querySelector('.main-hero-section-map');
        var scrollLeft = scrollmap.scrollWidth / 2 - window.innerWidth / 2;
        var scrollTop = scrollmap.scrollHeight / 2 - window.innerHeight / 2;

        if (scrollmap) {
            smoothScroll(scrollmap, scrollLeft * 0.9, scrollTop * 0.75, 4000);
        }
    }, 4000);
});

function smoothScroll(element, toLeft, toTop, duration) {
    var start = {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop,
    };
    var change = {
        scrollLeft: toLeft - start.scrollLeft,
        scrollTop: toTop - start.scrollTop,
    };
    var startTime = performance.now();

    function animateScroll(currentTime) {
        var elapsedTime = currentTime - startTime;
        var progress = Math.min(elapsedTime / duration, 1);

        element.scrollLeft = start.scrollLeft + change.scrollLeft * progress;
        element.scrollTop = start.scrollTop + change.scrollTop * progress;

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}
//Check whichever works better 

// let dropdownicon = document.querySelector('.city-selection-list-input-image');
// let dropdownlist = document.querySelector('.city-selection-list-option');
// var scrollmap = document.querySelector('.main-hero-section-map');
// var bhuneswarx=1.2;varbhuneshwary=1.2;
// var delhix=.8; var delhiy=.55;
// var Luckx=.9; var Lucky=.75;
// console.log(scrollmap);

// document.addEventListener('DOMContentLoaded', function () {

//     setTimeout(function () {

//         var scrollmap = document.querySelector('.main-hero-section-map');
//         var scrollLeft = scrollmap.scrollWidth / 2 - window.innerWidth / 2;
//         var scrollTop = scrollmap.scrollHeight / 2 - window.innerHeight / 2;
//         console.log(scrollLeft)
//     console.log(scrollTop)
//         // Ensure the element exists 
//         if (scrollmap) {
//             $(scrollmap).animate(
//                 { scrollLeft: scrollLeft, scrollTop: scrollTop },
//                 4000, 
//                 'linear' 
//             );
//         }
//     }, 2000); // Delay
    
//     setTimeout(function () {
//         var scrollmap = document.querySelector('.main-hero-section-map');
//         var scrollLeft = scrollmap.scrollWidth / 2 - window.innerWidth / 2;
//         var scrollTop = scrollmap.scrollHeight / 2 - window.innerHeight / 2;

//         if (scrollmap) {
        
//             $(scrollmap).animate(
//                 { scrollLeft: scrollLeft*.9, scrollTop: .75*scrollTop },
//                 4000, 
//                 'linear'
//             );
//         }
//     }, 4000);
// });