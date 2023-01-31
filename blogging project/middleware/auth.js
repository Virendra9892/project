const jwt = require("jsonwebtoken");
const db = require("../models/index");
const author = db.author;
const config = require("config");
module.exports = async(req,res,next)=>{
    try{
         let token = req.header("Authorization");
         if(!token){
            return res.status(404).send({sucess:false,message:"please enter token"});
         }
         let token1 = token.split(" ")[1]
         let decode = await jwt.verify(token1,config.get("jwtPrivateKey"));
         console.log("decode = ",decode)
         // console.log("decode = ",decode);
         // let authorDetails = await author.findOne({where:{email:decode.email}});
         // if(!authorDetails){
         //    return res.status(404).send({sucess:false,message:"Author doesn't exist"})
         // }else{
         // next()}
         next()
    }
    catch(error){
        next(error)
    }
}