/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let newGame;
const key = document.getElementsByClassName("key");

// START GAME, NEW INSTANCE OF GAME
btn__reset.addEventListener("click", () => {
	for (var i = 0; i < key.length; i++) {
        key[i].className = "key";
        key[i].disabled = false;
    }
    newGame = new Game(0, phrases, null);
    newGame.startGame()
});


//  CLICK EVENT FOR KEYBOARD
qwerty.addEventListener("click", (event) => {

    if (event.target.tagName == "BUTTON") {

        // DISABVLE BUTTON
        event.target.disabled = true;

        if (newGame.handleInteraction(event.target.textContent)) {
            // ADD CLASS
            if (!newGame.checkForWin()) {
                event.target.className += " chosen";
            }
        } else {
            // ADD CLASS
            if (!newGame.gameOver()) {
                event.target.className += " wrong";
            }
        }
    }
})

document.addEventListener("keyup", (event) => {
    let getBtn;

    console.log(event.key)

    if (inGame) {

        // DISABVLE BUTTON
        for (var i = 0; i < key.length; i++) {
            if (key[i].textContent == event.key) {
                
                getBtn = key[i];
            }
        }

        if (newGame.handleInteraction(event.key, getBtn)) {
            // ADD CLASS
            if (!newGame.checkForWin()) {
                getBtn.className += " chosen";
            }
        } else {
            // ADD CLASS
            if (!newGame.gameOver()) {
                getBtn.className += " wrong";
            }
        }
        getBtn.disabled = true;
    }
})


function reset() {

    ul.innerHTML = "";

    for (var i = 0; i < scoreboard.length; i++) {
        scoreboard[i].children[0].setAttribute("src", "images/liveHeart.png")
    }

}