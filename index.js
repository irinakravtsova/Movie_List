// const movies = [];

const movieInputNode = document.querySelector(".js-inputMovie");
const btnNewMovieNode = document.querySelector(".js-btn-new-movie");
const moviesListNode = document.querySelector(".js-movies-list");
const btnDeleteMovieNode = document.querySelector(".js-btn-delete-movie");


const btnDeleteMovie =  document.getElementById('btn-delete_movie');

const moviesFromLStorage = JSON.parse(localStorage.getItem('movies'));
let movies = [];
if (Array.isArray(moviesFromLStorage)) {
  movies = moviesFromLStorage;
}
renderMovies();


function getMovieFromUser() {
  const movieInput = movieInputNode.value;
  const movie = movieInput.trim();
  return movie; 
}

function addMovie(movie) {
  movies.push(movie);
 
 }
function getMovies() {
  return movies;
}
function saveMoviesLocalStorage() {
  localStorage.setItem('movies', JSON.stringify(movies)); 
}
function renderMovies() {
  const movies = getMovies();
  let movieHTML = '';
  movies.forEach(movie =>  {
    movieHTML += `
     <li id='movie' class="movie" >
      <div class="movie-chek movie-chek_close" id="movie_chek"></div>
      <p class="js-movies-list movie-name" >${movie}</p>
      <button id='btmDelete' class="btn-delete-movie"><img src="крестик.svg" alt="">  </button>
     </li>
    `
  });
  moviesListNode.innerHTML = movieHTML;
   btnDeleteMovie.addEventListener('click', deleteMovieHandler);
 }
function clearInput() {
  movieInputNode.value = '';
 }

function addMovieHandler() {
  const movieFromUse = getMovieFromUser();
  addMovie(movieFromUse);
  saveMoviesLocalStorage();
  renderMovies();
  clearInput();
 
 }

function watchedMovieHandler(event) {
  if (event.target.closest('.movies-list')) {
    alert('нажал')
  
    renderMovies();
   
  }
 }
const deleteMovieNode =document.getElementById('btmDelete');
const movieNode = document.getElementById("movie");

function deleteMovieHandler() {
  alert('нажал')
this.remove();
}
console.log(movieNode);
//  function deleteMovieHandler(event) {
//   if (event.target.closest('.movies-list')) {
//     alert('нажал')


//     renderMovies();
   
//   }
// }  

// function selectedMovieHandler(event) {
//   if (event.target.closest('.movie')) {
 
//   movieNode.className = 'movie_close'

  
// }
// }
 

btnNewMovieNode.addEventListener('click', addMovieHandler);


// moviesListNode.addEventListener('click', selectedMovieHandler)

















 


