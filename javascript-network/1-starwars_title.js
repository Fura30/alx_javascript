
const request = require('request');

const movieId = process.argv[2];

if (!movieId || isNaN(movieId)) {
  console.error('Please provide a valid movie ID as a command-line argument.');
  process.exit(1);
}

const apiUrl =  https://swapi-api.alx-tools.com/api/films/${movieId} ;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
  } else {
    try {
      const movieData = JSON.parse(body);
      console.log(movieData.title);
    } catch (parseError) {
      console.error('Error parsing API response:', parseError);
    }
  }
});
 
