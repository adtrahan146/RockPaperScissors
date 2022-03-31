let games = 3;
let playerWins = 0;
let playerLosses = 0;
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

function throwHand(hand){
    runAnimation();

    const guess = getHand(hand);
    const opponentHand = randomHand();
    console.log(guess);
    console.log(opponentHand);

    if(guess == opponentHand){
        printResult(2, guess, opponentHand);

    }else{
        switch(opponentHand){
            case ROCK: 
                if(guess == PAPER){
                    playerWins++;
                    games--;
                    printRoundWin(guess, opponentHand);
                }else if(guess == SCISSORS){
                    playerLosses++;
                    games--;
                    printRoundLoss(guess, opponentHand);                    
                }
                break;
            case PAPER:
                if(guess == SCISSORS){
                    playerWins++;
                    games--;
                    printRoundWin(guess, opponentHand);   
                }else if(guess == ROCK){
                    playerLosses++;
                    games--;
                    printRoundLoss(guess, opponentHand);   
                }
                break;
            case SCISSORS:
                if(guess == ROCK){
                    playerWins++;
                    games--;
                    printRoundWin(guess, opponentHand);   
                }else if(guess == PAPER){
                    playerLosses++;
                    games--;
                    printRoundLoss(guess, opponentHand);   
                }
                break;
        }
    }
    if(games <= 1 && playerWins == 2){
        printResult(1, guess, opponentHand);
        updateView();
    }else if( games <= 1 && playerLosses == 2){
        printResult(0, guess, opponentHand);
        updateView();
    }else{
        printGamesLeft(games, guess, opponentHand);   
    }
}

function getHand(hand){
    const guess = hand;
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

function replay(){
    games = 3;
    playerLosses = 0;
    playerWins = 0;
    playerSelection.innerHTML = '';
    opponentSelection.innerHTML = '';
    document.getElementById('announcements-text').innerHTML = '';
}

