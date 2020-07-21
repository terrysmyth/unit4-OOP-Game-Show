/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


 // CREATE PHRASE CLASS

 const ul = document.querySelector("#phrase ul")


 class Phrase {

 	constructor(phrase) {
 		this.phrase = phrase;

 	}

 	addPhraseToDisplay(phrase) {
 		ul.innerHTML =  "";
 		for (var i = 0; i < phrase.length; i++) {
 			

 			if ( phrase[i] !== " ") {
 				ul.innerHTML += `<li class="hide letter ${phrase[i]}">${phrase[i]}</li>`;
 			} else {
 				ul.innerHTML += `<li class="space"></li>`;
 			}
 		}
 	}

 	checkLetter(letter, phrase) {

 		for (var i = 0; i < phrase.length; i++) {

 			if ( phrase[i] == letter ) {

 				this.showMatchedLetter(letter);
 				return true;
 			} 
 		}
 		return false;
 	}

 	showMatchedLetter(letter) {
 		const letters = document.getElementsByClassName(letter);

 		for (var i = 0; i < letters.length; i++) {
 			letters[i].classList.remove("hide");
 			letters[i].className += (" show");
 		}

 	}

 }








