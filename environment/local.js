let builder = require('botbuilder');

module.exports = (settings) => {
    let connector = new builder.ConsoleConnector().listen();
    let bot = new builder.UniversalBot(connector);

    return bot;
}