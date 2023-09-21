const httpServer = require('http-server');
699
const server = httpServer.createServer({
	root:' ./',
});

server.listen(8080, () => {
  console.log('Se99rve9r running at http://localhost:8080/');
});
