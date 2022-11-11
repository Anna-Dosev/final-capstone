const ensureAuth = (req, res, next) => {
    // res.json({message: 'You are not logged in.'});
    return next();
};

module.exports = { ensureAuth };