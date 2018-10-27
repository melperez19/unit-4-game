$(document).ready(function () {

    var Random = Math.floor(Math.random() * 101 + 19)
    console.log(Random);
    // Selects a random number to be shown at the start of the game
    // Number should be between 19 - 120

    $('#random-number').text(Random);
    // Appending random number to the random-number id set in the HTML

    var crystal1 = Math.floor(Math.random() * 11 + 1)
    var crystal2 = Math.floor(Math.random() * 11 + 1)
    var crystal3 = Math.floor(Math.random() * 11 + 1)
    var crystal4 = Math.floor(Math.random() * 11 + 1)
    // Setting up random numbers for each crystal
    // Random number has to be between 1 - 12
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
    var totalScore = 0;
    var Wins = 0;
    var Losses = 0;

    //  Declaring variables for adding up the scores
    $('#total-wins').text(Wins);
    $('#total-losses').text(Losses);

    //resets the game
    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#random-number').text(Random);
        crystal1 = Math.floor(Math.random() * 11 + 1);
        crystal2 = Math.floor(Math.random() * 11 + 1);
        crystal3 = Math.floor(Math.random() * 11 + 1);
        crystal4 = Math.floor(Math.random() * 11 + 1);
        totalScore = 0;
        $('#running-score-counter').text(totalScore);
    }


//set up the click functions for each crystal
$('#diamond').on('click', function () {
    totalScore = totalScore + crystal1;
    console.log("New totalScore= " + totalScore);
    $('#running-score-counter').text(totalScore);
    //sets win/lose conditions
    if (totalScore == Random) {
        Wins++;
        $('#total-wins').text(Wins);
        reset();
    }
    else if (totalScore > Random) {
        Losses++;
        $('#total-losses').text(Losses);
        reset();
    }
})

$('#blue').on('click', function () {
    totalScore = totalScore + crystal2;
    console.log("New totalScore= " + totalScore);
    $('#running-score-counter').text(totalScore);
    //sets win/lose conditions
    if (totalScore == Random) {
        Wins++;
        $('#total-wins').text(Wins);
        reset();
    }
    else if (totalScore > Random) {
        Losses++;
        $('#total-losses').text(Losses);
        reset();
    }
})

$('#green-crystal').on('click', function () {
    totalScore = totalScore + crystal3;
    console.log("New totalScore= " + totalScore);
    $('#running-score-counter').text(totalScore);
    //sets win/lose conditions
    if (totalScore == Random) {
        Wins++;
        $('#total-wins').text(Wins);
        reset();
    }
    else if (totalScore > Random) {
        Losses++;
        $('#total-losses').text(Losses);
        reset();
    }
})

$('#morganite-crystal').on('click', function () {
    totalScore = totalScore + crystal4;
    console.log("New totalScore= " + totalScore);
    $('#running-score-counter').text(totalScore);
    //sets win/lose conditions
    if (totalScore == Random) {
        Wins++;
        $('#total-wins').text(Wins);
        reset();
    }
    else if (totalScore > Random) {
        Losses++;
        $('#total-losses').text(Losses);
        reset();
    }
}) 
})