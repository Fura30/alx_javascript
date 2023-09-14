
const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.log('Please provide a Movie ID as the first argument.');
  process.exit(1);
}

const apiUrl =  https://swapi.dev/api/films/${movieId}/ ;

request(apiUrl, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.error('Error fetching movie data.');
    process.exit(1);
  }

  const movieData = JSON.parse(body);
  const characterUrls = movieData.characters;

  if (!characterUrls || characterUrls.length === 0) {
    console.log('No characters found for this movie.');
    process.exit(0);
  }

  const fetchCharacterData = (characterUrl) => {
    request(characterUrl, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const characterData = JSON.parse(body);
        console.log(characterData.name);
      } else {
        console.error('Error fetching character data.');
      }
    });
  };

  console.log( Characters in ${movieData.title}: );

  // Fetch and print character names
  characterUrls.forEach(fetchCharacterData);
});
 

