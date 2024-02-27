
const inputNode = document.querySelector(".js-inputMovie");
const btnAddNode = document.querySelector(".js-btn-new-movie");
const listlNode = document.querySelector(".js-movies-list");


const btnSelected = document.createElement("div");
const btnDelete = document.createElement("button");

const moviesFromLStorage = JSON.parse(localStorage.getItem("movies"));

let movies = [];
if (Array.isArray(moviesFromLStorage)) {
  movies = moviesFromLStorage;
}
render();

inputNode.addEventListener('input', function() {
  if (listlNode.value !=="")  {
    btnAddNode.disabled = false;
   } else {
    btnAddNode.disabled = true;
   }
})

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
  movies.forEach((movie, index) =>  {
    movieHTML += `
     <li id='movie' class="movieItem" data-index=${index}>
      <div class="btn-selected" data-action="done" id="btn-selected"></div>
      <div class="movieName" >${movie.movie}</div>
      <button id='btmDelete' class="btn-delete" data-action="delete" ></button>
     </li>
    ` 

  });
 
  // <input type="checkbox" class="btn-selected" id="btnSelected" data-action="done"> </input>
  // <label for="btnSelected"</label>
 
  listlNode.innerHTML = movieHTML;

 const handleAction = (e) => {
  const action = e.target.dataset.action; 
  console.log(action);
  //(извлекается значение атрибута data-action элемента, на котором произошло событие)
  const parentNode = e.target.closest(".movieItem"); 
  //(находим ближайший родительский элемент с классом .box)
  const index = parseInt(parentNode.dataset.index, 10);
  //(извлекается индекс фильма из атрибута data-index родительского элемента)
  if (action === "delete") { 
    // alert("ты уверен, что хочешь удалить этот фильм?");
    movies.splice(index, 1);
    parentNode.remove();
  } else if (action === "done") {
    movies[index].completed = !movies[index].completed;
    parentNode.classList.toggle("movieItem-selected");
    
    btnSelected.classList.toggle("btn-selected-close");
 
  }
};
listlNode.addEventListener("click", handleAction);
}

function clearInput() {
  inputNode.value = "";
}
 
function addHandler() {
  const movieFromUse = getFromUser();
  const newMovie = {check: btnSelected, movie: movieFromUse, button: btnDelete};
  addMovie(newMovie);
  render();
  saveMoviesLocalStorage(movies);
  btnAddNode.disabled = true;
  clearInput();
}

btnAddNode.addEventListener("click", addHandler);


