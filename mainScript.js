var usernamePlayer;


$(document).ready(function() {

    $("#joingame").click(function() {
        userJoinGame();
    });

    $("#kill").click(function() {
        killVictim();

    });

  $("#rigged").click(function() {
        riggedByPredadator();

    });

  $("#startgame").click(function(){
      startGame();
  })  

});

function startGame(){
    $.ajax({
        url: 'https://killergameac.herokuapp.com/api/player/start-game',
        async: true,
        success: goToGame,
        error: errorNoBlackList
    });

    
}

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
        success: loadingParameters($('#username').val()),
        error: errorUserJoin

    });
}

function loadingParameters(username){
    console.log("Sucess!");
    usernamePlayer = username;
    getBlacklistFunction();
}

function getBlacklistFunction(){

    // perform an ajax http get request
    $.ajax({
        url: 'https://killergameac.herokuapp.com/api/blacklist/'+ usernamePlayer,
        async: true,
        success: goToGame,
        error: errorNoBlackList
    });
}

function goToGame(response){
    console.log("Success. Blacklist have arrived");

    var row = '<tr><td>' + 
                'PAAAAULLOOOO' + '</td><td>' + 
                'LEEEEONOOORRR' + '</td><td>' + 
                'ZEPEDROOOOOO' + '</td></tr>';

    $(row).appendTo('#blacklist-table');
    console.log("resPONSE:"+response.victim+"response2"+response.crimeScene);

}

function errorNoBlackList(){
    console.log("Waiting!!");
    setTimeout(function(){ alert("I am waiting.."); }, 5000);
    getBlacklistFunction();
}

function errorUserJoin(){
    console.log("ERRRROOORRR!!");
}

function test(){
    console.log("success!!")
}

