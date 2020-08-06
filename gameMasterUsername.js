$(document).ready(function() {

    $("#username").click(submitUsername);

});

    function submitUsername(){

        console.log("HELLOO!!!!");

        // perform an ajax http get request
        $.ajax({
            url: 'https://killergameac.herokuapp.com/api/player',
            type: 'POST',
            data: JSON.stringify({
                "userName":$('#username').val(),
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

