document.getElementById("calculateButton").addEventListener("click", function() {
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }

    const result = sum(1, 2, 3, 4, 5);

    alert("The sum is: " + result);
});