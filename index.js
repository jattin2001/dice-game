// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const gameAudio = new Audio(`audio/1.mp3`);
const gameResultAudio = new Audio(`audio/2.mp3`);
const rollDiceClickedAudio = new Audio(`audio/3.mp3`);

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}


/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    rollDiceClickedAudio.play();
    const randomNumber = Math.floor(Math.random() * 6) + 1
    if (player1Turn) {
        player2Dice.classList.remove("animation");
        player1Dice.classList.add("animation");
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.innerHTML = `<img class="dice-img" src="images/${randomNumber}.png" alt=${randomNumber}</img>`
        // player1Dice.textContent = randomNumber;
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player1Dice.classList.remove("animation");
        player2Dice.classList.add("animation");
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.innerHTML = `<img class="dice-img" src="images/${randomNumber}.png" alt=${randomNumber}</img>`
        player2Dice.textContent = randomNumber;
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        gameResultAudio.play();
        message.textContent = "Player 1 Won 🥳"
        start();
        stop();
        showResetButton()
    }  else if (player2Score >= 20) {
        gameResultAudio.play();
        message.textContent = "Player 2 Won 🎉"
        start();
        stop();
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    gameAudio.play();
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}


        // for starting the confetti 

        const start = () => {
            setTimeout(function() {
                confetti.start()
            }, 100); 
        };

        //  for stopping the confetti 

        const stop = () => {
            setTimeout(function() {
                confetti.stop()
            }, 2000); 
        };
