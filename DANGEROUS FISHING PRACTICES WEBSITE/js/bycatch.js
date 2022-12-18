$(document).ready(function() {

// jQuery action gallery 3 buttons //
  	$(".gallery").slick({ // enables slick library to .gallery div
  		dots: true, // enables pagination buttons
  		fade: true	// enables fade transitions between pictures
  	});

    // jQuery action for First X : Open  //

    $(".one").mouseenter(function() {
      $(".leftone").animate({"left":"-500px"}, 500);
      $(".rightone").animate({"right":"-500px"}, 500);
      $(".textone").fadeIn(500);
    });

    // jQuery action for First X : Close  //
    $(".one").mouseleave(function() {
      $(".leftone").animate({"left":"0px"}, 1000);
      $(".rightone").animate({"right":"0px"}, 1000);
      $(".textone").fadeOut(500);
    });


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
