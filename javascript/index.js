//Creates a random number and selects a rrandom image from the images folder !
function randomNumber() {

    let rndImg = new Array('images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png');
    let x = Math.floor(Math.random() * rndImg.length);
    document.getElementById('img1').setAttribute('src', rndImg[x])
    x = x + 1
    return x
}

//Creates a random number and selects a rrandom image from the images folder !
function randomNumber2() {

    let rndImg2 = new Array('images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png');
    let y = Math.floor(Math.random() * rndImg2.length);
    document.getElementById('img2').setAttribute('src', rndImg2[y])
    y = y + 1
    return y
}

//Takes the 2 function above as parameters and displays result
function winner(randomNumber, randomNumber2) {

    if (randomNumber > randomNumber2) {
        document.getElementById('title').innerHTML = '🥇 Player 1 Wins'; // Player 1 wins case
    } else if (randomNumber < randomNumber2) {
        document.getElementById('title').innerHTML = 'Player 2 Wins 🥈'; // Player 2 wins case
    } else {
        document.getElementById('title').innerHTML = '🥊 Draw 🥊'; // Draw case
    }
}

//Calling the functions - connection with HTML
function roll() {
    winner(randomNumber(), randomNumber2())
}
