var playerUsername;

$(document).ready(function() {

    $("#submitButton").click(function() {
        submitUsername();

    });

});

 function submitUsername(){

    console.log("HELLOO!!!!");

    // perform an ajax http get request
    $.ajax({
        url: 'https://killergameac.herokuapp.com/api/player',
        type: 'POST',
        data: JSON.stringify({
            "username":$('#username').val(),
        }),
        async: true,
        contentType: 'application/json',
        success: test($('#username').val()),
        error: errorCallback

    });
}

function errorCallback(){
    console.log("ERRRROOORRR!!");
}

function test(username){
    playerUsername = username;
    var row = username;

    $("#myh1").append(row);
    console.log("success!!");
}

