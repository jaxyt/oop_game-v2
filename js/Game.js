/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
    constructor(phrases){
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
        this.keysPressed = [];
    }

    /**
     * chooses a random phrase and displays its game boxes on screen
     */
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase(){
        let randPhrase = Math.floor(Math.random()*5);
        return this.phrases[randPhrase];
    }

    /**
     * Handles mouseclick interactions and triggers game logic
     * @param {button element} target 
     */
    handleInteraction(target){
        this.keysPressed.push(target.innerText);
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


    /**
     * Handles keyboard input and triggers game logic
     * @param {string} key 
     */
    handleKeyboardInteraction(key){
        if (this.keysPressed.find(currentKey => currentKey === key)) {
            return
        } else {
            this.keysPressed.push(key);            
        }
        const buttons = document.getElementsByClassName('key');
        let targetKey = null;
        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            if (button.textContent === key) {
                targetKey = button;
                break;
            }
        }
        
        targetKey.disabled = true;
        if (this.activePhrase.checkLetter(targetKey.innerText)) {
            targetKey.className = 'key chosen';
            this.activePhrase.showMatchedLetter(targetKey.innerText)
            if (this.checkForWin()) {
                this.gameOver('win');
            }
        } else {
            targetKey.className = 'key wrong';
            this.removeLife();
        }
    }

    /**
     * Changes a heart when a wrong answer is chosen
     */
    removeLife(){
        const lives = document.getElementById('scoreboard').firstElementChild;
        lives.children[this.missed].firstElementChild.src = "images/lostHeart.png";
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver('lose');
        }
    }


    /**
     * Scans game box elements to see if they have all been revealed
     */
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


    /**
     * Resets gamestate on a win or a loss and displays the game outcome on a banner
     * @param {string} outcome 
     */
    gameOver(outcome) {
        document.getElementById('overlay').style.display = '';
        let messageSection = document.getElementById('game-over-message');
        let phraseBoard = document.getElementById('phrase');
        let newPhrase = document.createElement('ul')
        phraseBoard.removeChild(phraseBoard.firstElementChild);
        phraseBoard.appendChild(newPhrase);
        let keys = document.getElementsByClassName('key');
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            key.className = 'key';
            key.disabled = false;
        }
        let hearts = document.getElementsByClassName('tries');
        for (let n = 0; n < hearts.length; n++) {
            const heart = hearts[n];
            heart.firstElementChild.setAttribute('src', 'images/liveHeart.png')
        }
        if (outcome === 'win') {
            messageSection.innerText = 'You Won!';
            messageSection.className = 'win';
        } else if (outcome === 'lose'){
            messageSection.innerText = 'you ran out of lives';
            messageSection.className = 'lose';
        }
        this.missed = 0;
        this.keysPressed = [];
    }
 }