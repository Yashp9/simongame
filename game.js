
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
nextSequence();
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+randomChosenColour+".mp3");
    audio.play();
    $(".btn").click(function(e){
      // var userChosenColour = e.id;
      console.log(e.target.id);
       var audio = new Audio("sounds/"+e.target.id+".mp3");
    audio.play();
      });
   userClickedPattern.push(randomChosenColour);   
}
