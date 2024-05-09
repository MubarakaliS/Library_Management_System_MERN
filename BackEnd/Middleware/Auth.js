const jwt = require('jsonwebtoken');
const SECRET_KEY = 'NOTESAPI:';

const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            token = token.split(" ")[1];
            let admin = jwt.verify(token, SECRET_KEY);
            // res.locals.adminId = admin.id;  // Use res.locals instead of res.adminId
            req.adminId = admin.id;
        } else {
            res.status(400).json({ message: 'Unauthorized Admin' });
        }
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: 'Unauthorized Admin' });
    }
}

module.exports = auth;
