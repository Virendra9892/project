
exports.currentTime = (req,res,next)=>{
    try{
       let date =  new Date();
       res.send(date)
    }
    catch(error){
        next(error)
    }
}

// let date = new Date().toISOString();

// console.log(date)