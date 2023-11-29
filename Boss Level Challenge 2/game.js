// alert("JS file integrated succesfully.");
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var buttonSounds = ["blue.mp3", "green.mp3", "red.mp3", "yellow.mp3", "wrong.mp3"]
var gamePattern = [];

function nextSequence() {

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber]; 
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    document.querySelector("#"+randomChosenColor).addEventListener("click", function() {
        var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
        audio.play();
    });
}

nextSequence();