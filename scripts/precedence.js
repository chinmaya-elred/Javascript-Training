function showPrecedence() {
    let result1 = 10 + 2 * 3; //16
    let result2 = (10 + 2) * 3; //36

    let result3 = 20 / 4 + 2; //7
    let result4 = 20 / (4 + 2); // 3.3

    let result5 = 10 % 3; //1

    let result6 = 2 ** 3; //8

    let result7 = 5 - -2;//7

    let result8 = 2 + 2 * 2 ** 2; //10

    let message = `Result 1: ${result1}\n` +
        `Result 2: ${result2}\n` +
        `Result 3: ${result3}\n` +
        `Result 4: ${result4}\n` +
        `Result 5: ${result5}\n` +
        `Result 6: ${result6}\n` +
        `Result 7: ${result7}\n` +
        `Result 8: ${result8}`;

    alert(message);
}