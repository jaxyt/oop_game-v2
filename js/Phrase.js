/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase){
        this.phrase = phrase.toLowerCase();
     }


    /**
     * Creates game boxes to display on screen and appends them to the game scene 
     */
    addPhraseToDisplay(){
        const phraseBoard = document.getElementById('phrase').firstElementChild;
        for (let i = 0; i < this.phrase.length; i++) {
            const letter = this.phrase[i];
            const childLetter = document.createElement('li');

            phraseBoard.appendChild(childLetter);

            if (letter !== ' ') {
                childLetter.className = `hide letter ${letter}`;
            } else if (letter === ' ') {
                childLetter.className = `space`;
            }

            childLetter.textContent = letter; 
        }
    }


    /**
     * Attempts to find a given letter within the current phrase
     * @param {string} letter 
     */
    checkLetter(letter){
        let inPhrase = false;
        for (let i = 0; i < this.phrase.length; i++) {
            let character = this.phrase[i];
            if (character === letter) {
                inPhrase = true;
                break;
            }
        }
        return inPhrase;
    }

    /**
     * Reveals all matching letters on the game scene display
     * @param {string} letter 
     */
    showMatchedLetter(letter){
        let phraseSet = document.getElementById('phrase').firstElementChild.children;
        for (let i = 0; i < phraseSet.length; i++) {
            const match = phraseSet[i];
            if (letter === match.textContent) {
                match.className = `show letter ${letter}`;
            }
        }
    }
 }