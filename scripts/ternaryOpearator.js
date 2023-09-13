function checkVotingAge() {
    let age = parseInt(document.getElementById('ageInput').value);
    let resultElement = document.getElementById('resultAge');

    let message = (age >= 18) ? 'You are eligible to vote!' : 'You are not yet eligible to vote.';

    resultElement.innerText = message;
}