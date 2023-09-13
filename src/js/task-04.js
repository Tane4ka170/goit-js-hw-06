const counterValueElement = document.getElementById('value');
let counterValue = 0;
function updateCounter() {
    counterValueElement.textContent = counterValue;
}

function increment() {
    counterValue++;
    updateCounter();
}

function decrement() {
    counterValue--;
    updateCounter();
}

const incrementButton = document.querySelector('[data-action="increment"]');
incrementButton.addEventListener('click', increment);

const decrementButton = document.querySelector('[data-action="decrement"]');
decrementButton.addEventListener('click', decrement);