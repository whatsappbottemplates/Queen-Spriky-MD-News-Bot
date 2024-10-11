const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'M20ShKLC#k49kx727mZsAZbVmOg9cmlg4BakWjIWGm-apWGXDkL8', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://elisaqueen525:1234@cluster0.qf2vrdx.mongodb.net/',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94758900210',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94773366833'    // Enter Your Bot Number
};
