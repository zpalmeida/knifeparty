var objectArray = [];
var crimeSceneArray = [];

$(document).ready(function() {

    $("#axe").click(function() {
        objectInitializer("axe");
    });

    $("#ball").click(function() {
        objectInitializer("ball");
    });

    $("#banana").click(function() {
        objectInitializer("banana");
    });

    $("#belt").click(function() {
        objectInitializer("belt");
    });

    $("#bike").click(function() {
        objectInitializer("bike");
    });

    $("#gamecontroller").click(function() {
        objectInitializer("game controller");
    });

    $("#ice").click(function() {
        objectInitializer("ice cube");
    });

    $("#key").click(function() {
        objectInitializer("keys");
    });

    $("#knife").click(function() {
        objectInitializer("knife");
    });

    $("#lamp").click(function() {
        objectInitializer("lamp");
    });

    $("#lighter").click(function() {
        objectInitializer("lighter");
    });

    $("#lipstick").click(function() {
        objectInitializer("lipstick");
    });

    $("#liquor").click(function() {
        objectInitializer("liquor");
    });

    $("#nail").click(function() {
        objectInitializer("nail");
    });

    $("#pen").click(function() {
        objectInitializer("pen");
    });

    $("#pillow").click(function() {
        objectInitializer("pillow");
    });

    $("#rope").click(function() {
        objectInitializer("rope");
    });

    $("#scissors").click(function() {
        objectInitializer("scissors");
    });

    $("#skate").click(function() {
        objectInitializer("skate");
    });

    $("#soap").click(function() {
        objectInitializer("soap");
    });

    $("#strawberry").click(function() {
        objectInitializer("strawberry");
    });

    $("#sweet").click(function() {
        objectInitializer("sweets");
    });

    $("#tissues").click(function() {
        objectInitializer("tissues");
    });

    $("#tvremote").click(function() {
        objectInitializer("tv remote");
    });

    $("#vase").click(function() {
        objectInitializer("vase");
    });

    $("#waterglass").click(function() {
        objectInitializer("water glass");
    });

    $("#whippedcream").click(function() {
        objectInitializer("whipping cream");
    });

});

function objectInitializer(str){

    console.log("I am here!"+str);
    objectArray.push(str);
    var row = '<td>'+str+', </td> ';

    $(".objNames").append(row);

}

 