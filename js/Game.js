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

    handleInteraction(){

    }

    removeLife(){
        const lives = document.getElementById('scoreboard').firstElementChild;
        lives.removeChild(lives.firstElementChild);
    }

    checkForWin(){

    }

    gameOver() {
        
    }
 }