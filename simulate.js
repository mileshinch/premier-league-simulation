// Set the probabilities of winning, losing and drawing
const arsenalWinProb = 0.68;
const arsenalDrawProb = 0.2;

const liverpoolWinProb = 0.65;
const liverpoolDrawProb = 0.2;

let arsenalLeagueWinners = 0;
let liverpoolLeagueWinners = 0;

let probArsenalWinLeague;

// Declare variables for points tallies
let arsenalPoints = 22;
let liverpoolPoints = 31;

// play a round of games
function playRound() {
    let randomNumber = Math.random()
    // console.log(randomNumber);
    if (randomNumber < arsenalWinProb) {
        // console.log("Arsenal win!")
        arsenalPoints += 3
    } else if ((randomNumber > arsenalWinProb) && (randomNumber < arsenalWinProb + arsenalDrawProb)) {
        // console.log("Arsenal draw.")
        arsenalPoints += 1
    } else {
        // console.log("Arsenal lose")
    }
    // return arsenalPoints;
    let anotherRandomNumber = Math.random()
    // console.log(anotherRandomNumber);
    if (anotherRandomNumber < liverpoolWinProb) {
        // console.log("Liverpool win!")
        liverpoolPoints += 3
    } else if ((anotherRandomNumber > liverpoolWinProb) && (anotherRandomNumber < liverpoolWinProb + liverpoolDrawProb)) {
        // console.log("Liverpool draw.")
        liverpoolPoints += 1
    } else {
        // console.log("Liverpool lose")
    }
}

// play the season except the liverpool vs arsenal head to head
function playRounds() {
    
    const rounds = 25;

    for (let i = 0; i < rounds; i++) {
        // console.log("This is round " + i);
        playRound();
    }

    console.log("Arsenal have " + arsenalPoints + " points");
    console.log("Liverpool have " + liverpoolPoints + " points");
}

function playHeadToHead() {
    // console.log("This is round 26")
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        console.log("Arsenal win the head to head!")
        arsenalPoints += 3;
    } else if ((randomNumber > 0.33) && (randomNumber < 0.66)) {
        console.log("The head to head is a draw.")
        arsenalPoints += 1;
        liverpoolPoints += 1;
    } else {
        console.log("Liverpool win the head to head :-(")
        liverpoolPoints += 3;
    }
}

function playSeason() {
    console.log("new season starts")
    console.log("Arsenal have " + arsenalPoints + " points","Liverpool have " + liverpoolPoints + " points");
    playRounds();
    console.log("Arsenal have " + arsenalPoints + " points","Liverpool have " + liverpoolPoints + " points");
    console.log("Now let's play the head to head");
    playHeadToHead();
    console.log("The final results are: Arsenal on " + arsenalPoints + " points");
    console.log("The final results are: Liverpool have " + liverpoolPoints + " points");

    if (arsenalPoints > liverpoolPoints) {
        console.log("Wow arsenal managed to close the 9 point gap and win the league");
        arsenalLeagueWinners += 1
    } else if (arsenalPoints < liverpoolPoints) {
        console.log("Arsenal didn't catch Liverpool");
        liverpoolLeagueWinners += 1
    } else {
        console.log("They ended level on points. Let's toss a coin");
        if (Math.random() < 0.5) {
            console.log("They ended level on points and Arsenal win on goal difference");
            arsenalLeagueWinners += 1;
        } else {
            console.log("They ended level on points and Liverpool win on goal difference");
            liverpoolLeagueWinners += 1;
        }
    }

    console.log("Arsenal have " + arsenalLeagueWinners + " league titles");
    console.log("Liverpool have " + liverpoolLeagueWinners + " league titles");
}

// playFullSeason();

function simulateSeason() {

    const simulations = 1000;

    for (i = 1; i < simulations + 1; i++) {
        console.log("This is simulation number " + i);
        arsenalPoints = 22;
        liverpoolPoints = 31;
        console.log(arsenalPoints,liverpoolPoints);
        console.log(arsenalLeagueWinners,liverpoolLeagueWinners);
        playSeason();
        console.log(arsenalPoints,liverpoolPoints);
        console.log(arsenalLeagueWinners,liverpoolLeagueWinners);
        console.log("simulation " + i + " has finished")
    }

    

    console.log("Arsenal won the league " + arsenalLeagueWinners + " times");
    console.log("Liverpool won the league " + liverpoolLeagueWinners + " times");
    
    probArsenalWinLeague = arsenalLeagueWinners / simulations;

    console.log("The probability of Arsenal winning the league is " + probArsenalWinLeague)

}

// simulateSeason();

// let btn = document.getElementById("btn")

function displayResults() {
    document.getElementById("results-div").style.display = "block";
    document.getElementById("result").innerHTML = probArsenalWinLeague;
}

// Apply the addEventListener method
btn.addEventListener("click", simulateSeason)
btn1.addEventListener("click", displayResults)
// btn.addEventListener("click", displayResults)
    
// document.getElementById("result").innerHTML = probArsenalWinLeague;

document.getElementById("results-div").style.display ="none";



