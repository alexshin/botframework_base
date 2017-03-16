let stringUtils = require('string');

module.exports = (bot) => {
    bot.dialog('/', (session) => {
        let origMessage = session.message.text;
        let message = origMessage.toLowerCase();

        if(stringUtils(message).contains('hello')) {
            session.send(`Hey, How are you?`);
        } 
        else if(stringUtils(message).contains('help')) {
            session.send(`How can I help you?`);
        }
        else {
            session.send(`Sorry, I don't understand you...`);
        }
    });
}