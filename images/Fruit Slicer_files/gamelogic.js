var playing = false;
var playerScore;
var livesRemaining;
var fruitLocations = ['apple', 'banana', 'grapes', 'kiwi', 'orange', 'pineapple', 'strawberry'];

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

            $("#startreset").html("Reset Game");

            startAction();
        }
    });
});

function addHearts() {
    for (var i = 0; i < livesRemaining; i++) {
        $("#lives").append('<img class="life" src="images/life.png"/>');
    }
}

function startAction() {
    $("#fruit").show();
    chooseFruit();
}

function chooseFruit(){
    // generates random fruit

    $("#fruit").attr('src', 'images/' + fruitLocations[Math.round(Math.random() * 6) + 1] + '.png');
    //$("#fruit").css({'left': 300, 'top': -50});
    $("#fruit").css('top', -100);
}
