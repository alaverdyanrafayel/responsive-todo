// Provide Cryptographic Functionality
const crypto = require('crypto').randomBytes(256).toString('hex');

// Export db Config Object
module.exports = {
    uri: 'mongodb://localhost:27017/todoapp',
    secret: crypto,
    db: 'todoapp'
};