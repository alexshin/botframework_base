let builder = require('botbuilder');
let restify = require('restify');

module.exports = (settings) => {
    let connector = new builder.ChatConnector({
        appId: settings.appId,
        appPassword: settings.appPassword
    });

    let bot = new builder.UniversalBot(connector);
    let server = restify.createServer();

    server.listen(settings.port, () => {
        console.log(`${server.name} listening to ${server.url}`);
    });

    server.post('/api/messages', connector.listen());

    return bot;
}