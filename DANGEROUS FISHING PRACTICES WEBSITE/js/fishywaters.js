$(document).ready(function() {

  //menu//
     $(".button").click(function() {

           if ($('.menu').css('display') == 'none') {
               $(".menu").show("slide", 200);
               $(".button").addClass("red");
           }

           else {
               $(".menu").hide("slide", 200);
               $(".button").removeClass("red");
           };

     });


});
