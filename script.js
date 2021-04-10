const apiURL = :
fetch(apiURL).then(response => response.json())
.then((data) => {
  data.Search.forEach(movie => {
    const newMovie = `<li>


    </li>`

  });
}
