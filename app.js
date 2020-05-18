var scores, roundScore, dice, activePlayer, gamePlaying, prevDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        prevDice = dice;
        dice = Math.floor(Math.random() * 6) + 1;
        console.log(activePlayer + " "+ prevDice+" "+dice + " "+scores);
        document.getElementById('image').src = "img/dice-"+dice+".png";
        document.querySelector('.dice').style.display = 'block';
        if(prevDice === 6 && dice === 6) {
            roundScore = 0;
            scores[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).innerHTML = '0';
            nextPlayer();
        }
        if(dice === 1){
            nextPlayer();
        }
        else 
        {
            roundScore += dice;
            document.getElementById("current-"+activePlayer).innerHTML = roundScore;
        }
}
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.getElementById("score-"+activePlayer).innerHTML = scores[activePlayer];
        if(scores[activePlayer] >= 100){
            document.getElementById("name-"+activePlayer).innerHTML = "Winner!";
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
        }
    else {
        nextPlayer();
    }
}
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    roundScore = 0;
    document.getElementById("current-"+activePlayer).innerHTML = roundScore;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    prevDice = 0;
    dice = 0;
    (activePlayer===0) ? activePlayer=1 : activePlayer=0;
}

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    prevDice = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    document.getElementById("name-0").textContent = 'Player 1';
    document.getElementById("name-1").textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
