var playerService =

$(document).ready(function() {

    $("#joingame").click(function() {
        userJoinGame();

    });


});

 function userJoinGame(){

    console.log("HELLOO!!!!");

    // perform an ajax http get request
    $.ajax({
        url: 'https://killergameac.herokuapp.com/api/player',
        type: 'POST',
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

function errorCallback(){
    console.log("ERRRROOORRR!!");
}

function test(){
    console.log("success!!")
}

