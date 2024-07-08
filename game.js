var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var gameStarted = false
var level = 0

$(".btn").click(function() { 
    var userChosenColour =  $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    
    playSound(userChosenColour)
    animatePress(userChosenColour)
});
$(document).keydown(function(){
    if(!gameStarted){
        $("#level-title").text("Level" + level)
        nextSequence()
        gameStarted = true
    }
})

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed")
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    },100)
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
    
}


function nextSequence() {
    level++
    $("#level-title").text("Level" + level)
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
    
    playSound(randomChosenColour)
}



