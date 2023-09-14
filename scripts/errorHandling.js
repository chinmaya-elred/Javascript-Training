function divide(x, y) {
    try {
        if (y === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return x / y;
    } catch (error) {
        console.error("Error:", error.message);
        return "Error occurred";
    } finally {
        console.log("This code will always run");
    }
}

function performDivision() {
    let numerator = document.getElementById("numerator").value;
    let denominator = document.getElementById("denominator").value;

    let result = divide(parseFloat(numerator), parseFloat(denominator));
    console.log("Result:", result);
    document.getElementById("resultError").textContent = "Result: " + result;
}