let currentInput = '';
let operatorClicked = false;

function appendToDisplay(value) {
    if (operatorClicked && '+-*/'.includes(value)) {
        currentInput = currentInput.slice(0, -1) + value;
    } else {
        currentInput += value;
    }
    operatorClicked = false;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = String(result);
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput;
}

updateDisplay();
