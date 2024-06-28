const jwt = require('jsonwebtoken');

const generateRegistrationToken = () => {
    return jwt.sign({}, process.env.JWT_SECRET, { expiresIn: '24h' });
};

const verifyRegistrationToken = (token) => {
    try {
        jwt.verify(token, process.env.JWT_SECRET);
        return true;
    } catch (error) {
        return false;
    }
};

module.exports = { generateRegistrationToken, verifyRegistrationToken };
