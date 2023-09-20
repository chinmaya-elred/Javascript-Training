document.getElementById('numberButton').addEventListener('click', function() {
    const num1 = 10;
    const num2 = 5;

    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;

    document.getElementById('numberString').textContent = `
        Sum: ${sum}
        Difference: ${difference}
        Product: ${product}
        Quotient: ${quotient}
    `;
});

document.getElementById('stringButton').addEventListener('click', function() {
    const str1 = 'Hello';
    const str2 = ' World';

    const concatenation = str1 + str2;

    document.getElementById('numberString').textContent = `
        Concatenation: ${concatenation}
    `;
});


document.getElementById('regexButton').addEventListener('click', function() {
    const userInput = document.getElementById('textInput').value;
    const pattern = /[0-9]+/g; // Regular expression to match one or more digits

    const matches = userInput.match(pattern);

    if (matches) {
        document.getElementById('outputRegex').textContent = `Matches: ${matches.join(', ')}`;
    } else {
        document.getElementById('outputRegex').textContent = 'No matches found.';
    }
});