var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var gameStarted = false
var level = 0
var currentLevel = 0

$(".btn").click(function() { 
    var userChosenColour =  $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length - 1)
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
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Success")

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence()
            }, 1000)
        }
    }else{
        $("h1").text("Game Over, Press Any Key to Restart")
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200)
        var audio = new Audio("sounds/wrong.mp3")
        audio.play()
    }
}





