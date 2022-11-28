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
            if (error instanceof jwt.JsonWebTokenError) {
                res.status(401).json({isSuccess: false, message: error.message})
              } else {
                res.status(401).json({isSuccess: false, message: 'The token sent to the server is invalid 2.'})
              }
        }
    } else {
        res.json({message: 'TBD'})
    }     

};

module.exports = { ensureAuth };