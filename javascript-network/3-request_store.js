


const request = require('request');
const fs = require('fs');

// Check if the correct number of arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <outputFilePath>');
  process.exit(1);
}

// Get the URL and output file path from command line arguments
const url = process.argv[2];
const outputPath = process.argv[3];

// Make an HTTP GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Check if the request was successful (status code 200)
  if (response.statusCode === 200) {
    // Write the response body to the specified file with UTF-8 encoding
    fs.writeFile(outputPath, body, 'utf-8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        process.exit(1);
      }

      console.log( `Successfully saved the content of ${url} to ${outputPath}`);
    });
  } else {
    console.error( Failed to fetch URL (${url}), status code: ${response.statusCode} );
    process.exit(1);
  }
});
 



