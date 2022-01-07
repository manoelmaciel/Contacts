// server.js

const http = require('http');

const host = "localhost";
const port = 3001;

const server = http.createServer((req, res) => {
  res.write('<h1>Hello ... World!</h1>');
  res.end();
});

server.listen(port, host, () => {
  console.log('Servidor ... Respondendo em: %s:%s', host, port) 
})




