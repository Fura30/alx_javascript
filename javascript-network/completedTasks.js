
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Status:', response.statusCode);
  } else {
    const tasks = JSON.parse(body);
    const completedTasksByUserId = {};

    tasks.forEach((task) => {
      if (task.completed) {
        if (completedTasksByUserId.hasOwnProperty(task.userId)) {
          completedTasksByUserId[task.userId]++;
        } else {
          completedTasksByUserId[task.userId] = 1;
        }
      }
    });

    console.log(completedTasksByUserId);
  }
});
