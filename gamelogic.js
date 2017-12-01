var playing = false;
var playerScore;
var livesRemaining;

// wrap all the code in document ready function
$(function(){
    // click the start / reset button
    $("#startreset").click(function(){
        if (playing) {
            // reload the page
            location.reload();
        } else {
            // now we are playing
            playing = true;
            playerScore = 0;
            livesRemaining = 3;
            $("#scorevalue").html(playerScore);
            $("#lives").show();

            for (var i = 0; i < livesRemaining; i++) {
                $("#lives").append(" X ");
            }
        }
    });
});


