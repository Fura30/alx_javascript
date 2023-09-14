const request = require('request');
const fs = require('fs');

const urlToRequest = process.argv[2];
const filePathToStore = process.argv[3];

request.get({url: urlToRequest}, (error, response, body) => {
  if (error) {
    console.error(`Error while requesting ${urlToRequest}:\n${error}`);
    return;
  }

  // Save the body response in a file
  fs.writeFile(filePathToStore, body, {encoding: 'utf-8'}, (error) => {
    if (error) {
      console.error(`Error while storing response in ${filePathToStore}:\n${error}`);
      return;
    }
    console.log(`Successfully stored the response in ${filePathToStore}`);
  });
});
