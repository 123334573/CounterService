const { verify, sign } = require('jsonwebtoken');

const secret = 'Counter';

const createToken = (username) => {
    const payload = { user: username };
    return sign(payload, secret, { expiresIn: '1h' });
};

module.exports = {
    createToken
};
