let gamePattern=[];
let user;
var buttonColors = ["green","red","yellow","blue"]


function nextSequence(){
    var randomNumber = Math.trunc(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);  
    pressed(randomChosenColor);  
}
nextSequence();

















$(document).on('keydown', function(){
    var levelNo=1;
    
    $('h1').text('Level '+levelNo);
    
    mainPattern.push(randomNo); 
    pressed(btnColors[randomNo]);
    
    while(levelNo<6){
               
        // for(var i=0; i<mainPattern.length;i++){
        //     pressed(btnColors[mainPattern[i]]);
        // }
        console.log(mainPattern);
        levelNo++;
        
    }
    
    
    // while(mainPattern.length<5){
    //     $('h1').text('Level '+levelNo);
    //     mainPattern.push(Math.trunc(Math.random()*4));
    //     for(var i=0; i<mainPattern.length;i++){
    //         document.querySelectorAll('.btn')[mainPattern[i]].classList.add("pressed");
    //     setTimeout(() => {
    //         document.querySelectorAll('.btn')[mainPattern[i]].classList.remove("pressed");  
    //     }, 5000);
    //         // pressed(mainPattern[i]);
    //     }
    //     levelNo++;
    // }
})

function pressed(params) {
    $('#'+params).addClass('pressed');
setTimeout(()=>{
  $('#'+params).removeClass('pressed');
},200)
    switch (params) {
        case "green":
            let greenSound = new Audio('sounds/green.mp3')
            greenSound.play();
            break;
        
        case "red":
            let redSound = new Audio('sounds/red.mp3')
            redSound.play();    
            break;
        
        case "yellow":
            let yellowSound = new Audio('sounds/yellow.mp3')
            yellowSound.play();  
            break;
        
        case "blue":
            let blueSound = new Audio('sounds/blue.mp3')
            blueSound.play();  
            break;        
    
        default:
            break;
    }
}
