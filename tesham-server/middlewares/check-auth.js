const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // TODO repair this Damn
    try {
        const token = req.headers['authorization'].split(' ')[1];
        jwt.verify(token, 'secret should be changed');
        next();
    } catch (e) {
        res.status(401).json({
            message: 'user is not authorized'
        })
    }
};
