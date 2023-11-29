    var buttonColors = ["red", "blue", "green", "yellow"];
    var gamePattern = [];
    var userClickedPattern = [];
    var started = false; // call nextSequence() on the first keypress
    var level = 0; // Create a new variable called level and start at level 1.

    // Start Game
    $(document).keypress(function() {
        if(!started){
            $("level-title").text("Level " + level);
            nextSequence();
            started = true;
        }
    });

    // Handle Button Clicks
    $(".btn").click(function() {
        var userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);

        // Call matchClicks() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
        matchClicks(userClickedPattern.length - 1);  
    });

    function matchClicks(currentLevel) {
        if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
            console.log("Success");
            if (userClickedPattern.length == gamePattern.length) {
                setTimeout(() => {
                    nextSequence();
                }, 1000);
            }
        }
        else {
            console.log("wrong");
            endGame();
        }
    }

    function nextSequence() {
        $("#level-title").html("Level " + level);
        level++;

        var randomNumber = Math.floor(Math.random()*4);
        var randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);

        // use jQuery to animate a flash to the button selected
        $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

        // use Javascript to play the sound for the button colour selected 
        playSound(randomChosenColor);

    }

    function playSound(name) {
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    }

    function animatePress(currentColor) {
        $("#" + currentColor).addClass("pressed");

        // use Javascript to remove the pressed class after a 100 milliseconds
        setTimeout(() => {
            $("#" + currentColor).removeClass("pressed");
        }, 100);
    }



    function endGame() {

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }

    function startOver() {
        started = false;
        gamePattern.length = 0;
        userClickedPattern.length = 0;
        level = 1;
    }