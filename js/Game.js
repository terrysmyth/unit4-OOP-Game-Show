/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let newPhrase;
let inGame = false;

const overlay = document.querySelector("#overlay");
const btn__reset = document.querySelector("#btn__reset");
const scoreboard = document.querySelector("#scoreboard ol").children;

// WIN LOSE MESSAGE
const gameOverMessage = document.querySelector("#game-over-message");

// KEYBORAD
const qwerty = document.querySelector("#qwerty");

class Game {

    constructor(missed = 0, phrases, activePhrase = null) {
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase

    }

    startGame() {
        inGame = true;
        overlay.style.display = "none";

        let randomPhrase = Math.random() * this.phrases.length;
        this.activePhrase = this.getRandomPhrase(randomPhrase)

        newPhrase = new Phrase(this.activePhrase)
        newPhrase.addPhraseToDisplay(newPhrase.phrase)

    }

    getRandomPhrase(phrase) {
    	const getRandom = this.phrases[Math.floor(phrase)];
    	return getRandom;
    }

    handleInteraction(letter, btn = {disabled:false}) {
    	// CHECK IF THE L
        console.log(btn.disabled )

    	if ( newPhrase.checkLetter(letter, newPhrase.phrase) ) {
            // this.checkForWin();
    		return true;
    	} 
        if (btn.disabled == false) {
            this.removeLife()
            return false;
        }
    	
    }

    removeLife() {
    	// GET HEART IMG AND REPLACE
    	const getImg = scoreboard[this.missed].children[0];
    	getImg.setAttribute("src","images/lostHeart.png");

    	// ADD TO MISSED COUNT AND TRIGGER GAME OVER
    	this.missed++;
        this.gameOver();

    }

    checkForWin() {
        let shownLetters = ul.children;
        let win = false;
        for (var i = 0; i < shownLetters.length; i++) {
            if ( shownLetters[i].className.includes("hide") ) {
                console.log("still some letters to go")
                return false;
            } else {
                win = true;
            }
        }
        inGame = false;
        overlay.style.display = "flex";
    	overlay.className = "win";
    	gameOverMessage.textContent = `"${newPhrase.phrase}": You Won!`
        reset();
        return true;
    }

    gameOver() {
        if (this.missed == 5) {
            inGame = false;
            overlay.style.display = "flex";
            overlay.className = "lose";
            gameOverMessage.textContent = `"${newPhrase.phrase}": You Lost...`
            reset();
            return true;
        } 
        return false;
    }


}
const phrases = [
    "helloo", 
    "this is cool", 
    "good game", 
    "try harder", 
    "oother", 
    "something else", 
    "what the hell", 
    "eat my shorts", 
    "silly billy", 
    "in and out",
    ]








