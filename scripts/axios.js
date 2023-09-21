document.getElementById('fetchData').addEventListener('click', function() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        // Handle the successful response here
        alert(response.data[0].title)
        console.log(response.data);
      })
      .catch(function(error) {
        // Handle errors here
        console.error(error);
      });
  });