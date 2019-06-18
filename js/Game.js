/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
    constructor(phrases){
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
    }

    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase(){
        let randPhrase = Math.floor(Math.random()*5);
        return this.phrases[randPhrase];
    }

    handleInteraction(target){
        target.disabled = true;
        if (this.activePhrase.checkLetter(target.innerText)) {
            target.className = 'key chosen';
            this.activePhrase.showMatchedLetter(target.innerText)
            if (this.checkForWin()) {
                this.gameOver('win');
            }
        } else {
            target.className = 'key wrong';
            this.removeLife();
        }
    }

    removeLife(){
        const lives = document.getElementById('scoreboard').firstElementChild;
        lives.children[this.missed].firstElementChild.src = "images/lostHeart.png";
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver('lose');
        }
    }

    checkForWin(){
        let phraseSet = document.getElementById('phrase').firstElementChild.children;
        let won = true;
        for (let i = 0; i < phraseSet.length; i++) {
            const letter = phraseSet[i];
            if (letter.className !== 'space') {
                if (letter.className === `hide letter ${letter.textContent}`) {
                    won = false;
                    break;
                }
            }
            
        }
        return won;
    }

    gameOver(outcome) {
        document.getElementById('overlay').style.display = '';
        let messageSection = document.getElementById('game-over-message');
        if (outcome === 'win') {
            messageSection.innerText = 'You Won!';
            messageSection.className = 'win';
        } else if (outcome === 'lose'){
            messageSection.innerText = 'you ran out of lives';
            messageSection.className = 'lose';
        }
    }
 }