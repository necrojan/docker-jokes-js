const restify = require('restify');
const jokes = require('./services/jokes.js');

const vm = this;
jokes.Data.then(data => vm.joke = data);

function jokesRes(req, res, next) {
  const data = {
    jokes: vm.joke
  };
  res.send(data);
  next();
}

const server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.get('/random-jokes', jokesRes);

const port = 80

server.listen(port, () => {
  console.log(`Listening to port: ${port} - server: ${server.name} - serverUrl: ${server.url}`);
})