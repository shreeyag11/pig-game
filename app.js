var scores, roundScore, dice, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


function rollDice() {
    dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('image').src = "img/dice-"+dice+".png";
    if(dice == 1){
        roundScore = 0;
        document.getElementById("current-"+activePlayer).innerHTML = roundScore;
        console.log("before"+activePlayer);
        (activePlayer===0) ? activePlayer=1 : activePlayer=0;
        console.log("after"+activePlayer);
    }
    else 
    {
        roundScore += dice;
        document.getElementById("current-"+activePlayer).innerHTML = roundScore;
    }
}


function newGame() {
    activePlayer = 0;
    roundScore = 0;
    scores = [0,0];
    document.getElementById("score-0").innerHTML = 0;
    document.getElementById("score-1").innerHTML = 0;
    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("current-1").innerHTML = 0;
    document.getElementById('image').src = "img/dice-5.png";

}

function holdScore() {
    scores[activePlayer] += roundScore;
    document.getElementById("score-"+activePlayer).innerHTML = scores[activePlayer];
    roundScore = 0;
    document.getElementById("current-"+activePlayer).innerHTML = roundScore;
    if(scores[activePlayer] >= 100)
        document.getElementById("name-"+activePlayer).innerHTML = "Winner!";
    (activePlayer===0)?activePlayer=1:activePlayer=0;
    console.log(activePlayer);
}