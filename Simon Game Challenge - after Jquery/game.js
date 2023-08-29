let gamePattern=[];
let userPattern=[];
var buttonColors=["green","red","yellow","blue"]
var level = 0;
var started = false;

$(document).on('keydown' , function(){
    if(!started){
        $('h1').text('Level '+level); 
        nextSequence();
        started = true;      
    } 
})

$('.btn').on('click', function(){
    var userChosenColor = $(this).attr('id');
    userPattern.push(userChosenColor);
    pressAnim(userChosenColor);
    playSound(userChosenColor);
    checkUserInput(userPattern.length-1);
})

function checkUserInput(currentLevel) {
    if(gamePattern[currentLevel]===userPattern[currentLevel]){
        if(gamePattern.length === userPattern.length){
            setTimeout(() => {
                nextSequence();    
            }, 1000);            
        }
    }
    else{
        playSound('wrong');
        $('body').addClass('game-over');
        $('h1').text('Game Over!! Press any key to play again');
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 200);
        startOver();
    }
}


function nextSequence(){
    userPattern = [];
    level++;
    $('h1').text('Level '+level);
    var randomNumber=Math.trunc(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);  
    $('#'+randomChosenColor).fadeOut().fadeIn(); 
    playSound(randomChosenColor); 
}





function pressAnim(params) {
    $('#'+params).addClass('pressed');
setTimeout(()=>{
  $('#'+params).removeClass('pressed');
},100)
}

function playSound(color){
    let greenSound = new Audio('sounds/'+color+'.mp3');
    greenSound.play();
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}