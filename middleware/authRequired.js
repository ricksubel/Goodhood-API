const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // JWT validation
  console.log(req.headers);
  
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const token = bearerHeader.split(" ")[1];

        jwt.verify(token, "super_secret_key", function (err, payload) {
        if (err) return res.status(500).json({ message: "Invalid token" });

        req.userId = payload._id; //set user id for routes to use
        next();
        });
    } else {
        res.sendStatus(403);
    }
};