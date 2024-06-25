let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let ans = 0;

function press(key) {
    currentInput += key;
    display.innerText = currentInput;
}

function operate(op) {
    if (currentInput === '' && operator !== '') {
        operator = op;
        return;
    }

    if (currentInput !== '') {
        ans = currentInput !== '' ? parseFloat(currentInput) : ans;
        currentInput = '';
    }

    if (operator !== '' && currentInput === '') {
        calculate();
    }

    operator = op;
    display.innerText = ans;
}

function calculate() {
    if (currentInput === '' && operator !== '') {
        currentInput = ans.toString();
    }

    let result;
    console.log('---- op: ', operator);
    console.log('ans: ', ans);
    console.log('actual: ', currentInput);
    console.log('-------');
    switch (operator) {
        case '/':
            result = ans / parseFloat(currentInput);
            break;
        case '%':
            result = (ans * parseFloat(currentInput)) / 100;
            break;
        default:
            result = parseFloat(currentInput);
            break;
    }

    ans = result;
    currentInput = '';
    operator = '';
    display.innerText = ans;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    ans = 0;
    display.innerText = '';
}