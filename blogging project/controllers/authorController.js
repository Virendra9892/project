const authorServices = require("../services/authorService")


exports.registerAuthor = async(req,res,next)=>{
    try{
        let body = req.body;
        let result = await authorServices.registerAuthor({
            title:body.title,
            fname:body.fname,
            lname:body.lname,
            email:body.email,
            password:body.password,
            age:body.age,
            salary:body.salary,
            technology:body.technology
        });
        if(result){
            return res.status(result.status).send({sucess:result.sucess,message:result.messae,result:result.data})
        }
    }
    catch(error){
        next(error)
    }
}

exports.loginAuthor = async(req,res,next)=>{
    try{
       let body = req.body;
    //    console.log(body);
       let token = await authorServices.loginAuthor({
        email:body.email,
        password:body.password
       });
       if(token){
        return res.status(token.status).send({sucess:token.sucess,message:token.message,token:token.data})
       }
    }
    catch(error){
        next(error)
    }
}

exports.logoutUser = async(req,res,next)=>{
    try{
        let token = req.header("Authorization"); 
        console.log(token);
     
        let result = await authorServices.logoutUser(token);
        if(result){
            return res.send(result.status).send({sucess:result.sucess,message:result.message})
        }
    }
    catch(error){
        next(error)
    }
}

exports.getAllAuthor = async(req,res,next)=>{
    try{
        let result = await authorServices.getAllAuthor();
        if(result){
            return res.status(result.status).send({sucess:result.sucess,message:result.message,data:result.data})
        }
    }
    catch(err){
        next(err)
    }
}

exports.getAuthorById = async(req,res,next)=>{
    try{
        let id = req.params.id;
        let result = await authorServices.getAuthorById(id);
        if(result){
            return res.status(result.status).send({sucess:result.sucess,message:result.message,result:result.data})
        }
    }
    catch(error){
        next(error)
    }
}

exports.getAuthorByFilter = async(req,res,next)=>{
    try{
        // return okk
        let {age,salary,technology} = req.query;
        let result = await authorServices.getAuthorByFilter(
            age,
            salary,
            technology
        )
        console.log("technology = ",technology)
        if(result){
            // return res.status(result.status).send({sucess:result.sucess,message:result.message,result:result.data})
            return res.send(result)
        }
    }
    catch(error){
        next(error)
    }
}