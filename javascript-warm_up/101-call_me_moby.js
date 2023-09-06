// Define the callMeMoby function and export it
function callMeMoby(x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction(); // Execute the provided function x times
  }
}

module.exports.callMeMoby = callMeMoby;

