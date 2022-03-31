const hand = document.getElementById('guess-text');
const submit = document.getElementById('guess-button');

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
let games = 3;
let playerWins = 0;
let playerLosses = 0;

submit.addEventListener('click', throwHand);

function throwHand(){
    const guess = getHand();
    const opponentHand = randomHand();
    
    if(guess == opponentHand){
        console.log('Tie!');
        document.getElementById('player-selection').innerHTML = (guess);
        document.getElementById('opponent-selection').innerHTML = (opponentHand);
    }else{
        switch(opponentHand){
            case ROCK: 
                if(guess == PAPER){
                    playerWins++;
                    games--;
                    document.getElementById('announcements').innerHTML += (`<h4>Player wins match!</h4>`);
                    document.getElementById('player-selection').innerHTML = (guess);
                    document.getElementById('opponent-selection').innerHTML = (opponentHand);
                    console.log('You won!');
                }else if(guess == SCISSORS){
                    playerLosses++;
                    games--;
                    document.getElementById('announcements').innerHTML += (`<h4>Player lost match.</h4>`);
                    document.getElementById('player-selection').innerHTML = (guess);
                    document.getElementById('opponent-selection').innerHTML = (opponentHand);

                    console.log('You lost.');
                }
                break;
            case PAPER:
                if(guess == SCISSORS){
                    playerWins++;
                    games--;
                    document.getElementById('announcements').innerHTML += (`<h4>Player wins match!</h4>`);
                    document.getElementById('player-selection').innerHTML = (guess);
                    document.getElementById('opponent-selection').innerHTML = (opponentHand);

                    console.log('You won!');
                }else if(guess == ROCK){
                    playerLosses++;
                    games--;
                    document.getElementById('announcements').innerHTML += (`<h4>Player lost match.</h4>`);
                    document.getElementById('player-selection').innerHTML = (guess);
                    document.getElementById('opponent-selection').innerHTML = (opponentHand);

                    console.log('You lost.');
                }
                break;
            case SCISSORS:
                if(guess == ROCK){
                    playerWins++;
                    games--;
                    document.getElementById('announcements').innerHTML += (`<h4>Player wins match!</h4>`);
                    document.getElementById('player-selection').innerHTML = (guess);
                    document.getElementById('opponent-selection').innerHTML = (opponentHand);

                    console.log('You won!');
                }else if(guess == PAPER){
                    playerLosses++;
                    games--;
                    document.getElementById('announcements').innerHTML += (`<h4>Player lost match.</h4>`);
                    document.getElementById('player-selection').innerHTML = (guess);
                    document.getElementById('opponent-selection').innerHTML = (opponentHand);

                    console.log('You lost.');
                }
                break;
        }
    }
    if(games <= 1 && playerWins == 2){
        document.getElementById('announcements').innerHTML = (`<h1>Player wins game!</h1>`);
        //reset()
    }else if( games <= 1 && playerLosses == 2){
        document.getElementById('announcements').innerHTML = (`<h1>Player loses game...</h1>`);
        //reset()
    }else{
        document.getElementById('announcements').innerHTML += (`<h3>${games} games left.</h3>`);
    }
}

function getHand(){
    const guess = hand.value;
    if(guess == ROCK){
        return ROCK;
    }else if(guess == PAPER){
        return PAPER;
    }else if(guess == SCISSORS){
        return SCISSORS;
    }
}

function randomHand(){
    const gen = Math.floor(Math.random() * 100);

    if(gen < 33){
        return ROCK;
    }else if(gen < 66){
        return PAPER;
    }else{
        return SCISSORS;
    }
}