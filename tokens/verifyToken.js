const jwt = require("jsonwebtoken");
const passKey = "task-tracker";
function authenticationToken(req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({error:"Access token required"});
    }
    jwt.verify(token, passKey, (err,admin)=>{
        if(err){
                console.error("token verification error:",err);
                return res.status(403).json({error:"invalied or expired token"});
        }
        req.admin=admin;
        next();

    });
}
module.exports = authenticationToken;