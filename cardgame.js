var playerCardArray = [[0,0,0,"",""], [0,0,0,"",""], [0,0,0,"",""]];
var opponentCardArray = [[0,0,0,"",""], [0,0,0,"",""], [0,0,0,"",""]];
var imageCardArray = ["cards/goose.png","cards/tiger.png","cards/octopus.jpg","cards/snake.jpg","cards/dragon.jpg","cards/griffin.png"];
var playerHealth = 20;
var opponentHealth = 20;


//display elements:
var playerHealthDisp;
var opponentHealthDisp;
var attackValues;
var healthValues;
var defenseValues;
var imageValues;
var titles;
var alertOn = true;
var gameOver = false;

function addRandomCard() {
    for(let i = 1; i < 7; i++){
        var number = Math.floor(Math.random()*imageCardArray.length); 
        console.log(document.getElementById("card-" + i).innerHTML = '<img src="'+ imageCardArray[number]+'" />'); 
    }
}

function initGame() {
    playerHealthDisp = document.getElementById('player-health');
    opponentHealthDisp = document.getElementById('opponent-health');
    
    titles = document.getElementsByClassName('card-title');
    attackValues = document.getElementsByClassName('attack');
    healthValues = document.getElementsByClassName('health');
    defenseValues = document.getElementsByClassName('defense');
    imageValues = document.getElementsByClassName('card-img-top');

    for (let i = 0; i< attackValues.length; i++) {
        var attackVal = parseInt(Math.random() * 4 + 1);
        var healthVal = parseInt(Math.random() * 7 + 1);
        var defenseVal = parseInt(Math.random() * 3 + 1);

        if (i < 3) {
            opponentCardArray[i][0] = attackVal;
            opponentCardArray[i][1] = healthVal;
            opponentCardArray[i][2] = defenseVal;
            opponentCardArray[i][3] = "Opponent card number: " + i;
        }
        else {
            playerCardArray[i-3][0] = attackVal;
            playerCardArray[i-3][1] = healthVal;
            playerCardArray[i-3][2] = defenseVal;
            playerCardArray[i-3][3] = "Player card  number: " + (i-3);
            console.log("i is: " + i + " " + playerCardArray[i-3][2]);
        }
    } 

    /*for(let i = 0; i< imageValues.length; i++){
        var imageVal = parseInt(Math.random() * 5);
        imageValues[i].innerHTML = '<img src="' + imageCardArray[imageVal] + '" class="card-img-top" alt="...">';
    }*/
    addRandomCard();
    updateDisplay();
}

function updateDisplay() {
    //update player and opponent health:
    playerHealthDisp.innerHTML = "Player Health: " + playerHealth;
    opponentHealthDisp.innerHTML = "Opponent Health: " + opponentHealth;

    for (let i = 0; i< attackValues.length; i++) {
       
        if (i < 3) {
            attackValues[i].innerHTML = "Attack: " + opponentCardArray[i][0];
            healthValues[i].innerHTML = "Health: " + opponentCardArray[i][1];
            defenseValues[i].innerHTML = "Defense: " + opponentCardArray[i][2];
            titles[i].innerHTML = opponentCardArray[i][3];
            
        }
        else {
            attackValues[i].innerHTML = "Attack: " + playerCardArray[i-3][0];
            healthValues[i].innerHTML = "Health: " + playerCardArray[i-3][1]; 
            defenseValues[i].innerHTML = "Defense: " + playerCardArray[i-3][2];
            console.log("player number title: " + playerCardArray[i-3][2]);
            titles[i].innerHTML = playerCardArray[i-3][3];
        }
    } 
}
function cardDeathMatch() {
    //1. go through all player cards and all enemy cards
        for (let i = 0; i< playerCardArray.length; i++) {
            
            if(opponentCardArray[i][3] != "I'm dead" && playerCardArray[i][2] < opponentCardArray[i][0]){
                playerCardArray[i][1] -= opponentCardArray[i][0];
                playerCardArray[i][1] += playerCardArray[i][2];
            }

            if(playerCardArray[i][3] != "I'm dead" && opponentCardArray[i][2] < playerCardArray[i][0]){
                opponentCardArray[i][1] -= playerCardArray[i][0];
                opponentCardArray[i][1] += opponentCardArray[i][2];
            }
            
            if (opponentCardArray[i][1]<1) {
                if (opponentCardArray[i][3] == "I'm dead") {
                    opponentHealth -= playerCardArray[i][0];
                    opponentCardArray[i][1] = 0;
                }
                opponentCardArray[i][3] = "I'm dead";
            }
            if(playerCardArray[i][1] < 1) {
                if (playerCardArray[i][3] == "I'm dead") {
                    playerHealth -= opponentCardArray[i][0];
                    playerCardArray[i][1] = 0;
                }
                playerCardArray[i][3] = "I'm dead";
            }
            updateDisplay();
            checkGameOver();
            
        }
}

function restart(){
    playerHealth = 20;
    opponentHealth = 20;
    initGame();
}

function checkGameOver() {
    if (playerHealth < 1 && opponentHealth < 1 && alertOn) {
        alert("It was a tie");
        alertOn = false;
        gameOver = true;
    }
    else if (playerHealth < 1 && alertOn) {
        alert("You lost");
        alertOn = false;
        gameOver = true;
    }
    else if (opponentHealth < 1 && alertOn) {
        alert("You won");
        alertOn = false;
        gameOver = true;
    }
}
initGame();