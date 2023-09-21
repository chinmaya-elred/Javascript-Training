document.getElementById('clickMe').addEventListener('click', function() {
    const numbers = [1, 2, 3, 4, 5];
    const sum = _.sum(numbers);

    alert(`The sum of the numbers is: ${sum}`);
  });