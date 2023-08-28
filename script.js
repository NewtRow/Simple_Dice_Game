document.addEventListener('DOMContentLoaded', () => {
    const diceResult = document.getElementById('rollResult');
    const rollResult = document.getElementById('rollButton');

    rollButton.addEventListener('click', () => {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        diceResult.textContent = `You rolled: ${randomValue}`;
    });
});