document.getElementById('searchButton').addEventListener('click', function() {
    var searchElement = document.getElementById('searchInput').value;
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == searchElement) {
            document.getElementById('resultComplexity').innerHTML = 'Element found at index ' + i;
            return;
        }
    }

    document.getElementById('resultComplexity').innerHTML = 'Element not found';
});
