const jwt = require("jsonwebtoken")
const JWT_SECRET = "my_secretkey";
function authenticateToken(req, res, next){
    const authHeader = req.headers("authorization");
    const token = authHeader && authHeader.split("")[1];
    if (!token) {
        return res.status(401).json({error:"Access token is required"})
    }
    jwt.verify(token, JWT_SECRET, (err,student,)=>{
        if (err) {
            console.error("token verification error", err);
            return res.status(403).json({error:"invalid or expired token"});
        };
        req.student = student;
        next();
    });
}
module.exports = authenticateToken;