// const movies = [];

const inputNode = document.querySelector(".js-inputMovie");
const btnAddNode = document.querySelector(".js-btn-new-movie");
const listlNode = document.querySelector(".js-movies-list");

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

function addMovies(movie) {
  movies.push(movie);
}
function getMovies() {
  return movies;
}
function saveMoviesLocalStorage() {
  localStorage.setItem('movies', JSON.stringify(movies)); 
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
  movies.forEach(function(movie){
    const li = document.createElement('li');
    li.className = "li";

    const movieName = document.createElement('div');
    movieName.className = 'movieName';
    
    movieName.textContent = `${movie}`;
     
    const btnDelete = document.createElement('button');
    btnDelete.className = "btn-delete";
    const btnSelected = document.createElement('div');
    btnSelected.className = "btn-selected";

   li.append(movieName); 
   li.append(btnDelete);
   li.prepend(btnSelected);

   listlNode.append(li);
   
   btnDelete.addEventListener('click', function() {
    alert('ты уверен, что хочешь удалить этот фильм?');
    li.remove();
    // localStorage.removeItem('movies');
   
    } )
    let selectedLi;
    btnSelected.addEventListener('click', function() {
      alert('ты действительно хочешь пометить этот фильм, как просмотренный?')
      selectedLi = li;
      selectedLi.className = 'close';
      btnSelected.className = "btn-selected-close"


   });


  });
}


function clearInput() {
  inputNode.value = '';
 }

function addHandler() {
  const movieFromUse = getFromUser();
  addMovies(movieFromUse);
   render();
  saveMoviesLocalStorage();
  clearInput();
 
 }
//  function deleteAndSelecterHandler(event) {
//   let target = event.target;
// //   if (target.className != '"btn-delete') {
// //     return;
// //   } listItem.remove();
// // }

//   if (event.target.closest('.movieslist')) {
//     alert('ghbdtn')
//  }
// }
//  function deleteHandler(event) {


  // if (event.target.closest('.movies-list')) {
  //   alert('не я')

  // }
// } 
// let selectedLi;
// // let movie = document.querySelector('movie')

// function selectedHandler(event) {
//   let target = event.target;
//   selectedMovie(target);
// }
// function selectedMovie() {
//   selectedLi = li;
//   selectedLi.className = 'close';
// }

btnAddNode.addEventListener('click', addHandler);
// listlNode.addEventListener('click', selectedHandler);


















 


