
function initControls(){
    const rock = document.getElementById('guess-rock');
    const paper = document.getElementById('guess-paper');
    const scissors = document.getElementById('guess-scissors');
    const ready = document.getElementById('start-button');
    
    ready.addEventListener('click', readyUp);
    rock.addEventListener('click', buttonEvent('rock'));
    paper.addEventListener('click', buttonEvent('paper'));
    scissors.addEventListener('click', buttonEvent('scissors'));
}

function buttonEvent(selection){
    return function(){
        announcements.innerHTML = (`
            <p class="animate__animated animate__backInUp animate__delay-4s" id="announcements-text">
            </p>
        `);
        const hand = selection;
        throwHand(hand);
    }
}

function readyUp(){
    document.getElementById('game-div').style.visibility = 'visible';
    document.getElementById('intro-div').innerHTML = (`
        <div></div>
    `);
}

initControls();
