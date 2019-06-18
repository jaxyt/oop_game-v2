/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game([new Phrase('phrase test one'), new Phrase('how are you'), new Phrase('born with his ass turned towards the moon'), new Phrase('hello'), new Phrase('good bye')]);

document.getElementById('btn__reset').addEventListener('click', (e) => {
    game.startGame();
    const buttons = document.getElementsByClassName('key');
    for (let i = 0; i < buttons.length; i++) {
        const key = buttons[i];
        key.addEventListener('click', (e) => {
            game.handleInteraction(e.target);
        });
    }     
})