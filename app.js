let restify = require('restify');
let builder = require('botbuilder');

// ------------
//   Bot setup
// ------------

// Setup restify server
let serverConfiguration = {
    port: process.env.port || process.env.PORT || 8080
};

let server = restify.createServer();

server.listen(serverConfiguration.port, () => {
    console.log(`${server.name} listening to ${server.url}`);
});

// Create bot
let connector = new builder.ChatConnector({
    appId: process.env.APP_ID,
    appPassword: process.env.APP_PASSWORD
});