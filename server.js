const http = require( 'http' );
const app = require( './app' );

const server = http.createServer( app );

const PORT = process.env.PORT || 3002;

server.listen( PORT );