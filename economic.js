const te = require('tradingeconomics');
te.login('2805f77d7a7c424:aktayykt341w3gs');

data = te.getHistoricalData(country = 'mexico', indicator = 'gdp').then(function(data){
  console.log(data)       
});
