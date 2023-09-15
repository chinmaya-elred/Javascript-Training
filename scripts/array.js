function showFruits() {
    let fruits = ["apple", "banana", "cherry", "date"];
    let message = "Fruits:\n";

    for (let i = 0; i < fruits.length; i++) {
        message += (i + 1) + ". " + fruits[i] + "\n";
    }

    alert(message);
}

let myArray = [1, 2, 3, 4, 5];

function pushElement() {
    let element = prompt("Enter the element to push:");
    myArray.push(element);
    updateDisplay();
}

function popElement() {
    myArray.pop();
    updateDisplay();
}

function shiftElement() {
    myArray.shift();
    updateDisplay();
}

function unshiftElement() {
    let element = prompt("Enter the element to unshift:");
    myArray.unshift(element);
    updateDisplay();
}

function spliceElement() {
    let index = prompt("Enter the index to start splicing:");
    let numToDelete = prompt("Enter the number of elements to delete:");
    let elementsToAdd = prompt("Enter elements to add (comma-separated):").split(',');
    myArray.splice(index, numToDelete, ...elementsToAdd);
    updateDisplay();
}

function sliceElement() {
    let start = prompt("Enter the start index for slicing:");
    let end = prompt("Enter the end index for slicing:");
    let newArray = myArray.slice(start, end);
    alert("Sliced array: " + newArray);
}
 
function indexOfElement() {
    let element = prompt("Enter the element to find:");
    let index = myArray.indexOf(Number(element));
    alert("Index of " + element + ": " + index);
}

function findElement() {
    let element = prompt("Enter the element to find:");
    let foundElement = myArray.find(item => item === Number(element));
    alert("Found element: " + foundElement);
}

function findIndexElement() {
    let element = prompt("Enter the element to find:");
    let index = myArray.findIndex(item => item === Number(element));
    alert("Index of " + element + ": " + index);
}

function mapElements() {
    let mappedArray = myArray.map(element => element * 2);
    alert("Mapped array: " + mappedArray);
}

function sortElements() {
    myArray.sort((a, b) => a - b);
    updateDisplay();
}

function reverseElements() {
    myArray.reverse();
    updateDisplay();
}

function filterElements() {
    let filteredArray = myArray.filter(element => element % 2 === 0);
    alert("Filtered array: " + filteredArray);
}

function splitString() {
    let stringToSplit = prompt("Enter a string to split:");
    let splitArray = stringToSplit.split(' ');
    alert("Split array: " + splitArray);
}

function joinArray() {
    let arrayToJoin = prompt("Enter elements to join (comma-separated):").split(',');
    let joinedString = arrayToJoin.join(' ');
    alert("Joined string: " + joinedString);
}

function spreadOperator() {
    let originalArray = [1, 2, 3];
    let newArray = [...originalArray, 4, 5, 6];
    alert("New array after spreading: " + newArray);
}

function arrayDestructuring() {
    let [a, b, c] = [10, 20, 30];
    alert(`a: ${a}, b: ${b}, c: ${c}`);
}

function updateDisplay() {
    document.getElementById("resultArrayMethods").innerHTML = "<h2>Updated Array: " + myArray + "</h2>";
}