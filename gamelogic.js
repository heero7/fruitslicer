var playing = false;
var playerScore;
var livesRemaining;
var fruitLocations = ['apple', 'banana', 'grapes', 'kiwi', 'orange', 'pineapple', 'strawberry'];
var fruitMovement;
var action; //for set interval

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

            addHearts();

            // hide the game over container
            $("#gameover").hide();

            $("#startreset").html("Reset Game");

            startAction();
        }
    });
});

function addHearts() {
     // empty the box first
     $("#lives").empty();
    for (var i = 0; i < livesRemaining; i++) {
        $("#lives").append('<img class="life" src="images/life.png"/>');
    }
}

function startAction() {
    // show fruit
    $("#fruit").show();
    chooseFruit();
    // determine movement speed
    fruitMovement = Math.round(Math.random() * 5) + 1;

    // move fruit down every 10ms
    action = setInterval(function(){
        $("#fruit").css('top', $("#fruit").position().top + fruitMovement);

        // check if the fruit object has gone too low
        if ($("#fruit").position().top > $("#screen").height()){
            // any lives left?
            if (livesRemaining > 1) {
                // continue the game 
               
                // show fruit
                $("#fruit").show();
                chooseFruit();
                // determine movement speed
                fruitMovement = Math.round(Math.random() * 5) + 1;

                 // but remove a life
                 livesRemaining--;
                 // remove a heart
                   
                
                 addHearts();
            } else {
                // game over
                playing = false; // no longer playing the game
                $("#startreset").html("Start Game");    // change the text of the button

                // show game over message
                $("#gameover").show();
                // display message
                $("#gameover").html('<p>Game Over!</p><p>Your score is ' + playerScore + '</p>');

                // hide the lives
                $("#lives").hide();

                // clear the interval that was set
                stopAction();
            }
        }
    }, 10);
}

function chooseFruit(){
    // generates random fruit

    $("#fruit").attr('src', 'images/' + fruitLocations[Math.round(Math.random() * 6)] + '.png');
    //$("#fruit").css({'left': 300, 'top': -50});
    $("#fruit").css({'left': Math.round(Math.random() * 600), 'top': -50});
}

// stops moving the fruit
function stopAction(){
    clearInterval(action);
    $("#fruit").hide();
}