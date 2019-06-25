/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/**
 * creates a new games state and initializes it on click
 */
const game = new Game([new Phrase('where there is a will there are five hundred relatives'), new Phrase('a clear conscience is usually the sign of a bad memory'), new Phrase('the gene pool could use a little chlorine'), new Phrase('death is hereditary'), new Phrase('constipated people dont give a crap')]);

document.getElementById('btn__reset').addEventListener('click', (e) => {
    game.startGame(); 
})


/**
 * add eventlisteners
 */
const buttons = document.getElementsByClassName('key'); 
for (let i = 0; i < buttons.length; i++) {
    const key = buttons[i];
    key.addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    });

    
} 

document.addEventListener('keyup', (e)=>{
    game.handleKeyboardInteraction(e.key);
});