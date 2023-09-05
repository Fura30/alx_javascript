
// 101-call_me_moby.js
exports.callMeMoby = function (x, theFunction) {
  if (x > 0) {
    theFunction();
    callMeMoby(x - 1, theFunction);
  }
};
