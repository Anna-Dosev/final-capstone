const jwt = require('jsonwebtoken');


const ensureAuth = (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];

    if (token) {
        try {
            const decoded = jwt.verify(token, 'config.JWT_SECRET');
            if (decoded) {
                next()
            } else {
                res.json({isSuccess : false})
            }
        } catch(error) {
            res.json({message: 'token has been tampered'})
        }
    } else {
        res.json({message: 'TBD'})
    }     

};

module.exports = { ensureAuth };