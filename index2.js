// const movies = [];

const inputNode = document.querySelector(".js-inputMovie");
const btnAddNode = document.querySelector(".js-btn-new-movie");
const listlNode = document.querySelector(".js-movies-list");

const btnSelected = document.createElement("input");
const btnDelete = document.createElement("button");
const newMovie = {input: btnSelected, movie: movieFromUse, button: btnDelete};

btnSelected.className = "btn-selected";
btnDelete.className = "btn-delete";

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

function addMovie(movie) {
  movies.push(movie);
}
function getMovies() {
  return movies;
}
function saveMoviesLocalStorage() {
  localStorage.setItem("movies", JSON.stringify(movies));
}
function render() {
  const movies = getMovies();
  let movieHTML = '';
  movies.forEach(movie =>  {
    movieHTML += `
     <li id='movie' class="movieItem" >
      <input type="checkbox" class="btn-selected" id="btnSelected"> </input>
      <label for="btnSelected"</label>
      <div class="movieName" >${movie.movie}</div>
      <button id='btmDelete' class="btn-delete"><img src="крестик.svg" alt=""></button>
     </li>
    `

  });
  btnAddNode.disabled = false; 

 listlNode.innerHTML = movieHTML;

}

// function render() {
//   const movies = getMovies();
 
//   listlNode.innerHTML = "";

 
//   movies.forEach(function (movie) {
//     let movieItem = document.createElement("li");
//    movieItem.className = "movieItem";

//     const movieName = document.createElement("div");
//     movieName.className = "movieName";
//     movieName.textContent = `${movie}`;

//     const btnDelete = document.createElement("button");
//     btnDelete.className = "btn-delete";
//     const btnSelected = document.createElement("input");
//     btnSelected.className = "btn-selected";

//     movieItem.append(movieName);
//     movieItem.append(btnDelete);
//     movieItem.prepend(btnSelected);

//     listlNode.append(movieItem);
    // btnAddNode.disabled = false; 

    
  
    
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
   
//   });
// }
inputNode.addEventListener('input', function() {
  if (listlNode.value !=="")  {
    btnAddNode.disabled = false;
   } else {
    btnAddNode.disabled = true;
   }
})

function clearInput() {
  inputNode.value = "";
}

function addHandler() {
  const movieFromUse = getFromUser();


    console.log(movies);
  addMovie(newMovie);
  render();
  saveMoviesLocalStorage(movies);
  btnAddNode.disabled = true;
  clearInput();
  btnDelete.addEventListener("click", movieDeleteHandler);
  btnSelected.addEventListener("click", movieSelectedHandler);
}

btnAddNode.addEventListener("click", addHandler);

