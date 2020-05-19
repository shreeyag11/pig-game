var scores, roundScore, totalDice,  dice_1, dice_2, activePlayer, gamePlaying, winningScore;

init();

document.querySelector('.btn-roll').addEventListener('click', async function() {
    if(gamePlaying){
        dice_1 = Math.floor(Math.random() * 6) + 1;
        dice_2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById('image_1').src = "img/dice-"+dice_1+".png";
        document.getElementById('image_2').src = "img/dice-"+dice_2+".png";
        document.querySelector('.dice_1').style.display = 'block';
        document.querySelector('.dice_2').style.display = 'block';
        if(dice_1 === 6 && dice_2 === 6) {
            await delay(700);
            scores[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).textContent = '0';
            nextPlayer();
        }
        if(dice_1 === 1 || dice_2 === 1){
            await delay(700);
            nextPlayer();
        }
        else 
        {
            roundScore += (dice_1 + dice_2) ;
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
            document.querySelector('.dice_1').style.display = 'none';
            document.querySelector('.dice_2').style.display = 'none';
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
    document.querySelector('.dice_1').style.display = 'none';
    document.querySelector('.dice_2').style.display = 'none';
    dice_1 = 0;
    dice_2 = 0;
    (activePlayer===0) ? activePlayer=1 : activePlayer=0;
}

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice_1').style.display = 'none';
    document.querySelector('.dice_2').style.display = 'none';
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

const delay = ms => new Promise(res => setTimeout(res, ms));

