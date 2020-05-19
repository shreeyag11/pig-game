var scores, roundScore, dice, activePlayer, gamePlaying, prevDice, winningScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        prevDice = dice;
        dice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('image').src = "img/dice-"+dice+".png";
        document.querySelector('.dice').style.display = 'block';
        if(prevDice === 6 && dice === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).textContent = '0';
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
        if(scores[activePlayer] >= winningScore){
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
    document.querySelector("#current-"+activePlayer).textContent = roundScore;
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

document.getElementById('limit-btn').addEventListener('click', function() {
    winningScore = document.getElementById('limit').value;
    document.querySelector('.btn-new').classList.remove('hide');
    document.querySelector('.btn-roll').classList.remove('hide');
    document.querySelector('.btn-hold').classList.remove('hide');
    document.querySelectorAll('.dull').forEach(function(cls) {
        cls.classList.remove('dull');
    })
    document.getElementById('title').classList.add('hide');
    document.querySelector('#limit-btn').style.display = 'none';
    document.querySelector('#limit').style.display = 'none';
});
