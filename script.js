const list = document.getElementById("results");

const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movie = `<li>
      <img src="${result.Poster}" alt="" />
      <p>${result.Title}</p>
    </li>`;
    list.insertAdjacentHTML("beforeend", movie);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=24885019`)
    .then((response) => response.json())
    .then(insertMovies);
};

fetchMovies("The Layercake"); // on 1st page load

const form = document.getElementById("search-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  list.innerHTML = "";
  const input = document.getElementById("search-input");
  fetchMovies(input.value);
});
