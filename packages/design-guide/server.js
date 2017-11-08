const server = require('pushstate-server');

const port = process.env.PORT || 9002;

server.start({
  port,
  directory: './dist',
});
