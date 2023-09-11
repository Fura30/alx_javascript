const fetch = require('node-fetch');

const movieId = process.argv[2];
const apiUrl = https://swapi-api.alx-tools.com/api/films/${movieId};

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data.title);
  })
  .catch(error => console.error(error));
