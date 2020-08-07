var objectArray = [];
var crimeSceneArray = [];

$(document).ready(function() {

    $("#axe").click(function() {
        objectInitializer("whippingcream");
    });

    $("#ball").click(function() {
        objectInitializer("whippingcream");
    });

    $("#banana").click(function() {
        objectInitializer("whippingcream");
    });

    $("#belt").click(function() {
        objectInitializer("whippingcream");
    });

    $("#bike").click(function() {
        objectInitializer("whippingcream");
    });

    $("#gamecontroller").click(function() {
        objectInitializer("whippingcream");
    });

    $("#ice").click(function() {
        objectInitializer("whippingcream");
    });

    $("#key").click(function() {
        objectInitializer("whippingcream");
    });

    $("#knife").click(function() {
        objectInitializer("whippingcream");
    });

    $("#lamp").click(function() {
        objectInitializer("whippingcream");
    });

    $("#lighter").click(function() {
        objectInitializer("whippingcream");
    });

    $("#lipstick").click(function() {
        objectInitializer("whippingcream");
    });

    $("#liquor").click(function() {
        objectInitializer("whippingcream");
    });

    $("#nail").click(function() {
        objectInitializer("whippingcream");
    });

    $("#pen").click(function() {
        objectInitializer("whippingcream");
    });

    $("#pillow").click(function() {
        objectInitializer("whippingcream");
    });

    $("#scissors").click(function() {
        objectInitializer("whippingcream");
    });

    $("#skate").click(function() {
        objectInitializer("whippingcream");
    });

    $("#soap").click(function() {
        objectInitializer("whippingcream");
    });

    $("#strawberry").click(function() {
        objectInitializer("whippingcream");
    });

    $("#sweet").click(function() {
        objectInitializer("whippingcream");
    });

    $("#tissues").click(function() {
        objectInitializer("whippingcream");
    });

    $("#tvremote").click(function() {
        objectInitializer("whippingcream");
    });

    $("#vase").click(function() {
        objectInitializer("whippingcream");
    });

    $("#waterglass").click(function() {
        objectInitializer("whippingcream");
    });

    $("#whippedcream").click(function() {
        objectInitializer("whippingcream");
    });

});

function objectInitializer(str){

    console.log("I am here!"+str);
    objectArray.push(str);
    var row = '<td>'+str+'</td> ';

    $(".objNames").append(row);

}

 