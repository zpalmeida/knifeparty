var objectArray = [];
var crimeSceneArray = [];

$(document).ready(function() {

    $("#whippedcream").click(function() {
        objectInitializer("whippedcream");
    });

    $("#waterglass").click(function() {
        objectInitializer("waterglass");
    });

    $("#vase").click(function() {
        objectInitializer("vase");
    });

    $("#tvremote").click(function() {
        objectInitializer("tvremote");
    });

    $("#tissues").click(function() {
        objectInitializer("tissues");
    });

    $("#sweet").click(function() {
        objectInitializer("sweet");
    });

    $("#strawberry").click(function() {
        objectInitializer("strawberry");
    });

    $("#soap").click(function() {
        objectInitializer("soap");
    });

    $("#tvremote").click(function() {
        objectInitializer("tvremote");
    });


 

});

function objectInitializer(str){
    objectArray.pop(str);
}

 