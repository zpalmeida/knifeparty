var objectArray = [];
var crimeSceneArray = [];

$(document).ready(function() {

    $("#bedroom").click(function() {
        objectInitializer("bedroom");
    });

    $("#balcony").click(function() {
        objectInitializer("balcony");
    });

    $("#car").click(function() {
        objectInitializer("car");
    });

    $("#dinningroom").click(function() {
        objectInitializer("dinning room");
    });

    $("#bike").click(function() {
        objectInitializer("bike");
    });

    $("#garage").click(function() {
        objectInitializer("garage");
    });

    $("#garden").click(function() {
        objectInitializer("garden");
    });

    $("#livingroom").click(function() {
        objectInitializer("living room");
    });

    $("#pool").click(function() {
        objectInitializer("pool");
    });

});

function objectInitializer(str){

    console.log("I am here!"+str);
    objectArray.push(str);
    var row = '<td>'+str+', </td> ';

    $(".objNames").append(row);

}

 