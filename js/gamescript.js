console.log("Hey, it's me. Ya boii.. Kirby.");


// KIRBY CONTROLS
$(window).keypress(function(q) {
    if(q.keyCode == 113)
    // console.log("racer1");
$("#kirby").animate({marginTop: "-=3%"},-50);
});

$(window).keypress(function(a) {
    if(a.keyCode == 97)
    // console.log("racer1");
$("#kirby").animate({marginTop: "+=3%"},-50);
});





// METAKNIGHT CONTROLS
$(window).keypress(function(o) {
    if(o.keyCode == 111)
    // console.log("racer1");
$("#metaknight").animate({marginTop: "-=3%"},-50);
});

$(window).keypress(function(l) {
    if(l.keyCode == 108)
    // console.log("racer1");
$("#metaknight").animate({marginTop: "+=3%"},-50);
});




// // BIRDON1
// $(document).ready(function() {
//     $("#birdon1").animate({right: "+=2500"},10000);
//     // $("#birdon").animate({right: "-=300"}, 1000);
// });

// // BIRDON2
// $(document).ready(function() {
//     $("#birdon2").animate({right: "+=2500"},10000);
//     // $("#birdon").animate({right: "-=300"}, 1000);
// });

// // BIRDON3
// $(document).ready(function() {
//     $("#birdon3").animate({right: "+=2500"},10000);
//     // $("#birdon").animate({right: "-=300"}, 1000);
// });





// SKULL1
$(document).ready(function() {
    $("#skull1").animate({right: "+=120%"},12000);
});

// // SKULL2
// $(document).ready(function() {
//     $("#skull2").animate({right: "+=3000"},16000);
// });





