var usernameTag;
var victim;

$(document).ready(function() {

    $("#kill").click(function() {
        killVictim();

    });


  $("#rigged").click(function() {
        riggedByPredadator();

    });

});

 function killVictim(){

    console.log("HELLOO!!!!");

    // perform an ajax http get request
    $.ajax({
        url: 'https://killergameac.herokuapp.com/api/player',
        type: 'GET',
        data: JSON.stringify({
            "username":$('#username').val(),
            "partynumber":$('#partynumber').val()
        }),
        async: true,
        contentType: 'application/json',
        success: test,
        error: errorCallback

    });
}

function getFunction(){

    // perform an ajax http get request
    $.ajax({
    url: 'http://localhost:8080/javabank5/api/customer',
    async: true,
    success: goToGame,
    error: errorCallback
    });
}

function errorCallback(){
    console.log("ERRRROOORRR!!");
    setTimeout(function(){ alert("I am waiting.."); }, 5000);
    getFunction();
}

function test(){
    console.log("success!!")
}

