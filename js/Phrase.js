/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase){
        this.phrase = phrase.toLowerCase();
     }

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