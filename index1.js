// const movies = [];

const inputNode = document.querySelector(".js-inputMovie");
const btnAddNode = document.querySelector(".js-btn-new-movie");
const listlNode = document.querySelector(".js-movies-list");
const btnDeleteNode = document.getElementById(".js-btn-delete");
const btnSelectedNode = document.querySelector(".js-btn-selected");

console.log(btnDeleteNode);




const moviesFromLStorage = JSON.parse(localStorage.getItem('movies'));
let movies = [];
if (Array.isArray(moviesFromLStorage)) {
  movies = moviesFromLStorage;
}
render();


function getFromUser() {
  const movieInput = inputNode.value;
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
function deleteHandler() {
  alert('нажал')
this.remove();
}
function render() {
  const movies = getMovies();
  let movieHTML = '';
  movies.forEach(movie =>  {
    movieHTML += `
     <li id='movie' class="movie" >
      <div class="js-btn-selected movie-chek movie-chek_close" id="btn-selected"></div>
      <p class="js-movie-name" >${movie}</p>
      <button id='btmDelete' class="js-btn-delete"><img src="крестик.svg" alt="">  </button>
     </li>
    `
  });
 
 listlNode.innerHTML = movieHTML;
 btnDeleteNode.addEventListener('click', deleteHandler);

 }
function clearInput() {
  inputNode.value = '';
 }

function addHandler() {
  const movieFromUse = getFromUser();
  addMovie(movieFromUse);
  saveMoviesLocalStorage();
  render();
  clearInput();
 
 }



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
 

btnAddNode.addEventListener('click', addHandler);



// moviesListNode.addEventListener('click', selectedMovieHandler)

















 


