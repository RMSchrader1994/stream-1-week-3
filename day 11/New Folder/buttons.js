$(document).ready(function(){
    $(".theButton").click(function(){
    // $(".theButton").hide(1000);
    $(this).hide(1000);
    });
    $("#panel").click(function(){
      $(this).siblings().css("opacity",".1"); 
    });
    $(".superButton").click(function(){
      $(".theButton").fadeTo(500,1);
      $(".blue").css("background-color", "blue");
      $(".red").css("background-color", "red");
      $(".green").css("background-color", "green");
      $(".superButton").fadeTo(500,1);
    });
    $(".theButton").mouseover(function(){
       $(this).css("background-color", "black"); 
    });
});