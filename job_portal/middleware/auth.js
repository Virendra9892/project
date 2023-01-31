const jwt = require("jsonwebtoken");
const config = require("config");
const db = require("../models/index");
const tokens = db.token;


module.exports = async (req,res,next)=>{
    try{
        let token = req.header("Authorization");
        if(!token){
            return res.status(403).send({sucess:false,message:"Unauthorised"})
        }
        let token1 = token.split(" ")[1];
        let exist = await tokens.findOne({where:{token:token1}});
        if(!exist){
            return res.status(403).send({sucess:false,message:"Unauthorised"})
        }
        let expiry_dates = exist.dataValues.expiry_date;
        let current_time = moment();
        console.log("current_time = ",current_time);
        console.log("expiry_date = ",expiry_dates);
        console.log("exist = ",exist);
        let decode = jwt.verify(token1,config.get("jwtPrivateKey"));
        if(!decode){
            return res.status(403).send({sucess:false,message:"Unauthorised"});
        }
        next()
    }
    catch(error){
        next(error)
    }
}