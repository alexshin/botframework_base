// Setup restify server
let appSettings = {
    port: process.env.port || process.env.PORT || 8080,
    appId: process.env.APP_ID,
    appPassword: process.env.APP_PASSWORD,
    env: process.env.APP_ENVIRONMENT || 'local'
};

let bot = require('./environment/' + appSettings.env + '.js')(appSettings);

// Append commands
require('./commands/deleteUserData.js')(bot);
require('./commands/dialog.js')(bot);
require('./commands/typing.js')(bot);