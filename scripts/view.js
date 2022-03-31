let announcements = document.getElementById('announcements');
let playerSelection = document.getElementById('player-selection');
let opponentSelection = document.getElementById('opponent-selection');

function printRoundLoss(guess, opponentHand){
    document.getElementById('announcements-text').innerHTML = (`
        <h4>Player lost match.</h4>
    `);
    displayHands(guess, opponentHand);
}

function printRoundWin(guess, opponentHand){
    document.getElementById('announcements-text').innerHTML = (`
        <h4>Player wins match!</h4>
    `);
    displayHands(guess, opponentHand);
}

function printGamesLeft(games, guess, opponentHand){
    document.getElementById('announcements-text').innerHTML += (`
        <h3>${games} game(s) left.</h3>
    `);
    displayHands(guess, opponentHand);
}

function printResult(result, guess, opponentHand){
    if(result > 1){         //TIE==2
        displayHands(guess, opponentHand);
    }else if(result > 0){   //WIN==1
        displayHands(guess, opponentHand)
        document.getElementById('announcements-text').innerHTML = (`<h3>Player wins game!</h3>`);
    }else{                  //LOSS==0
        displayHands(guess, opponentHand)
        document.getElementById('announcements-text').innerHTML = (`<h3>Player loses game...</h3>`);
    }
}


function displayHands(guess, opponentHand){
    if(guess == 'rock'){
        playerSelection.innerHTML = (`
            <h4> Your Selection: </h4>
            <img src="assets/rock.jpg" class="animate__animated animate__backInLeft animate__delay-3s" width="100" id="player-selection"> </img>
        `);
    }else if(guess == 'paper'){
        playerSelection.innerHTML = (`
            <h4> Your Selection: </h4>
            <img src="assets/paper.jpg" class="animate__animated animate__backInLeft animate__delay-3s" width="100" id="player-selection"> </img>
        `);
    }else{
        playerSelection.innerHTML = (`
            <h4> Your Selection: </h4>
            <img src="assets/scissors.jpg" class="animate__animated animate__backInLeft animate__delay-3s" width="100" id="player-selection"> </img>
        `);
    }

    if(opponentHand == 'rock'){
        opponentSelection.innerHTML = (`
            <h4> Opponent's Selection: </h4>
            <img src="assets/rock.jpg" class="animate__animated animate__backInRight animate__delay-3s" width="100" id="player-selection"> </img>
        `);
    }else if(opponentHand == 'paper'){
        opponentSelection.innerHTML = (`
            <h4> Opponent's Selection: </h4>
            <img src="assets/paper.jpg" class="animate__animated animate__backInRight animate__delay-3s" width="100" id="player-selection"> </img>
        `);
    }else{
        opponentSelection.innerHTML = (`
            <h4> Opponent's Selection: </h4>
            <img src="assets/scissors.jpg" class="animate__animated animate__backInRight animate__delay-3s" width="100" id="player-selection"> </img>
        `);
    }
}

function runAnimation(){
    document.getElementById('intro-div').innerHTML = (`    
        <p id="rock-text" class="animate__animated animate__slideInLeft"></p>
        <p id="paper-text" class="animate__animated animate__slideInRight animate__delay-1s"></p>
        <p id="scissors-text" class="animate__animated animate__slideInLeft animate__delay-2s"></p>
        <p id="shoot-text" class="animate__animated animate__slideInRight animate__delay-3s"></p>
    `);
    document.getElementById('wrapper-div').className = (`wrapper`);
    document.getElementById('rock-text').innerHTML = (`Rock`);
    document.getElementById('paper-text').innerHTML = (`Paper`);
    document.getElementById('scissors-text').innerHTML = (`Scissors`);
    document.getElementById('shoot-text').innerHTML = (`Shoot!`);
}

function updateView(){
    document.getElementById('announcements-text').innerHTML += (`
        <img id="replay-button" width="100" height="50" src="assets/start.png">
    `);
    document.getElementById('replay-button').addEventListener('click', replay);
}