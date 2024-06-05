const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    const accessToken = req.header('Authorization')
    if (!accessToken) {
        return res.status(401).json({
            message: "Unauthorized:  No token provided"
        })
    }
    if (accessToken) {
        jwt.verify(accessToken, process.env.JWT_SECREET, (err, data) => {
            if (err && err.name === "TokenExpiredError") {
                return res.status(401).json({
                    message: "Unauthorized: Token expired"
                })
            } else if (err) {
                return res.status(500).json({ err });
            }
            req.data = data;
            next();
        })
    } else {
        return res.status(401).json({ message: "You are not authenticated" });
    }
}


