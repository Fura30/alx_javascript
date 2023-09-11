 const request = require(request);

const url = process.argv[2]; // Get the URL from command line arguments

request.get(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(code: ${response.statusCode});
  }
});
