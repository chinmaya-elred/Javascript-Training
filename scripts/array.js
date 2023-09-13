function showFruits() {
    let fruits = ["apple", "banana", "cherry", "date"];
    let message = "Fruits:\n";

    for (let i = 0; i < fruits.length; i++) {
        message += (i + 1) + ". " + fruits[i] + "\n";
    }

    alert(message);
}