console.log("Hey, it's me. Ya boii.. Kirby.");
$(document).ready(function() {






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
//     $("#birdon1").animate({right: "+=120%"},5000);
//     // $("#birdon").animate({right: "-=300"}, 1000);
// });

// // BIRDON2
// $(document).ready(function() {
//     $("#birdon2").animate({right: "+=120%"},5000);
//     // $("#birdon").animate({right: "-=300"}, 1000);
// });

// // BIRDON3
// $(document).ready(function() {
//     $("#birdon3").animate({right: "+=120%"},5000);
//     // $("#birdon").animate({right: "-=300"}, 1000);
// });



// // BIRDON4
// $(document).ready(function() {
//     $("#birdon4").animate({right: "+=2500"},10000);
//     // $("#birdon").animate({right: "-=300"}, 1000);
// });

// // BIRDON4
// $(document).ready(function() {
//     $("#birdon5").animate({right: "+=2500"},10000);
//     // $("#birdon").animate({right: "-=300"}, 1000);
// });

// // BIRDON6

//     $("#birdon6").animate({right: "+=2500"},10000);
//     // $("#birdon").animate({right: "-=300"}, 1000);














var kirby = $("#kirby");
var kwidth = 168;

var skull1 = $("#skull1");
var sk1width = 60;

var metaknight = $("#metaknight");
var mkwidth = 130;


var kposition = kirby.position();
$("#kirby").text(console.log(kposition.left, kposition));

var mkposition = metaknight.position();
$("#metaknight").text(console.log(mkposition.left, mkposition));

var sk1position = skull1.position();
$("#skull1").text(console.log(sk1position.left, sk1position));

var metaknightright = mkposition.left + mkwidth;

var kirbyright = kirby.position().left + kwidth;
console.log(kirby.position().left);







// if ( sk1position.left <= kirbyright ) {
//   console.log("dead");
// }

// SKULL1
 

$(skull1).animate({left: "-=20%"},1000, skullmove);
function skullmove(){
  // console.log(skull1.position().left);
if ( skull1.position().left <= kirbyright ) {
  console.log("dead");
}
else {
$("#skull1").animate({left: "-=20%"},1000, skullmove);

}



}













// // SKULL2
// $(document).ready(function() {
//     $("#skull2").animate({right: "+=3000"},16000);
// });



// TIMER




});
