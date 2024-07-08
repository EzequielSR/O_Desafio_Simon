var gamePattern =[]
var buttonColours = ["red","blue","green","yellow"]

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4)
    // return buttonColours[randomNumber]
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour) 
    // var randomChosenColour = randomNumber
}
nextSequence()
console.log(gamePattern)