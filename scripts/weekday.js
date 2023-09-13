
function getDayGreeting() {
    const dayInput = document.getElementById('dayInput').value;
    const day = parseInt(dayInput, 10);

    if (day >= 0 && day <= 6) {
        switch (day) {
            case 0:
                document.getElementById('output').textContent = "It's Sunday, time to relax!";
                break;
            case 1:
                document.getElementById('output').textContent = "Happy Monday!";
                break;
            case 2:
                document.getElementById('output').textContent = "It's Tuesday. You got this!";
                break;
            case 3:
                document.getElementById('output').textContent = "Hump day already!";
                break;
            case 4:
                document.getElementById('output').textContent = "Just one more day 'til the weekend!";
                break;
            case 5:
                document.getElementById('output').textContent = "Happy Friday!";
                break;
            case 6:
                document.getElementById('output').textContent = "Have a wonderful Saturday!";
                break;
        }
    } else {
        document.getElementById('output').textContent = "Please enter a valid day (0-6).";
    }
}