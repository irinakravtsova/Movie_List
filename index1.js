// const movies = [];

const inputNode = document.querySelector(".js-inputMovie");
const btnAddNode = document.querySelector(".js-btn-new-movie");
const listlNode = document.querySelector(".js-movies-list");

const moviesFromLStorage = JSON.parse(localStorage.getItem("movies"));
let movies = [];
if (Array.isArray(moviesFromLStorage)) {
  movies = moviesFromLStorage;
}
render();

function getFromUser() {
  const movieInput = inputNode.value;
  let movie = movieInput.trim();
  return movie;
}

function addMovies(movie) {
  movies.push(movie);

}
function getMovies() {
  return movies;
}
function saveMoviesLocalStorage() {
  localStorage.setItem("movies", JSON.stringify(movies));
}

// function render() {
//   const movies = getMovies();
//   let movieHTML = '';
//   movies.forEach(movie =>  {
//     movieHTML += `
//      <li id='movie' class="movie" >
//       <div class="js-btn-selected movie-chek movie-chek_close" id="btn-selected"></div>
//       <p class="js-movie-name" >${movie}</p>
//       <button id='btmDelete' class="js-btn-delete"><img src="крестик.svg" alt=""></button>
//      </li>
//     `
//   });

//  listlNode.innerHTML = movieHTML;

// }

function render() {
  const movies = getMovies();
 
  listlNode.innerHTML = "";

 
  movies.forEach(function (movie) {
    let movieItem = document.createElement("li");
   movieItem.className = "movieItem";

    const movieName = document.createElement("div");
    movieName.className = "movieName";
    movieName.textContent = `${movie}`;

    const btnDelete = document.createElement("button");
    btnDelete.className = "btn-delete";
       const btnSelected = document.createElement("div");
    btnSelected.className = "btn-selected";

    movieItem.append(movieName);
    movieItem.append(btnDelete);
    movieItem.prepend(btnSelected);

    listlNode.append(movieItem);
  
    
    function movieDeleteHandler(movie) {
      alert("ты уверен, что хочешь удалить этот фильм?");
          movieItem.remove();
        }
   
    function movieSelectedHandler(movie) {
      let selectedMovieItem;
      alert("ты действительно хочешь пометить этот фильм, как просмотренный?");
      selectedMovieItem = movieItem;
      selectedMovieItem.className = "movieItem-selected";
      btnSelected.className = "btn-selected-close"; 
    }
    btnDelete.addEventListener("click", movieDeleteHandler);
    btnSelected.addEventListener("click", movieSelectedHandler);
  });
}

function clearInput() {
  inputNode.value = "";
}

function addHandler() {
  const movieFromUse = getFromUser();
  addMovies(movieFromUse);
  render();
  saveMoviesLocalStorage(movies);
  clearInput();
}

btnAddNode.addEventListener("click", addHandler);

