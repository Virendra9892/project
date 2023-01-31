const candidateServices = require("../services/candidateServices")


exports.registerCandidate = async(req,res,next)=>{
    try{
       let body = req.body;
       let result = await candidateServices.registerCandidate({
        fname:body.fname,
        lname:body.lname,
        email:body.email,
        password:body.password
       });
       if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,data:result.data})
       }
    }
    catch(error){
        next(error)
    }
}

exports.loginCandidate = async(req,res,next)=>{
      try{
        let body = req.body;
        let result = await candidateServices.loginCandidate({
            email:body.email,
            password:body.password
        });
        if(result){
            return res.status(result.status).send({sucess:result.sucess,message:result.message,result:result.token})
        }
      }
      catch(error){
        next(error)
      }
}

exports.logoutCandidate = async(req,res,next)=>{
    try{
        let token = req.header("Authorization");
        let result = await candidateServices.logoutCandidate(token);
        if(result){
            return res.status(result.status).send({sucess:result.sucess,message:result.message})
            }
    }
    catch(error){
        next(error)
    }
}

// exports.resetPassword = async

exports.findCandidate = async(req,res,next)=>{
    try{
        let data = await candidateServices.findCandidate();
        if(data){
            return res.status(data.status).send({sucess:data.sucess,message:data.message,data:data.result})
        }
    }
    catch(error){
        next(error)
    }
}

