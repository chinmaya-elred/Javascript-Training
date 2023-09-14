const addMovieContainer = document.getElementById('add-container');
const startAddMovieButton = document.getElementById('add-movie-btn');
const overlay = document.getElementById('overlay');
const cancelAddMovieButton = addMovieContainer.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieContainer.querySelectorAll('.container__content input');
const entrySection = document.getElementById('entry-section');
const deleteMovieContainer = document.getElementById('delete-container');
const movieList = document.getElementById('movie-ul');

const movies = [];

const toggleOverlay = () => {
  overlay.classList.toggle('visible');
};

const updateUI = () => {
  if (movies.length === 0) {
    entrySection.style.display = 'block';
  } else {
    entrySection.style.display = 'none';
  }
};

const closeMovieDeletionContainer = () => {
  toggleOverlay();
  deleteMovieContainer.classList.remove('visible');
};

const deleteMovieHandler = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listItem = document.getElementById(movieId);
  listItem.remove();
  closeMovieDeletionContainer();
  updateUI();
};

const startDeleteMovieHandler = movieId => {
  deleteMovieContainer.classList.add('visible');
  toggleOverlay();

  const cancelDeletionButton = deleteMovieContainer.querySelector('.btn--passive');
  let confirmDeletionButton = deleteMovieContainer.querySelector('.btn--danger');

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  confirmDeletionButton = deleteMovieContainer.querySelector('.btn--danger');

  cancelDeletionButton.removeEventListener('click', closeMovieDeletionContainer);

  cancelDeletionButton.addEventListener('click', closeMovieDeletionContainer);
  confirmDeletionButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'container__element';
  newMovieElement.id = id;
  newMovieElement.innerHTML = `
    <div class="container__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="container__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id)
  );
  movieList.appendChild(newMovieElement);
};

const closeMovieContainer = () => {
  addMovieContainer.classList.remove('visible');
};

const showMovieContainer = () => {
  addMovieContainer.classList.add('visible');
  toggleOverlay();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieContainer();
  toggleOverlay();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieContainer();
  toggleOverlay();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const overlayClickHandler = () => {
  closeMovieContainer();
  closeMovieDeletionContainer();
  clearMovieInput();
};

startAddMovieButton.addEventListener('click', showMovieContainer);
overlay.addEventListener('click', overlayClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
