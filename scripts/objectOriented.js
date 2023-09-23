class Counter {
    constructor() {
        this.value = 0;
        this.displayElement = document.getElementById('counterDisplay');
        this.incrementButton = document.getElementById('incrementButton1');
        this.decrementButton = document.getElementById('decrementButton');

        this.incrementButton.addEventListener('click', this.increment.bind(this));
        this.decrementButton.addEventListener('click', this.decrement.bind(this));
    }

    increment() {
        this.value++;
        this.updateDisplay();
    }

    decrement() {
        this.value--;
        this.updateDisplay();
    }

    updateDisplay() {
        this.displayElement.innerText = this.value;
    }
}

const counter = new Counter();
