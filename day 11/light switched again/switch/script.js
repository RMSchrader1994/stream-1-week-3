$(document).ready(function() {
    
    
    
    $("#switch1").click(function() {
        $("#switch1").attr("src","img/switch_on.png");
    });
    $("#switch1").click(function(){
       if($("#switch1").attr("src")=="img/switch_off.png"){
           $("#bulb1").attr("src", "img/bulboff.gif");
       }else if($("#switch1").attr("src")=="img/switch_on.png"){
           $("#bulb1").attr("src", "img/bulbon.gif");}
           
    });
    $("#switch2").click(function() {
        $("#switch2").attr("src","img/switch_on.png");
    });
    $("#switch2").click(function(){
       if($("#switch2").attr("src")=="img/switch_off.png"){
           $("#bulb2").attr("src", "img/bulboff.gif");
       }else if($("#switch2").attr("src")=="img/switch_on.png"){
           $("#bulb2").attr("src", "img/bulbon.gif");}
           
    });
    $("#switch3").click(function() {
        $("#switch3").attr("src","img/switch_on.png");
    });
    $("#switch3").click(function(){
       if($("#switch3").attr("src")=="img/switch_off.png"){
           $("#bulb3").attr("src", "img/bulboff.gif");
       }else if($("#switch3").attr("src")=="img/switch_on.png"){
           $("#bulb3").attr("src", "img/bulbon.gif");}
           
    });
    
})