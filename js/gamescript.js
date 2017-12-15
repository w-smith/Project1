console.log("Hey, it's me. Ya boii.. Kirby.");
$(document).ready(function() {






// KIRBY CONTROLS


$(window).keypress(function(q) {
    if(q.keyCode == 113)
$("#kirby").animate({top: "-=5%"},-50);
});


$(window).keypress(function(a) {
    if(a.keyCode == 97)
$("#kirby").animate({top: "+=5%"},-50);
console.log(kirby.position().top);
});







// METAKNIGHT CONTROLS
$(window).keypress(function(o) {
    if(o.keyCode == 111)
    // console.log("racer1");
$("#metaknight").animate({top: "-=3%"},-50);
});

$(window).keypress(function(l) {
    if(l.keyCode == 108)
    // console.log("racer1");
$("#metaknight").animate({top: "+=3%"},-50);
});




// BIRDON1
$(document).ready(function() {
    $("#birdon1").animate({right: "+=120%"},5000);
    // $("#birdon").animate({right: "-=300"}, 1000);
});

// BIRDON2
$(document).ready(function() {
    $("#birdon2").animate({right: "+=120%"},5000);
    // $("#birdon").animate({right: "-=300"}, 1000);
});

// BIRDON3
$(document).ready(function() {
    $("#birdon3").animate({right: "+=120%"},5000);
    // $("#birdon").animate({right: "-=300"}, 1000);
});



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



setInterval(function(){
var skull2 = document.createElement("img");
 skull2.setAttribute("src", "images/skull2gifs/skull2.gif");
 skull2.setAttribute("class", "skull2");
 var x = Math.floor(Math.random() * 10) * 10;
 var z = skull2.style.marginLeft = 10 + x +"%";
 skull2.style.marginTop = 0 +"%";
 document.body.appendChild(skull2);
}, 1000);





var kirby = $("#kirby");
var kwidth = 110;
var kirbyright = kirby.position().left + kwidth;
var kirbyleft = kirby.position().left;
var kheight = kirby.position().top + 120;



var mk = $("#metaknight");
var mkwidth = 115;
var mkright = mk.position().left + mkwidth;
var mkleft = mk.position().left;

var skull1 = $("#skull1");
var sk1width = 60;
var skull1top = skull1.position().top;
var skull1bottom = skull1.position().top + 60;
var skull1left = skull1.position().left;
var skull1right = skull1.position().left + 60;
// console.log(skull1.position().left);
















// SKULL1
 

$(skull1).animate({left: "-=2%"},100, skullmove);
function skullmove(){
  console.log(skull1.position().left);
if ( skull1.position().left <= kirbyright 
        && skull1.position().top <= kirby.position().top + 100
        && skull1.position().top + 60 >= kirby.position().top + 20
        && skull1.position().left + 60 >= kirby.position().left
        || skull1.position().left <= mkright 
        && skull1.position().top <= mk.position().top + 100
        && skull1.position().top + 60 >= mk.position().top +50
        && skull1.position().left + 60 >= mk.position().left

        ) {
window.location.href = "gameover.html";
}
else {
$("#skull1").animate({left: "-=2%"},100, skullmove);

}



}













// // SKULL2
// $(document).ready(function() {
//     $("#skull2").animate({right: "+=3000"},16000);
// });



// TIMER

function winner() {
     setTimeout(myTimeout1, 10000);}

     function myTimeout1() {
    window.location.href = "win.html";
}

winner();

});




// modal
var modal = document.getElementById("simpleModal");
var modalLink = document.getElementById("modalLink");
var closeButton = document.getElementById("closeButton");

modalLink.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);


function openModal () {
    modal.style.display = "block";
}

function closeModal () {
    modal.style.display = "none";
}
